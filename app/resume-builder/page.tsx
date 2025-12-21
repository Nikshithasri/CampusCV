"use client"

import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2, Download, Eye, FileText, History } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import { DownloadModal } from "@/components/download-modal"

interface WorkExperience {
  id: string
  title: string
  company: string
  duration: string
  description: string
}

interface Education {
  id: string
  degree: string
  institution: string
  year: string
}

interface Skill {
  id: string
  name: string
}

export default function ResumeBuilderPage() {
  const [workExperiences, setWorkExperiences] = useState<WorkExperience[]>([
    { id: "1", title: "", company: "", duration: "", description: "" },
  ])
  const [educations, setEducations] = useState<Education[]>([{ id: "1", degree: "", institution: "", year: "" }])
  const [skills, setSkills] = useState<Skill[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [selectedTemplate, setSelectedTemplate] = useState("modern")
  const [showVersions, setShowVersions] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const [showDownloadModal, setShowDownloadModal] = useState(false)

  const templates = [
    { id: "modern", name: "Modern", description: "Clean and contemporary design" },
    { id: "classic", name: "Classic", description: "Traditional professional format" },
    { id: "minimal", name: "Minimal", description: "Simple and ATS-friendly" },
    { id: "creative", name: "Creative", description: "Stand out with unique styling" },
  ]

  const versions = [
    { id: "v1", name: "Software Engineer - Tech Corp", date: "Today, 2:30 PM" },
    { id: "v2", name: "Full Stack Developer - Startup", date: "Yesterday, 4:15 PM" },
    { id: "v3", name: "Frontend Engineer - Agency", date: "3 days ago" },
  ]

  const addWorkExperience = () => {
    setWorkExperiences([
      ...workExperiences,
      {
        id: Date.now().toString(),
        title: "",
        company: "",
        duration: "",
        description: "",
      },
    ])
  }

  const removeWorkExperience = (id: string) => {
    setWorkExperiences(workExperiences.filter((exp) => exp.id !== id))
  }

  const addEducation = () => {
    setEducations([
      ...educations,
      {
        id: Date.now().toString(),
        degree: "",
        institution: "",
        year: "",
      },
    ])
  }

  const removeEducation = (id: string) => {
    setEducations(educations.filter((edu) => edu.id !== id))
  }

  const addSkill = () => {
    if (newSkill.trim()) {
      setSkills([...skills, { id: Date.now().toString(), name: newSkill }])
      setNewSkill("")
    }
  }

  const removeSkill = (id: string) => {
    setSkills(skills.filter((skill) => skill.id !== id))
  }

  const getTemplatePreviewStyles = () => {
    switch (selectedTemplate) {
      case "modern":
        return {
          containerClass: "bg-white text-gray-900 p-8 rounded-lg shadow-xl",
          headerClass: "border-b-4 border-purple-500 pb-4 mb-6",
          sectionClass: "mb-6 border-l-4 border-purple-500 pl-4",
          nameClass: "text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent",
        }
      case "classic":
        return {
          containerClass: "bg-white text-gray-900 p-8",
          headerClass: "text-center border-b-2 border-gray-800 pb-4 mb-6",
          sectionClass: "mb-6",
          nameClass: "text-3xl font-serif font-bold text-gray-900",
        }
      case "minimal":
        return {
          containerClass: "bg-white text-gray-900 p-8",
          headerClass: "pb-3 mb-6",
          sectionClass: "mb-5",
          nameClass: "text-2xl font-light tracking-wide text-gray-900",
        }
      case "creative":
        return {
          containerClass: "bg-gradient-to-br from-purple-50 to-pink-50 text-gray-900 p-8 rounded-2xl shadow-2xl",
          headerClass: "bg-gradient-to-r from-purple-500 to-pink-500 text-white p-6 rounded-xl mb-6 -m-8 mb-6",
          sectionClass: "mb-6 bg-white/50 backdrop-blur p-4 rounded-lg",
          nameClass: "text-4xl font-black text-white",
        }
      default:
        return {
          containerClass: "bg-white text-gray-900 p-8",
          headerClass: "border-b pb-4 mb-6",
          sectionClass: "mb-6",
          nameClass: "text-3xl font-bold text-gray-900",
        }
    }
  }

  const PreviewModal = () => {
    const styles = getTemplatePreviewStyles()
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm">
        <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-xl bg-background/95 p-6 shadow-2xl backdrop-blur-xl">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
              Resume Preview - {templates.find((t) => t.id === selectedTemplate)?.name}
            </h2>
            <Button onClick={() => setShowPreview(false)} variant="ghost" size="sm">
              Close
            </Button>
          </div>
          <div className={styles.containerClass}>
            <div className={styles.headerClass}>
              <div className={styles.nameClass}>Your Name</div>
              <p className="mt-2 text-sm">Email • Phone • Location • LinkedIn • GitHub</p>
            </div>
            <div className={styles.sectionClass}>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">Professional Summary</h3>
              <p className="text-sm text-gray-700">Your professional summary will appear here...</p>
            </div>
            <div className={styles.sectionClass}>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">Work Experience</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-semibold">Job Title - Company Name</div>
                  <div className="text-gray-600">Duration</div>
                  <p className="mt-1 text-gray-700">Job description and achievements...</p>
                </div>
              </div>
            </div>
            <div className={styles.sectionClass}>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">Education</h3>
              <div className="text-sm">
                <div className="font-semibold">Degree - Institution</div>
                <div className="text-gray-600">Year</div>
              </div>
            </div>
            <div className={styles.sectionClass}>
              <h3 className="mb-2 text-lg font-bold uppercase tracking-wide">Skills</h3>
              <div className="flex flex-wrap gap-2 text-sm">
                <span className="rounded bg-gray-200 px-3 py-1">Skill 1</span>
                <span className="rounded bg-gray-200 px-3 py-1">Skill 2</span>
                <span className="rounded bg-gray-200 px-3 py-1">Skill 3</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Resume Builder</h1>
              <p className="text-muted-foreground">Create your professional resume in minutes</p>
            </div>
            <div className="flex gap-3">
              <Button
                variant="outline"
                className="border-border/50 bg-transparent"
                onClick={() => setShowVersions(!showVersions)}
              >
                <History className="mr-2 h-4 w-4" />
                Versions
              </Button>
              <Link href="/cover-letter">
                <Button variant="outline" className="border-border/50 bg-transparent">
                  <FileText className="mr-2 h-4 w-4" />
                  Cover Letter
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-border/50 bg-transparent"
                onClick={() => setShowPreview(true)}
              >
                <Eye className="mr-2 h-4 w-4" />
                Preview
              </Button>
              <Button
                onClick={() => setShowDownloadModal(true)}
                className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/30"
              >
                <Download className="mr-2 h-4 w-4" />
                Download
              </Button>
            </div>
          </div>

          {showVersions && (
            <Card className="mb-8 border-border/50 bg-card/50 p-6 backdrop-blur-xl">
              <h3 className="mb-4 text-lg font-semibold">Resume Versions</h3>
              <div className="space-y-2">
                {versions.map((version) => (
                  <div
                    key={version.id}
                    className="flex items-center justify-between rounded-lg border border-border/30 bg-background/30 p-3 transition-all hover:border-cyan-400/50"
                  >
                    <div>
                      <p className="font-medium">{version.name}</p>
                      <p className="text-xs text-muted-foreground">{version.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 px-3 text-xs">
                        Load
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          )}

          {showPreview && <PreviewModal />}

          {showDownloadModal && <DownloadModal onClose={() => setShowDownloadModal(false)} />}

          <div className="space-y-8">
            {/* Personal Information */}
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-xl font-semibold">Personal Information</h2>
              <div className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input id="fullName" placeholder="John Doe" className="border-border/50 bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john.doe@example.com"
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input id="phone" placeholder="+91 98765 43210" className="border-border/50 bg-background/50" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="location">Location</Label>
                    <Input id="location" placeholder="City, Country" className="border-border/50 bg-background/50" />
                  </div>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="linkedin">LinkedIn Profile</Label>
                    <Input
                      id="linkedin"
                      placeholder="linkedin.com/in/yourprofile"
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="github">GitHub Profile</Label>
                    <Input
                      id="github"
                      placeholder="github.com/yourusername"
                      className="border-border/50 bg-background/50"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="summary">Professional Summary</Label>
                  <Textarea
                    id="summary"
                    placeholder="Write a brief summary about yourself..."
                    className="min-h-[100px] border-border/50 bg-background/50"
                  />
                </div>
              </div>
            </Card>

            {/* Work Experience */}
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Work Experience</h2>
                <Button
                  onClick={addWorkExperience}
                  variant="outline"
                  size="sm"
                  className="border-border/50 bg-transparent"
                >
                  <Plus className="mr-2 h-4 w-4" />
                  Add Experience
                </Button>
              </div>
              <div className="space-y-6">
                {workExperiences.map((exp, index) => (
                  <div key={exp.id} className="space-y-4 rounded-xl border border-border/30 bg-background/30 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Experience {index + 1}</h3>
                      {workExperiences.length > 1 && (
                        <Button
                          onClick={() => removeWorkExperience(exp.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Job Title</Label>
                        <Input placeholder="Software Engineer" className="border-border/50 bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label>Company</Label>
                        <Input placeholder="Tech Company Inc." className="border-border/50 bg-background/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Duration</Label>
                      <Input placeholder="Jan 2020 - Present" className="border-border/50 bg-background/50" />
                    </div>
                    <div className="space-y-2">
                      <Label>Description</Label>
                      <Textarea
                        placeholder="Describe your responsibilities and achievements..."
                        className="min-h-[80px] border-border/50 bg-background/50"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Education */}
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-xl font-semibold">Education</h2>
                <Button onClick={addEducation} variant="outline" size="sm" className="border-border/50 bg-transparent">
                  <Plus className="mr-2 h-4 w-4" />
                  Add Education
                </Button>
              </div>
              <div className="space-y-6">
                {educations.map((edu, index) => (
                  <div key={edu.id} className="space-y-4 rounded-xl border border-border/30 bg-background/30 p-6">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">Education {index + 1}</h3>
                      {educations.length > 1 && (
                        <Button
                          onClick={() => removeEducation(edu.id)}
                          variant="ghost"
                          size="sm"
                          className="h-8 w-8 p-0 text-destructive hover:text-destructive"
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      )}
                    </div>
                    <div className="grid gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <Label>Degree</Label>
                        <Input placeholder="Bachelor of Science" className="border-border/50 bg-background/50" />
                      </div>
                      <div className="space-y-2">
                        <Label>Institution</Label>
                        <Input placeholder="University Name" className="border-border/50 bg-background/50" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label>Year</Label>
                      <Input placeholder="2018 - 2022" className="border-border/50 bg-background/50" />
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Skills */}
            <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
              <h2 className="mb-6 text-xl font-semibold">Skills</h2>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill..."
                    className="border-border/50 bg-background/50"
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button onClick={addSkill} className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <div
                      key={skill.id}
                      className="flex items-center gap-2 rounded-lg border border-cyan-400/30 bg-cyan-400/10 px-4 py-2"
                    >
                      <span className="text-sm font-medium text-cyan-400">{skill.name}</span>
                      <button onClick={() => removeSkill(skill.id)} className="text-cyan-400/70 hover:text-cyan-400">
                        <Trash2 className="h-3 w-3" />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
