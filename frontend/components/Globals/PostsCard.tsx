import Image from 'next/image'
import React from 'react'

interface PostsCardProps {
  posts: any[]
}

const PostsCard: React.FC<PostsCardProps> = ({ posts }) => {
  return (
    <div className="mt-12 flex gap-12 flex-wrap justify-center">
      {posts.map((post: any) => (
        <div key={post.id} className="post-item mt-12 border p-5">
          {post.post_image && (
            <div className="w-[300px] h-[400px] relative">
              <Image
                className="relative"
                src={`/images/${post.post_image}`}
                alt={post.post_title}
                fill
              />
            </div>
          )}

          <div className="card-content">
            <h2 className="text-xl mt-3">{post.post_title}</h2>
            <p className="text-md">{post.post_content}</p>
            <p className="text-sm text-opacity-45">Shared by: {post.User?.user_name}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PostsCard
