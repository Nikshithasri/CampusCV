import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-purple-500 to-pink-500">
            <span className="text-lg font-bold text-white">C</span>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Campus<span className="gradient-text">CV</span>
          </span>
        </Link>

        <nav className="flex items-center gap-6">
          <Link href="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400">
            Home
          </Link>
          <Link
            href="/analyze"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
          >
            Analyze
          </Link>
          <Link
            href="/resume-builder"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
          >
            Resume Builder
          </Link>
          <Link
            href="/cover-letter"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
          >
            Cover Letter
          </Link>
          <Link
            href="/profile"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-cyan-400"
          >
            Profile
          </Link>
          <Button className="h-9 rounded-lg bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 px-6 text-sm font-semibold shadow-md shadow-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/30">
            Sign Out
          </Button>
        </nav>
      </div>
    </header>
  )
}
