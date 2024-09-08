'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/libs/features/store'
import { fetchUser } from '@/libs/features/slice/userSlice'

const LoginForm = () => {
  const router = useRouter()
  const dispatch = useDispatch<AppDispatch>()
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        const data = await response.json()
        localStorage.setItem('token', data.token)
        dispatch(fetchUser())
        toast.success('Giriş başarılı')
        router.push('/')
      } else {
        const errorData = await response.json()
        toast.error(`Giriş başarısız: ${errorData.error}`)
      }
    } catch (error) {
      toast.error('Giriş başarısız: Bir hata oluştu')
    }
  }

  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-2">
        <label className="text-lg font-bold" htmlFor="email">
          Email :
        </label>
        <input
          className="border rounded-md p-1 outline-none"
          type="email"
          id="email"
          name="email"
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label className="text-lg font-bold" htmlFor="password">
          Password :
        </label>
        <input
          className="border rounded-md p-1 outline-none"
          type="password"
          id="password"
          name="password"
          onChange={handleChange}
        />
      </div>
      <p className="text-sm text-center mt-3">
        Don't have an account?
        <Link href="/auth/register" className="ms-1 decoration-1">
          Register
        </Link>
      </p>
      <button type="submit" className="bg-blue-500 text-white rounded-md p-1 w-full mt-3">
        Login
      </button>
    </form>
  )
}

export default LoginForm
