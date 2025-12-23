"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

export function EmailCaptureSection() {
  const [email, setEmail] = useState("")
  const [isFocused, setIsFocused] = useState(false)

  return (
    <section className="py-20 px-4">
      <div className="max-w-xl mx-auto">
        <Card className="bg-[#0a1628]/95 border border-cyan-500/20 backdrop-blur-sm p-10 hover:border-cyan-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-purple-500/5 pointer-events-none" />

          <div className="relative z-10">
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-xs font-semibold tracking-wider uppercase">
                Limited Founding Member Spots
              </span>
            </div>

            <h3 className="text-4xl font-bold text-white mb-4 text-center bg-gradient-to-r from-white via-cyan-100 to-white bg-clip-text text-transparent">
              Get Early Access
            </h3>

            <p className="text-gray-300/90 text-center mb-8 text-sm leading-relaxed">
              Be first in line to transform your painting business with our revolutionary AI-powered platform. Get
              special early access pricing.
            </p>

            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className={`w-full h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 transition-all duration-300 focus:bg-white/10 ${
                  isFocused
                    ? "border-cyan-400/50 shadow-lg shadow-cyan-500/10 ring-1 ring-cyan-400/20"
                    : "hover:border-white/20"
                }`}
              />
              <Button className="w-full h-12 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-400 hover:to-purple-500 text-white font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-purple-500/30 group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">✨ Join the Waitlist</span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Button>
            </div>

            <p className="text-xs text-gray-500 text-center mt-6">No credit card required • Cancel anytime</p>
          </div>
        </Card>
      </div>
    </section>
  )
}
