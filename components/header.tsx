"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  const [timeLeft, setTimeLeft] = useState({
    days: 8,
    hours: 19,
    minutes: 53,
    seconds: 36,
  })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 }
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 }
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 }
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 }
        }
        return prev
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#0a1628]/80 backdrop-blur-lg">
      {/* Top banner */}
      <div className="bg-gradient-to-r from-orange-500 to-orange-600 py-2 px-4">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4 text-white text-sm">
          <span className="font-semibold">🔥 Launching New Years 2025!</span>
          <div className="flex items-center gap-2">
            <span>Launching In:</span>
            <div className="flex gap-1">
              <span className="font-mono font-bold tabular-nums transition-all duration-300">
                {String(timeLeft.days).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="font-mono font-bold tabular-nums transition-all duration-300">
                {String(timeLeft.hours).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="font-mono font-bold tabular-nums transition-all duration-300">
                {String(timeLeft.minutes).padStart(2, "0")}
              </span>
              <span>:</span>
              <span className="font-mono font-bold tabular-nums transition-all duration-300">
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-purple-600 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <div className="w-6 h-6 relative">
                <div className="absolute inset-0 bg-white rounded-sm transform rotate-45" />
              </div>
            </div>
            <div>
              <div className="text-white font-bold text-lg">SnapCoat CRM</div>
              <div className="text-cyan-400 text-xs">For Painting Contractors</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#"
              className="text-white hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="#"
              className="text-white hover:text-cyan-400 transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
            >
              Features
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              className="border-white/20 text-white hover:bg-white/10 hover:border-white/40 bg-transparent transition-all duration-300 hover:scale-105"
            >
              Existing User Sign In
            </Button>
            <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 relative overflow-hidden group">
              <span className="relative z-10">➕ Join Waitlist</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
