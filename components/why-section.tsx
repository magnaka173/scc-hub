"use client"

import { Card } from "@/components/ui/card"
import { useCounter } from "@/hooks/use-counter"
import { useInView } from "@/hooks/use-in-view"
import { useEffect } from "react"

const reasons = [
  {
    icon: "🎯",
    badge: "REAL INDUSTRY EXPERIENCE",
    title: "Built by a Painter",
    description: "Created by a 7+ year painting company owner who knows exactly what you need to succeed.",
  },
  {
    icon: "🤖",
    badge: "INDUSTRY-SPECIFIC AI",
    title: "AI That Gets Painting",
    description: "Smart proposals, accurate estimates, and automation designed specifically for paint projects.",
  },
  {
    icon: "🎁",
    badge: "FOUNDING MEMBER PERKS",
    title: "Launch Day Benefits",
    description: "Founding members get exclusive pricing priority support, and input on new features.",
  },
]

const bottomStats = [
  { value: 7, suffix: "+", label: "Years Industry Experience", color: "text-blue-400" },
  { value: 1, prefix: "$", suffix: "M+", label: "Revenue Managed", color: "text-cyan-400" },
  { value: 50, suffix: "+", label: "Features Built", color: "text-purple-400" },
  { value: 100, suffix: "%", label: "Painter Founded", color: "text-pink-400" },
]

function BottomStat({ stat }: { stat: (typeof bottomStats)[0] }) {
  const { count, setHasStarted } = useCounter(stat.value, 2000, true)
  const { ref, isInView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (isInView) {
      setHasStarted(true)
    }
  }, [isInView, setHasStarted])

  return (
    <div ref={ref} className="text-center group hover:scale-110 transition-transform duration-300">
      <div className={`text-4xl font-bold ${stat.color} mb-2`}>
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300">{stat.label}</div>
    </div>
  )
}

export function WhySection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Painting Contractors Are Excited</h2>
          <p className="text-gray-400 text-lg">The CRM that finally understands the painting industry</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {reasons.map((reason, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/5 to-white/10 border-white/10 backdrop-blur-sm p-8 hover:from-white/10 hover:to-white/15 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 group"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.15}s both`,
              }}
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{reason.icon}</div>
              <div className="text-cyan-400 text-xs font-semibold mb-3 flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                {reason.badge}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {reason.description}
              </p>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {bottomStats.map((stat, index) => (
            <BottomStat key={index} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  )
}
