"use client"

import { Card } from "@/components/ui/card"
import { useCounter } from "@/hooks/use-counter"
import { useInView } from "@/hooks/use-in-view"
import { useEffect } from "react"

const stats = [
  {
    icon: "👥",
    value: 7,
    suffix: "+",
    label: "Years Industry Experience",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "💰",
    value: 1,
    prefix: "$",
    suffix: "M+",
    label: "Revenue Managed",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: "⚡",
    value: 50,
    suffix: "+",
    label: "Features Built",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: "✅",
    value: 100,
    suffix: "%",
    label: "Painter Founded",
    color: "from-pink-400 to-pink-600",
  },
]

function StatCard({ stat, index }: { stat: (typeof stats)[0]; index: number }) {
  const { count, setHasStarted } = useCounter(stat.value, 2000, true)
  const { ref, isInView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    if (isInView) {
      setHasStarted(true)
    }
  }, [isInView, setHasStarted])

  return (
    <Card
      ref={ref}
      className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20 group"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
    >
      <div
        className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300`}
      >
        {stat.icon}
      </div>
      <div className="text-3xl font-bold text-white mb-1">
        {stat.prefix}
        {count}
        {stat.suffix}
      </div>
      <div className="text-sm text-gray-400">{stat.label}</div>
    </Card>
  )
}

export function StatsSection() {
  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
