'use client'

import React, { useState, useEffect, Suspense } from 'react'
import { gettAllPosts } from '@/service/api'
import { CreatePost } from './CreatePost'
const PostCard = React.lazy(() => import('@/components/Globals/PostsCard'))

const AllPosts = () => {
  const [posts, setPosts] = useState<any[]>([])

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await gettAllPosts()
        setPosts(fetchedPosts)
      } catch (error) {
        console.error('Hata:', error)
      }
    }

    fetchPosts()
  }, [])

  const handleNewPost = (newPost: any) => {
    setPosts([newPost, ...posts])
  }

  return (
    <section>
      <CreatePost onNewPost={handleNewPost} />
      <Suspense fallback={<div>Loading</div>}>
        <PostCard posts={posts} />
      </Suspense>
    </section>
  )
}

export default AllPosts
