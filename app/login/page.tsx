import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { LoginForm } from "@/components/login-form"

export default function LoginPage() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 flex items-center justify-center px-4 py-12">
        <LoginForm />
      </main>
    </div>
  )
}
