import UserCard from '../../../components/Pages/Profile/UserCard'
import Link from 'next/link'
export const metadata = {
  title: 'Profile Page',
}
const page = () => {
  return (
    <section className="user-profile container mx-auto mt-12">
      <div className="user-profile-wrapper">
        <UserCard />

        <div className="user-post-wrapper my-3 ">
          <h2 className="text-center text-2xl m-3 underline">Posts</h2>
          <div className="post-card-wrapper flex gap-4">
            <div className="user-post-card border p-3 w-[300px]">
              <Link href={'#'}>
                <div className="post-img">
                  <img
                    src="https://via.placeholder.com/400"
                    alt="Post Image"
                    className="w-full h-[300px]"
                  />
                </div>
                <div className="user-post-header">
                  <div className="user-post-user text-lg font-bold">Onur Ardıç</div>
                </div>
                <div className="user-post-content leading-7">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec orci vel sapien
                  consectetur molestie. Nullam et tellus sed metus tristique consectetur. Sed
                  gravida mauris ut odio vulputate, id tincidunt velit semper.
                </div>

                <div className="user-post-date text-sm font-light mt-1">12 Mart, 2022</div>
              </Link>
            </div>
            <div className="user-post-card border p-3 w-[300px]">
              <div className="post-img">
                <img
                  src="https://via.placeholder.com/400"
                  alt="Post Image"
                  className="w-full h-[300px]"
                />
              </div>
              <div className="user-post-header">
                <div className="user-post-user">Onur Ardıç</div>
                <div className="user-post-date">12 Mart, 2022</div>
              </div>
              <div className="user-post-content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi nec orci vel sapien
                consectetur molestie. Nullam et tellus sed metus tristique consectetur. Sed gravida
                mauris ut odio vulputate, id tincidunt velit semper.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default page
