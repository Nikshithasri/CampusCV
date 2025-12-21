"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, FileText, X } from "lucide-react"
import { useState } from "react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [selectedFormat, setSelectedFormat] = useState<string>("pdf")

  if (!isOpen) return null

  const formats = [
    { id: "pdf", name: "PDF", description: "Best for printing and sharing", icon: FileText },
    { id: "docx", name: "DOCX", description: "Editable Microsoft Word format", icon: FileText },
    { id: "txt", name: "TXT", description: "Plain text for ATS systems", icon: FileText },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="relative w-full max-w-md border-border/50 bg-card/95 p-8 backdrop-blur-xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 rounded-lg p-2 transition-colors hover:bg-background/50"
        >
          <X className="h-4 w-4" />
        </button>

        <h2 className="mb-6 text-2xl font-semibold">Download Resume</h2>
        <p className="mb-6 text-sm text-muted-foreground">Choose your preferred format</p>

        <div className="mb-6 space-y-3">
          {formats.map((format) => (
            <div
              key={format.id}
              onClick={() => setSelectedFormat(format.id)}
              className={`cursor-pointer rounded-xl border p-4 transition-all ${
                selectedFormat === format.id
                  ? "border-cyan-400 bg-cyan-400/10 shadow-lg shadow-cyan-400/20"
                  : "border-border/30 bg-background/30 hover:border-border/50"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                    selectedFormat === format.id ? "bg-cyan-400/20" : "bg-background/50"
                  }`}
                >
                  <format.icon
                    className={`h-5 w-5 ${selectedFormat === format.id ? "text-cyan-400" : "text-muted-foreground"}`}
                  />
                </div>
                <div>
                  <p className="font-medium">{format.name}</p>
                  <p className="text-xs text-muted-foreground">{format.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-3">
          <Button
            className="flex-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/30"
            onClick={() => {
              // Handle download
              onClose()
            }}
          >
            <Download className="mr-2 h-4 w-4" />
            Download {selectedFormat.toUpperCase()}
          </Button>
          <Button variant="outline" onClick={onClose} className="border-border/50 bg-transparent">
            Cancel
          </Button>
        </div>
      </Card>
    </div>
  )
}
