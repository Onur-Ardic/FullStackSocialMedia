import LoginForm from '../../../components/Pages/AuthPage/Login/LoginForm'
const page = () => {
  return (
    <section className="container mx-auto">
      <div className="border rounded-md p-4 max-w-md mx-auto mt-10 min-h-60">
        <h1 className="text-2xl font-bold text-center mt-3">Login</h1>

        <LoginForm />
      </div>
    </section>
  )
}

export default page
