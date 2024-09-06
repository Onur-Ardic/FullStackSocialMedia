import Link from 'next/link'

const page = () => {
  return (
    <section className="container mx-auto">
      <div className="border rounded-md p-4 max-w-md mx-auto mt-10 min-h-60">
        <h1 className="text-2xl font-bold text-center mt-3">Login</h1>

        <form className="mt-3">
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
          <p className="text-sm text-center mt-3">
            Don't have an account?
            <Link href="/auth/register" className="ms-1 decoration-1">
              Register
            </Link>
          </p>
          <button className="bg-blue-500 text-white rounded-md p-1 w-full mt-3">Login</button>
        </form>
      </div>
    </section>
  )
}

export default page
