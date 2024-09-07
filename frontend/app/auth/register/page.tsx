import RegisterForm from '@/components/Pages/AuthPage/Register/RegisterForm'

const Register = () => {
  return (
    <section className="container mx-auto">
      <div className="border rounded-md p-4 max-w-md mx-auto mt-10 min-h-60">
        <h1 className="text-2xl font-bold text-center mt-3">Register</h1>
        <RegisterForm />
      </div>
    </section>
  )
}

export default Register
