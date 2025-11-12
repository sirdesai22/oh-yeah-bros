"use client"

import Link from "next/link"
import { ArrowLeft, Code, Flame, Zap } from "lucide-react"

export default function PrathameshPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-900 via-gray-900 to-blue-900 text-white">
      {/* Navigation */}
      <nav className="border-b border-cyan-500/40 bg-black/30 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-500/50">
            <span className="text-cyan-300 text-sm font-semibold">🌊 THE CHAOTIC CURIOUS CODER</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
              Prathamesh
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            A short storm of energy, a sea of curiosity, and a mind that codes faster than logic can keep up.
          </p>
        </div>

        {/* Code Philosophy */}
        <div className="bg-card/50 backdrop-blur border border-cyan-500/30 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Code className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl font-bold text-cyan-300">Lines of Chaos</h2>
          </div>
          <div className="text-gray-400 space-y-4 text-lg leading-relaxed italic">
            <p>
              In the chaos of bugs, he finds rhythm.
            </p>
            <p>
              In the sea of syntax, he swims with curiosity.
            </p>
            <p>
              For every crash, there’s a comeback — for every error, a story.
            </p>
            <p>
              He doesn’t just write code — he writes possibilities.
            </p>
          </div>
        </div>

        {/* Core Traits */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
          {[
            { title: "Curiosity Overflow", desc: "Always asking ‘why?’ — and sometimes ‘why not?’" },
            { title: "Short Chaos", desc: "Tiny frame, massive energy. Calm is overrated." },
            { title: "Finding Chicks", desc: "Smooth like his code commits. Or at least he thinks so." },
            { title: "Pro Coder", desc: "Lives on caffeine, deploys at dawn." },
          ].map((trait, idx) => (
            <div key={idx} className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
              <Zap className="w-5 h-5 text-cyan-400 mb-2" />
              <h3 className="font-bold text-cyan-300 mb-2">{trait.title}</h3>
              <p className="text-sm text-gray-400">{trait.desc}</p>
            </div>
          ))}
        </div>

        {/* Thoughts on Code */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-400/10 border border-cyan-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-cyan-300 mb-6">Code & Chaos Philosophy</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4">
              <p className="italic text-gray-400">
                "Debugging is like therapy — you find the bug, fix it, and pretend you had control all along."
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <p className="italic text-gray-400">
                "Curiosity doesn’t kill — it creates. Every ‘what if’ becomes a new world."
              </p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <p className="italic text-gray-400">
                "You can’t control the chaos, but you can console.log() it."
              </p>
            </div>
          </div>
        </div>

        {/* Footer Note */}
        <div className="mt-16 text-center">
          <Flame className="w-12 h-12 text-cyan-400 mx-auto mb-4 opacity-60" />
          <p className="text-gray-400 text-sm">
            "The sea is wild, the code is messy, and Prathamesh wouldn’t have it any other way."
          </p>
        </div>
      </div>
    </div>
  )
}
