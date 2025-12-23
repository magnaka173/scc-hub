"use client"

import { Card } from "@/components/ui/card"
import { useState } from "react"

const features = [
  {
    icon: "📊",
    title: "Visual Sales Pipeline",
    description:
      "Drag-and-drop Kanban board to manage leads from first contact to signed contract and track every opportunity in real-time.",
    color: "from-blue-400 to-blue-600",
  },
  {
    icon: "🤖",
    title: "AI-Powered Proposals",
    description:
      "Generate professional, detailed proposals in minutes. Our AI calculates costs based on your production rates and materials.",
    color: "from-cyan-400 to-cyan-600",
  },
  {
    icon: "📅",
    title: "Project Scheduling",
    description:
      "Visual calendar with crew assignments, project timelines, and automated alerts. Never miss a deadline again.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: "🎨",
    title: "Color Visualization",
    description:
      "AI-powered color matching lets customers visualize their project before you start. Increase close rates by 40%.",
    color: "from-pink-400 to-pink-600",
  },
  {
    icon: "📧",
    title: "Automated Follow-ups",
    description:
      "Set up email and SMS sequences that nurture leads automatically. Focus on selling while we handle communication.",
    color: "from-red-400 to-red-600",
  },
  {
    icon: "🔒",
    title: "Secure & Compliant",
    description:
      "Bank-level encryption, automated backups, and compliance with industry standards. Your data is safe with us.",
    color: "from-orange-400 to-orange-600",
  },
]

function FeatureCard({ feature, index }: { feature: (typeof features)[0]; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Card
      className="bg-white/5 border-white/10 backdrop-blur-sm p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20 group cursor-pointer"
      style={{
        animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-3xl mb-4 transition-all duration-300 ${
          isHovered ? "scale-110 rotate-6" : ""
        }`}
      >
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
        {feature.title}
      </h3>
      <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
        {feature.description}
      </p>
    </Card>
  )
}

export function FeaturesSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Everything You Need to <span className="text-cyan-400">Succeed</span>
          </h2>
          <p className="text-gray-400 text-lg">Powerful features designed specifically for painting contractors</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
