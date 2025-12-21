import { Header } from "@/components/header"
import { Starfield } from "@/components/starfield"
import { ScoreDisplay } from "@/components/score-display"
import { DetailedInsights } from "@/components/detailed-insights"

export default function ResultsPage() {
  return (
    <div className="relative min-h-screen">
      <Starfield />
      <Header />
      <main className="relative z-10 px-4 py-12">
        <div className="mx-auto max-w-6xl">
          <ScoreDisplay />
          <DetailedInsights />
        </div>
      </main>
    </div>
  )
}
