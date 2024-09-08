import { useSelector, useDispatch } from 'react-redux'
import { RootState, AppDispatch } from '../libs/features/store'
import { fetchUser } from '../libs/features/slice/userSlice'
import { useEffect } from 'react'

export const useUser = () => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user.user)
  const status = useSelector((state: RootState) => state.user.status)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchUser())
    }
  }, [status, dispatch])

  return { user, status }
}
