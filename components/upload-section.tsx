"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Upload, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

export function UploadSection() {
  const router = useRouter()
  const [isDragging, setIsDragging] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<string | null>(null)
  const [jobDescription, setJobDescription] = useState("")

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    const files = e.dataTransfer.files
    if (files.length > 0) {
      setUploadedFile(files[0].name)
    }
  }

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files && files.length > 0) {
      setUploadedFile(files[0].name)
    }
  }

  const handleAnalyze = () => {
    if (uploadedFile && jobDescription) {
      router.push("/analyze")
    }
  }

  return (
    <div className="space-y-8">
      <div
        className={`relative overflow-hidden rounded-2xl border-2 border-dashed transition-all duration-200 ${
          isDragging ? "border-cyan-400 bg-cyan-400/5 scale-[1.01]" : "border-border/50 bg-card/50 backdrop-blur-md"
        }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
      >
        <div className="p-12 text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <Upload className="h-10 w-10 text-purple-400" />
          </div>
          <h3 className="mb-3 text-lg font-semibold">Upload Your Resume</h3>
          <p className="mb-8 text-sm text-muted-foreground">Drag and drop your file here, or click to browse</p>

          {uploadedFile && (
            <div className="mb-6 inline-flex items-center gap-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 px-5 py-3">
              <FileText className="h-5 w-5 text-cyan-400" />
              <span className="font-medium text-sm">{uploadedFile}</span>
            </div>
          )}

          <input type="file" id="file-upload" className="hidden" accept=".pdf,.docx,.txt" onChange={handleFileSelect} />
          <label htmlFor="file-upload">
            <Button
              variant="outline"
              className="cursor-pointer border-border/50 hover:border-cyan-400/50 hover:bg-cyan-400/5 bg-background/50"
              asChild
            >
              <span>Choose File</span>
            </Button>
          </label>
          <p className="mt-4 text-xs text-muted-foreground">Supported formats: PDF, DOCX, TXT</p>
        </div>
      </div>

      <div className="rounded-2xl border border-border/50 bg-card/50 p-8 backdrop-blur-md">
        <div className="mb-6 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <FileText className="h-6 w-6 text-purple-400" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">Job Description</h3>
            <p className="text-sm text-muted-foreground">Paste the full job posting for better analysis</p>
          </div>
        </div>
        <Textarea
          placeholder="Enter the complete job description including requirements, qualifications, and responsibilities..."
          className="min-h-[200px] resize-none border-border/50 bg-background/50 text-base leading-relaxed"
          value={jobDescription}
          onChange={(e) => setJobDescription(e.target.value)}
        />
      </div>

      <Button
        onClick={handleAnalyze}
        disabled={!uploadedFile || !jobDescription}
        className="group h-14 w-full rounded-xl bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-base font-semibold shadow-lg shadow-purple-500/20 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-purple-500/30 disabled:opacity-50 disabled:hover:scale-100 disabled:cursor-not-allowed"
      >
        Analyze Resume
        <svg
          className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
        </svg>
      </Button>
    </div>
  )
}
