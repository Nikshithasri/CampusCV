import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40 bg-background py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-balance text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            The complete platform to streamline your workflow
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            {
              "Empower your team to collaborate seamlessly. Build, ship, and scale faster with powerful automation and intelligent insights."
            }
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px]">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
              View Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {"No credit card required • 14-day free trial • Cancel anytime"}
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-5xl">
          <div className="relative overflow-hidden rounded-xl border border-border bg-muted/30 p-1">
            <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-muted to-muted/50" />
          </div>
        </div>
      </div>
    </section>
  )
}
