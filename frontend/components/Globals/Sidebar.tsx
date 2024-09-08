'use client'
import Link from 'next/link'
import HomeIcon from '@mui/icons-material/Home'
import LoginIcon from '@mui/icons-material/Login'
import SettingsIcon from '@mui/icons-material/Settings'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import { useUser } from '@/hooks/useUser'
import { useDispatch } from 'react-redux'
import { logout } from '@/libs/features/slice/userSlice'

const Sidebar = () => {
  const dispatch = useDispatch()
  const user = useUser()
  const userLogoutHandler = () => {
    dispatch(logout())
    window.location.href = '/auth/login'
  }

  return (
    <article className="flex flex-col gap-6 px-6 w-[300px] mt-12">
      <div className="flex flex-col gap-6">
        <div className="flex items-center justify-between border border-solid p-10">
          <ul className="sidebar-items flex flex-col gap-10">
            <li className="sidebar-item flex gap-4 align-center">
              <HomeIcon />
              <Link href={'/'}>Anasayfa</Link>
            </li>
            <li className="sidebar-item flex gap-4 aling-center">
              <LoginIcon />
              <Link href={'/auth/login'}>Login / Register</Link>
            </li>
            <li className="sidebar-item flex gap-4 aling-center">
              <AccountBoxIcon />
              <Link href={'/pages/profile'}>Profile</Link>
            </li>
            <li className="sidebar-item flex gap-4 aling-center">
              <SettingsIcon />
              <Link href={'/'}>Fonts & Colors</Link>
            </li>
            {user.status === 'failed' ? null : (
              <li className="logout-btn">
                <button
                  onClick={userLogoutHandler}
                  className="bg-blue-500 text-white rounded-md p-1 w-full mt-3"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default Sidebar
