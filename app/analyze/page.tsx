import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { AnalysisResults } from "@/components/analysis-results"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function AnalyzePage() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <Link
            href="/"
            className="mb-8 inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Analyze
          </Link>
          <h1 className="mb-12 text-5xl font-bold">ATS Resume Analyzer</h1>
          <AnalysisResults />
        </div>
      </main>
    </div>
  )
}
