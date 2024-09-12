import Sidebar from '@/components/Globals/Sidebar'
import { CreatePost } from '@/components/Pages/Home/CreatePost'
import './globals.css'
import AllPosts from '@/components/Pages/Home/AllPosts'

export default function Home() {
  return (
    <main className="main container mx-auto">
      <div className="sidebar">
        <Sidebar />
      </div>

      <CreatePost />

      <section>
        <AllPosts />
      </section>
    </main>
  )
}
