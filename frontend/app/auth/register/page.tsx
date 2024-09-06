import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <section className="container mx-auto">
      <div className="border rounded-md p-4 max-w-md mx-auto mt-10 min-h-60">
        <h1 className="text-2xl font-bold text-center mt-3">Register</h1>

        <form className="mt-3">
          <div className=" flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="email">
              Username :
            </label>
            <input
              className="border rounded-md p-1 outline-none"
              type="email"
              id="email"
              name="email"
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
            />
          </div>

          <div className=" flex flex-col gap-2">
            <label className="text-lg font-bold" htmlFor="password">
              Password Again :
            </label>
            <input
              className="border rounded-md p-1 outline-none"
              type="password"
              id="password"
              name="password"
            />
          </div>
          <p className="text-sm text-center mt-3">
            Do you have an account?
            <Link href="/auth/login" className="ms-1 decoration-1">
              Login
            </Link>
          </p>
          <button className="bg-blue-500 text-white rounded-md p-1 w-full mt-3">Sign Up</button>
        </form>
      </div>
    </section>
  )
}

export default page
