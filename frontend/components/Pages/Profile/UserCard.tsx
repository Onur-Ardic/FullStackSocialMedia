'use client'
import { useEffect, useState } from 'react' // Değişiklik burada
import { useUser } from '@/hooks/useUser'
import { gettAllPosts } from '@/service/api'
import { useRouter } from 'next/navigation'
import React from 'react'
import UserPost from './UserPost'

const UserCard = () => {
  // async kaldırıldı
  const router = useRouter()
  const user = useUser()
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPosts = async () => {
      const getPosts = await gettAllPosts()
      if (user.status === 'idle') {
        router.push('/')
      }

      const userPosts = getPosts.filter((posts: any) => {
        return posts.User?.user_name === user?.user?.username
      })

      setPosts(userPosts)
    }

    fetchPosts()
  }, [])

  return (
    <>
      <div className="user-profile-card flex justify-around items-center border p-10">
        <div className="user-card-left w-[200px] h-[200px]">
          <img src="https://via.placeholder.com/200" alt="Profile Picture" className="w-full" />
        </div>

        <div className="user-card-right flex flex-col gap-4">
          <div className="username">{user?.user?.username}</div>
          <div className="email">{user?.user?.email}</div>
        </div>
      </div>

      <UserPost posts={posts} />
    </>
  )
}

export default UserCard
