"use client"

import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Sparkles, Download, Copy, RefreshCw } from "lucide-react"
import { useState } from "react"

export default function CoverLetterPage() {
  const [generating, setGenerating] = useState(false)
  const [generated, setGenerated] = useState(false)

  const handleGenerate = () => {
    setGenerating(true)
    setTimeout(() => {
      setGenerating(false)
      setGenerated(true)
    }, 2000)
  }

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8">
            <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">AI Cover Letter Generator</h1>
            <p className="text-muted-foreground">Create personalized cover letters tailored to each job application</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            {/* Input Section */}
            <div className="space-y-6">
              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
                <h2 className="mb-6 text-xl font-semibold">Job Details</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="e.g. Tech Corp Inc."
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="position">Job Position</Label>
                    <Input
                      id="position"
                      placeholder="e.g. Senior Software Engineer"
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="jobDescription">Job Description</Label>
                    <Textarea
                      id="jobDescription"
                      placeholder="Paste the job description here..."
                      className="min-h-[200px] border-border/50 bg-background/50"
                    />
                  </div>
                </div>
              </Card>

              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
                <h2 className="mb-6 text-xl font-semibold">Your Information</h2>
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="yourName">Your Name</Label>
                    <Input id="yourName" placeholder="John Doe" className="border-border/50 bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="keySkills">Key Skills (comma separated)</Label>
                    <Input
                      id="keySkills"
                      placeholder="React, Node.js, TypeScript"
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="experience">Years of Experience</Label>
                    <Input id="experience" placeholder="e.g. 5" className="border-border/50 bg-background/50" />
                  </div>
                </div>
              </Card>

              <Button
                onClick={handleGenerate}
                disabled={generating}
                className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                {generating ? (
                  <>
                    <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="mr-2 h-4 w-4" />
                    Generate Cover Letter
                  </>
                )}
              </Button>
            </div>

            {/* Output Section */}
            <div>
              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
                <div className="mb-6 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">Generated Cover Letter</h2>
                  {generated && (
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="border-border/50 bg-transparent">
                        <Copy className="mr-2 h-3 w-3" />
                        Copy
                      </Button>
                      <Button size="sm" className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                        <Download className="mr-2 h-3 w-3" />
                        Download
                      </Button>
                    </div>
                  )}
                </div>

                {!generated ? (
                  <div className="flex min-h-[600px] items-center justify-center rounded-xl border border-dashed border-border/50 bg-background/30">
                    <div className="text-center">
                      <Sparkles className="mx-auto mb-4 h-12 w-12 text-muted-foreground/50" />
                      <p className="text-sm text-muted-foreground">
                        Fill in the details and click generate to create your cover letter
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-4 rounded-xl border border-border/30 bg-background/30 p-6">
                    <div className="space-y-4 text-sm leading-relaxed">
                      <p>Dear Hiring Manager,</p>
                      <p>
                        I am writing to express my strong interest in the Senior Software Engineer position at Tech Corp
                        Inc. With 5 years of experience in software development and expertise in React, Node.js, and
                        TypeScript, I am excited about the opportunity to contribute to your innovative team.
                      </p>
                      <p>
                        Throughout my career, I have consistently delivered high-quality solutions that align with
                        business objectives. My technical proficiency in modern web technologies, combined with my
                        passion for creating exceptional user experiences, makes me an ideal candidate for this role.
                      </p>
                      <p>
                        I am particularly drawn to Tech Corp Inc.'s commitment to innovation and excellence. I believe
                        my skills and experience align perfectly with the requirements outlined in the job description,
                        and I am eager to bring my expertise to your team.
                      </p>
                      <p>
                        Thank you for considering my application. I look forward to the opportunity to discuss how I can
                        contribute to your team's success.
                      </p>
                      <p>Sincerely,</p>
                      <p>John Doe</p>
                    </div>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
