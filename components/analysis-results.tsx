"use client"

import { ArrowLeft, FileText, Briefcase } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export function AnalysisResults() {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    // Simulate analysis time
    const timer = setTimeout(() => {
      router.push("/results")
    }, 3000)

    return () => clearTimeout(timer)
  }, [router])

  if (!mounted) return null

  return (
    <div className="mx-auto max-w-4xl space-y-8">
      <Link href="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground">
        <ArrowLeft className="h-4 w-4" />
        Back to Analyze
      </Link>

      <h1 className="text-4xl font-bold">ATS Resume Analyzer</h1>

      {/* Resume and Job Info */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex items-start gap-4 rounded-2xl border bg-card/50 p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
            <FileText className="h-7 w-7 text-primary" />
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Resume File</p>
            <p className="font-semibold">John_Doe_Resume.pdf</p>
          </div>
        </div>

        <div className="flex items-start gap-4 rounded-2xl border bg-card/50 p-6">
          <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-500/10">
            <Briefcase className="h-7 w-7 text-cyan-400" />
          </div>
          <div>
            <p className="mb-1 text-sm text-muted-foreground">Job Description</p>
            <p className="font-semibold">Data Scientist Role</p>
          </div>
        </div>
      </div>

      {/* Matches */}
      <div className="space-y-4">
        <h2 className="text-2xl font-bold">Matches</h2>

        <div className="grid gap-4 md:grid-cols-2">
          <div className="flex items-center justify-between rounded-2xl border bg-card/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-400" />
              <span className="font-semibold">15/18 Skills Match</span>
            </div>
            <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <div className="flex items-center justify-between rounded-2xl border bg-card/50 p-6">
            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-cyan-400" />
              <span className="font-semibold">7/7 Experience Match</span>
            </div>
            <svg className="h-6 w-6 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Loading Animation */}
      <div className="flex justify-center py-12">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 animate-bounce rounded-full bg-purple-500" style={{ animationDelay: "0ms" }} />
          <div className="h-3 w-3 animate-bounce rounded-full bg-pink-500" style={{ animationDelay: "150ms" }} />
          <div className="h-3 w-3 animate-bounce rounded-full bg-orange-500" style={{ animationDelay: "300ms" }} />
        </div>
      </div>
    </div>
  )
}
