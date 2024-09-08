'use client'
import { useUser } from '@/hooks/useUser'

export default function Home() {
  const { user } = useUser()

  user || <p>Kullanıcı bilgisi yok</p>
  return (
    <main>
      <h1>Hello Word</h1>
      <p>Kullanıcı adı: {user?.username}</p>
      <p>Email: {user?.email}</p>
    </main>
  )
}
