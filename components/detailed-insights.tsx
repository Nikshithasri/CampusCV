"use client"

import { Check, X, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

const matchedSkills = [
  "Python",
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "Data Analysis",
  "SQL",
  "NumPy",
  "Pandas",
]

const missingSkills = ["Kubernetes", "AWS", "Docker"]

const strengths = [
  "Strong technical skills alignment",
  "Relevant work experience",
  "Good educational background",
  "Clear formatting",
]

const improvements = [
  "Add cloud computing certifications",
  "Include more quantifiable achievements",
  "Expand on leadership experience",
]

export function DetailedInsights() {
  return (
    <div className="mx-auto max-w-6xl space-y-8">
      {/* Score Bar */}
      <div className="rounded-2xl border bg-card/50 p-6">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-muted-foreground">ATS Score</h3>
          <span className="text-2xl font-bold">82%</span>
        </div>
        <Progress value={82} className="h-3" />
      </div>

      {/* Download Report */}
      <Button className="h-14 w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-lg font-semibold hover:opacity-90">
        <Download className="mr-2 h-5 w-5" />
        Download Report
      </Button>

      {/* Highlights Section */}
      <div className="rounded-2xl border bg-card/50 p-6">
        <h3 className="mb-4 text-xl font-semibold">Highlights</h3>
        <div className="flex flex-wrap gap-2">
          {matchedSkills.slice(0, 5).map((skill) => (
            <Badge key={skill} variant="outline" className="border-cyan-400 text-cyan-400">
              {skill}
            </Badge>
          ))}
          <Badge variant="outline" className="border-primary text-primary">
            +3 More
          </Badge>
        </div>
      </div>

      {/* Detailed Report Link */}
      <button className="flex w-full items-center justify-center gap-2 rounded-2xl border bg-card/50 p-6 transition-colors hover:bg-card">
        <span className="text-lg font-semibold">View Detailed Report</span>
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Skills Match Details */}
      <div className="space-y-6">
        <div>
          <h3 className="mb-4 text-xl font-semibold">
            <Check className="mr-2 inline-block h-5 w-5 text-cyan-400" />
            Matched Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {matchedSkills.map((skill) => (
              <Badge key={skill} className="bg-cyan-400/10 text-cyan-400 hover:bg-cyan-400/20">
                <Check className="mr-1 h-3 w-3" />
                {skill}
              </Badge>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-4 text-xl font-semibold">
            <X className="mr-2 inline-block h-5 w-5 text-pink-400" />
            Missing Skills
          </h3>
          <div className="flex flex-wrap gap-2">
            {missingSkills.map((skill) => (
              <Badge key={skill} className="bg-pink-400/10 text-pink-400 hover:bg-pink-400/20">
                <X className="mr-1 h-3 w-3" />
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Strengths and Improvements */}
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-card/50 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <Check className="h-5 w-5 text-cyan-400" />
            Strengths
          </h3>
          <ul className="space-y-3">
            {strengths.map((strength, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-cyan-400" />
                <span className="text-sm text-muted-foreground">{strength}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-2xl border bg-card/50 p-6">
          <h3 className="mb-4 flex items-center gap-2 text-xl font-semibold">
            <X className="h-5 w-5 text-orange-400" />
            Improvements
          </h3>
          <ul className="space-y-3">
            {improvements.map((improvement, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="mt-1 h-2 w-2 rounded-full bg-orange-400" />
                <span className="text-sm text-muted-foreground">{improvement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
