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
      </div>
    </section>
  )
}

export default page
