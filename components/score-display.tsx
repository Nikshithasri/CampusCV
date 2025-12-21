"use client"

import { useEffect, useState } from "react"

export function ScoreDisplay() {
  const [score, setScore] = useState(0)
  const targetScore = 82

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const increment = targetScore / steps
    let current = 0

    const timer = setInterval(() => {
      current += increment
      if (current >= targetScore) {
        setScore(targetScore)
        clearInterval(timer)
      } else {
        setScore(Math.floor(current))
      }
    }, duration / steps)

    return () => clearInterval(timer)
  }, [])

  const circumference = 2 * Math.PI * 120
  const offset = circumference - (score / 100) * circumference

  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative h-64 w-64">
        <svg className="h-full w-full -rotate-90 transform">
          {/* Background circle */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="currentColor"
            strokeWidth="12"
            fill="none"
            className="text-muted/20"
          />
          {/* Progress circle with gradient */}
          <circle
            cx="128"
            cy="128"
            r="120"
            stroke="url(#scoreGradient)"
            strokeWidth="12"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out"
          />
          <defs>
            <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="50%" stopColor="#ec4899" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>
          </defs>
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-6xl font-bold text-primary">{score}</span>
        </div>
      </div>
      <h3 className="mt-6 text-xl font-semibold">ATS Score</h3>
      <p className="text-lg text-cyan-400">Strong Match</p>
    </div>
  )
}
