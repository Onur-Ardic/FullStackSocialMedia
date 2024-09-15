import { formatDate } from '@/hooks/useDate'
import Image from 'next/image'

const page = async ({ params }: { params: { id: number } }) => {
  const postId = params.id
  console.log(postId)

  const getPostById = async (postId: number) => {
    const postDetail = await fetch(`http://localhost:5000/posts/${postId}`)
    const data = postDetail.json()
    return data
  }

  const post = await getPostById(postId)

  return (
    <section className="container mx-auto mt-12">
      <div className="post-detail-wrapper flex justify-center flex-col">
        <div className="post-detail-title text-center">
          <h1 className="text-6xl uppercase">{post.post_title}</h1>
        </div>
        <div className="post-detai-content mx-auto mt-10 border p-10">
          <div className="post-detail-media ">
            {post.post_media && (
              <>
                {post.post_media.endsWith('.mp4') ? (
                  <div className="relative">
                    <video controls width="700px" height="auto" className="relative">
                      <source src={`/videos/${post.post_media}`} type="video/mp4" />
                      Tarayıcınız bu videoyu desteklemiyor.
                    </video>
                  </div>
                ) : (
                  <div className="w-[300px] h-[400px]">
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
          </div>
          <div className="post-detail-text mt-12">
            <p className="text-xl">{post.post_content}</p>
          </div>

          <div>
            <p className="text-sm text-opacity-45">Shared by: {post.User?.user_name}</p>
          </div>

          <div className="date">
            <h3>{formatDate(post.post_date)}</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
