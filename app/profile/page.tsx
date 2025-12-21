"use client"

import type React from "react"

import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { User, Mail, Briefcase, GraduationCap, FileText, Download, Trash2, Camera, Phone } from "lucide-react"
import { useState } from "react"

export default function ProfilePage() {
  const [profilePhoto, setProfilePhoto] = useState<string | null>(null)

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfilePhoto(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <h1 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">Profile Settings</h1>
            <p className="text-muted-foreground">Manage your account information and preferences</p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            {/* Profile Card */}
            <Card className="flex flex-col items-center border-border/50 bg-card/50 p-8 backdrop-blur-xl lg:col-span-1">
              <div className="relative mb-6">
                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-500">
                  {profilePhoto ? (
                    <img
                      src={profilePhoto || "/placeholder.svg"}
                      alt="Profile"
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <User className="h-12 w-12 text-white" />
                  )}
                </div>
                <label
                  htmlFor="photo-upload"
                  className="absolute bottom-0 right-0 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-purple-500 to-pink-500 shadow-lg transition-transform hover:scale-110"
                >
                  <Camera className="h-4 w-4 text-white" />
                  <input
                    id="photo-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handlePhotoChange}
                  />
                </label>
              </div>
              <h2 className="mb-1 text-xl font-semibold">Your Name</h2>
              <p className="mb-6 text-sm text-muted-foreground">your.email@example.com</p>
              <Button
                variant="outline"
                className="w-full border-border/50 bg-transparent"
                onClick={() => document.getElementById("photo-upload")?.click()}
              >
                Change Photo
              </Button>
            </Card>

            {/* Account Information */}
            <div className="lg:col-span-2">
              <Card className="border-border/50 bg-card/50 p-8 backdrop-blur-xl">
                <h2 className="mb-6 text-xl font-semibold">Account Information</h2>
                <div className="space-y-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                        className="border-border/50 bg-background/50"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        placeholder="Enter your last name"
                        className="border-border/50 bg-background/50"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="border-border/50 bg-background/50 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="phone"
                        placeholder="+91 98765 43210"
                        className="border-border/50 bg-background/50 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="title">Current Job Title</Label>
                    <div className="relative">
                      <Briefcase className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="title"
                        placeholder="e.g. Software Engineer"
                        className="border-border/50 bg-background/50 pl-10"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="education">Education Level</Label>
                    <div className="relative">
                      <GraduationCap className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                      <Input
                        id="education"
                        placeholder="e.g. Bachelor's Degree"
                        className="border-border/50 bg-background/50 pl-10"
                      />
                    </div>
                  </div>

                  <div className="flex gap-3 pt-4">
                    <Button className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/30">
                      Save Changes
                    </Button>
                    <Button variant="outline" className="border-border/50 bg-transparent">
                      Cancel
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Recent Activity */}
          <Card className="mt-8 border-border/50 bg-card/50 p-8 backdrop-blur-xl">
            <h2 className="mb-6 text-xl font-semibold">Recent Resume Analysis</h2>
            <div className="space-y-4">
              {[
                { name: "John_Doe_Resume.pdf", job: "Data Scientist Role", score: 82, date: "2 hours ago" },
                { name: "Resume_Updated.pdf", job: "Senior Developer Position", score: 75, date: "1 day ago" },
                { name: "CV_Final.pdf", job: "Product Manager", score: 68, date: "3 days ago" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between rounded-xl border border-border/30 bg-background/30 p-4 transition-all hover:border-border/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20">
                      <FileText className="h-5 w-5 text-purple-400" />
                    </div>
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-sm text-muted-foreground">{item.job}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-right">
                      <p className="font-semibold text-cyan-400">{item.score}%</p>
                      <p className="text-xs text-muted-foreground">{item.date}</p>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0">
                        <Download className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="h-8 w-8 p-0 text-destructive hover:text-destructive">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
