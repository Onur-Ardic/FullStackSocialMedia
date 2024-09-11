import Sidebar from '@/components/Globals/Sidebar'
import { CreatePost } from '@/components/Pages/Home/CreatePost'
import './globals.css'

export default function Home() {
  return (
    <main className="main container mx-auto">
      <div className="sidebar">
        <Sidebar />
      </div>

      <div className="create-post-area border p-10 mt-11">
        <h1>Create a New Post</h1>
        <CreatePost />
      </div>
    </main>
  )
}
