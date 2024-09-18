import { formatDate } from '@/hooks/useFormatDate'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const UserPost = ({ posts }: { posts: any }) => {
  console.log(posts)

  return (
    <div className="user-post-wrapper my-3 ">
      <h2 className="text-center text-2xl m-3 underline">Posts</h2>
      <div className="post-card-wrapper flex gap-4">
        {posts.map((post: any) => (
          <div className="user-post-card border p-3 w-[300px]">
            <Link href={'#'}>
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
              <div className="user-post-header">
                <div className="user-post-user text-lg font-bold">{post.post_title}</div>
              </div>
              <div className="user-post-content leading-7">{post.post_content}</div>

              <div className="user-post-date text-sm font-light mt-1">
                {formatDate(post.post_date)}
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UserPost
