import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="pt-40 pb-20 px-4">
      <div className="max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 animate-pulse-slow">
          <span className="text-orange-400">🚀</span>
          <span className="text-white text-sm font-semibold">LAUNCHING NEW YEARS 2025</span>
          <span className="text-orange-400">🚀</span>
        </div>

        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          The CRM Built for
          <br />
          <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient">
            Painting Contractors
          </span>
        </h1>

        <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
          Transform your painting business with our all-in-one AI powered platform. Join the waitlist to be among the
          first to experience the future of painting business management.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            size="lg"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg px-8 py-6 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 group relative overflow-hidden"
          >
            <span className="relative z-10">➕ Join the Waitlist</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 text-lg px-8 py-6 bg-transparent transition-all duration-300 hover:scale-105"
          >
            Explore Features
          </Button>
        </div>
      </div>
    </section>
  )
}
