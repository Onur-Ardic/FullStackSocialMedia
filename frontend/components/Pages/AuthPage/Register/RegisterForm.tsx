'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const RegisterForm = () => {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordAgain: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(formData)
    if (formData.password !== formData.passwordAgain) {
      alert('Şifreler eşleşmiyor')
      return
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setTimeout(() => {
          alert('Kayıt Başarılı Giriş Sayfasına Yönlendiriliyorsunuz')
          router.push('/auth/login')
        }, 2000)
      }
    } catch (error) {
      console.log(error + ' ' + 'Kayıt Başarısız')
    }
  }
  return (
    <form className="mt-3" onSubmit={handleSubmit}>
      <div className=" flex flex-col gap-2">
        <label className="text-lg font-bold" htmlFor="username">
          Username :
        </label>
        <input
          className="border rounded-md p-1 outline-none"
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>
      <div className=" flex flex-col gap-2">
        <label className="text-lg font-bold" htmlFor="email">
          Email :
        </label>
        <input
          className="border rounded-md p-1 outline-none"
          type="email"
          id="email"
          name="email"
          value={formData.email}
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
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className=" flex flex-col gap-2">
        <label className="text-lg font-bold" htmlFor="password">
          Password Again :
        </label>
        <input
          className="border rounded-md p-1 outline-none"
          type="password"
          id="passwordAgain"
          name="passwordAgain"
          value={formData.passwordAgain}
          onChange={handleChange}
        />
      </div>
      <p className="text-sm text-center mt-3">
        Do you have an account?
        <Link href="/auth/login" className="ms-1 decoration-1">
          Login
        </Link>
      </p>
      <button type="submit" className="bg-blue-500 text-white rounded-md p-1 w-full mt-3">
        Sign Up
      </button>
    </form>
  )
}

export default RegisterForm
