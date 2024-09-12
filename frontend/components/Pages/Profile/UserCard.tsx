'use client'
import { useUser } from '@/hooks/useUser'
import { useRouter } from 'next/navigation'
import React from 'react'

const UserCard = () => {
  const router = useRouter()
  const user = useUser()
  console.log(user)

  user.status === 'idle' ? router.push('/') : null

  return (
    <div className="user-profile-card flex justify-around items-center border p-10">
      <div className="user-card-left w-[200px] h-[200px]">
        <img src="https://via.placeholder.com/200" alt="Profile Picture" className="w-full" />
      </div>

      <div className="user-card-right flex flex-col gap-4">
        <div className="username">{user?.user?.username}</div>
        <div className="email">{user?.user?.email}</div>
      </div>
    </div>
  )
}

export default UserCard
