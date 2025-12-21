import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="border-b border-border/40 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Ready to streamline your workflow?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {
              "Join thousands of teams who trust StreamLine to power their productivity. Start your free trial today—no credit card required."
            }
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" className="min-w-[200px]">
              Start Free Trial
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" className="min-w-[200px] bg-transparent">
              Schedule a Demo
            </Button>
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            {"Already have an account?"}{" "}
            <a href="#" className="font-medium underline underline-offset-4">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
