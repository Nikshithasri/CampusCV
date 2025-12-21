import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    quote:
      "StreamLine has transformed how our team collaborates. We've reduced our project delivery time by 40% and couldn't be happier.",
    author: "Sarah Johnson",
    role: "CTO at TechCorp",
    initials: "SJ",
  },
  {
    quote:
      "The analytics features are game-changing. We now have complete visibility into our workflows and can make data-driven decisions instantly.",
    author: "Michael Chen",
    role: "Product Manager at InnovateCo",
    initials: "MC",
  },
  {
    quote:
      "Security was our top concern, and StreamLine exceeded all expectations. The enterprise-grade protection gives us complete peace of mind.",
    author: "Emily Rodriguez",
    role: "CISO at SecureBank",
    initials: "ER",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="border-b border-border/40 bg-muted/30 py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Trusted by teams worldwide
          </h2>
          <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
            See what our customers have to say about their experience with StreamLine.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-6xl gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.author} className="border-border/50 bg-card">
              <CardContent className="p-6">
                <p className="text-balance leading-relaxed text-card-foreground">{`"${testimonial.quote}"`}</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.author}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
