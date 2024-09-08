import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface User {
  id: number
  username: string
  email: string
}

interface UserState {
  user: User | null
  status: 'idle' | 'loading' | 'succeeded' | 'failed'
  error: string | null
}

const initialState: UserState = {
  user: null,
  status: 'idle',
  error: null,
}

export const fetchUser = createAsyncThunk('user/fetchUser', async () => {
  const token = localStorage.getItem('token')
  if (!token) throw new Error('Token bulunamadı')

  const response = await fetch('http://localhost:5000/api/auth/me', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  if (!response.ok) throw new Error('Kullanıcı bilgileri alınamadı')
  return await response.json()
})

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<User | null>) => {
      state.user = action.payload
    },
    logout: (state) => {
      state.user = null
      localStorage.removeItem('token')
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.user = action.payload
      })
      .addCase(fetchUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message || null
      })
  },
})

export const { setUser, logout } = userSlice.actions

export default userSlice.reducer
