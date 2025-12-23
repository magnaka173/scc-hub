import { Button } from "@/components/ui/button"

export function FinalCTASection() {
  return (
    <section className="py-32 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2
          className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
          style={{ animation: "fadeInUp 0.8s ease-out" }}
        >
          Be First to Experience
          <br />
          <span className="bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent animate-gradient">
            SnapCoat CRM
          </span>
        </h2>

        <p
          className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          style={{ animation: "fadeInUp 0.8s ease-out 0.2s both" }}
        >
          Join the waitlist today and be among the first to transform your painting business
        </p>

        <Button
          size="lg"
          className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white text-lg px-10 py-7 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden"
          style={{ animation: "fadeInUp 0.8s ease-out 0.4s both" }}
        >
          <span className="relative z-10">➕ Join the Waitlist</span>
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <p className="text-sm text-gray-400 mt-6" style={{ animation: "fadeInUp 0.8s ease-out 0.6s both" }}>
          Limited founding member spots available.
        </p>
      </div>
    </section>
  )
}
