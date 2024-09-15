import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

interface PostsCardProps {
  posts: any[]
}

const PostsCard: React.FC<PostsCardProps> = ({ posts }) => {
  console.log(posts)

  return (
    <div className="mt-12">
      {posts.map((post: any) => (
        <div key={post.id} className="post-item mt-12 border p-5">
          <Link key={post.id} href={`/pages/postdetail/${post.id}`}>
            {post.post_media && (
              <>
                {post.post_media.endsWith('.mp4') ? (
                  <div className="relative">
                    <video controls width="100%" height="auto" className="relative">
                      <source src={`/videos/${post.post_media}`} type="video/mp4" />
                      Tarayıcınız bu videoyu desteklemiyor.
                    </video>
                  </div>
                ) : (
                  <div className="w-[300px] h-[400px] relative">
                    <Image
                      className="relative"
                      src={`/images/${post.post_media}`}
                      alt={post.post_title}
                      fill
                    />
                  </div>
                )}
              </>
            )}

            <div className="card-content">
              <h2 className="text-xl mt-3">{post.post_title}</h2>
              <p className="text-md">{post.post_content}</p>
              <p className="text-sm text-opacity-45">Shared by: {post.User?.user_name}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  )
}

export default PostsCard
