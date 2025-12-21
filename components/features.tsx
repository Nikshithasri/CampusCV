import { Zap, Users, Shield, BarChart } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast Performance",
    description:
      "Experience unparalleled speed with our optimized infrastructure. Deploy and iterate faster than ever before.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description:
      "Work together effortlessly with real-time updates, commenting, and team management tools built for modern teams.",
  },
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description:
      "Your data is protected with industry-leading encryption, compliance certifications, and security protocols.",
  },
  {
    icon: BarChart,
    title: "Powerful Analytics",
    description:
      "Gain actionable insights with comprehensive analytics and reporting. Make data-driven decisions with confidence.",
  },
]

export function Features() {
  return (
    <section id="features" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Everything you need to succeed
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Powerful features designed to help your team work smarter, not harder.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <Card key={feature.title} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
