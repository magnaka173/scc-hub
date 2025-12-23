"use client"

import { useEffect, useState } from "react"

interface Particle {
  id: number
  x: number
  size: number
  duration: number
  delay: number
  shape: "circle" | "square"
  color: string
}

export function FallingParticles() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const colors = [
      "rgba(0, 200, 255, 0.7)", // bright cyan
      "rgba(100, 100, 255, 0.7)", // bright blue
      "rgba(150, 100, 255, 0.7)", // bright purple
      "rgba(200, 100, 255, 0.7)", // bright violet
      "rgba(255, 100, 200, 0.7)", // bright pink
      "rgba(100, 200, 255, 0.7)", // bright sky blue
    ]

    const shapes: Array<"circle" | "square"> = ["circle", "square"]

    const newParticles: Particle[] = Array.from({ length: 8 }, (_, i) => {
      const shape = shapes[Math.floor(Math.random() * shapes.length)]
      const size = shape === "square" ? Math.random() * 4 + 6 : Math.random() * 3 + 4

      return {
        id: i,
        x: Math.random() * 100,
        size,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 5,
        shape,
        color: colors[Math.floor(Math.random() * colors.length)],
      }
    })

    setParticles(newParticles)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute animate-fall"
          style={{
            left: `${particle.x}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            animationDuration: `${particle.duration}s`,
            animationDelay: `${particle.delay}s`,
            top: "-20px",
          }}
        >
          {particle.shape === "circle" && (
            <div className="w-full h-full rounded-full" style={{ backgroundColor: particle.color }} />
          )}
          {particle.shape === "square" && (
            <div className="w-full h-full rotate-45" style={{ backgroundColor: particle.color }} />
          )}
        </div>
      ))}
    </div>
  )
}
