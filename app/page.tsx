import { Header } from "@/components/header"
import { UploadSection } from "@/components/upload-section"
import { Starfield } from "@/components/starfield"

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-20 md:py-28">
        <div className="mx-auto max-w-4xl">
          <div className="mb-20 text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight tracking-tight text-balance md:text-5xl lg:text-6xl">
              Optimize Your Resume for <span className="gradient-text">Applicant Tracking Systems</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Analyze your resume against job descriptions and get actionable insights to increase your chances of
              landing interviews.
            </p>
          </div>
          <UploadSection />
        </div>
      </main>
    </div>
  )
}
