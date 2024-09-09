import { logout } from '@/libs/features/slice/userSlice'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

export const useLogout = () => {
  const dispatch = useDispatch()
  const router = useRouter()

  const userLogoutHandler = () => {
    dispatch(logout())
    router.push('auth/login')
  }

  return userLogoutHandler
}
