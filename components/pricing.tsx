import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Check } from "lucide-react"

const plans = [
  {
    name: "Starter",
    price: "29",
    description: "Perfect for small teams and startups",
    features: ["Up to 10 team members", "50 GB storage", "Basic analytics", "Email support", "99.9% uptime SLA"],
    cta: "Start Free Trial",
    featured: false,
  },
  {
    name: "Professional",
    price: "79",
    description: "For growing teams with advanced needs",
    features: [
      "Up to 50 team members",
      "500 GB storage",
      "Advanced analytics",
      "Priority support",
      "99.99% uptime SLA",
      "Custom integrations",
    ],
    cta: "Start Free Trial",
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with custom requirements",
    features: [
      "Unlimited team members",
      "Unlimited storage",
      "Custom analytics",
      "Dedicated support",
      "99.999% uptime SLA",
      "Advanced security",
      "Custom contracts",
    ],
    cta: "Contact Sales",
    featured: false,
  },
]

export function Pricing() {
  return (
    <section id="pricing" className="border-b border-border/40 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            Choose the plan that works best for your team. All plans include a 14-day free trial.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.featured ? "border-primary bg-card shadow-lg md:scale-105" : "border-border/50 bg-card"}
            >
              <CardHeader className="pb-8">
                {plan.featured && (
                  <div className="mb-2 inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                    Most Popular
                  </div>
                )}
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4 flex items-baseline gap-1">
                  {plan.price === "Custom" ? (
                    <span className="text-4xl font-bold">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-4xl font-bold">${plan.price}</span>
                      <span className="text-muted-foreground">/month</span>
                    </>
                  )}
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
              </CardHeader>
              <CardContent className="space-y-6">
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" variant={plan.featured ? "default" : "outline"} size="lg">
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
