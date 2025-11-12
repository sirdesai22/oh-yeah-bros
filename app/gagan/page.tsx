"use client"

import Link from "next/link"
import { ArrowLeft, Dumbbell, Code, Cpu } from "lucide-react"

export default function GaganPage() {
  const coreValues = [
    { emoji: "💪", title: "Discipline", desc: "Show up. Lift heavy. Keep pushing — no matter what." },
    { emoji: "⚙️", title: "Precision", desc: "Code clean. Train right. Small details build giants." },
    { emoji: "🔥", title: "Growth", desc: "Evolve every day — in muscle, mind, and mindset." },
    { emoji: "💻", title: "Focus", desc: "Build in silence. Let your results do the talking." },
    { emoji: "🏋️", title: "Consistency", desc: "Every rep. Every line of code. That’s progress." },
    { emoji: "⚡", title: "Power", desc: "The energy that turns goals into reality." },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-slate-900 to-black text-gray-100">
      {/* Nav */}
      <nav className="sticky top-0 backdrop-blur bg-black/60 border-b border-slate-800 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition"
          >
            <ArrowLeft className="w-4 h-4" />
            Home
          </Link>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="text-center mb-14">
          <h1 className="text-6xl font-extrabold mb-3 tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 drop-shadow-lg">
              Gagan Naik
            </span>
          </h1>
          <p className="text-gray-400 text-lg">
            Muscles. Mindset. Machine code.  
            The modern alpha in motion.
          </p>
        </div>

        {/* Mindset Section */}
        <section className="bg-slate-900/50 border border-slate-800 rounded-2xl p-10 mb-12 text-center shadow-lg shadow-blue-900/20">
          <h2 className="text-3xl font-bold mb-4 text-blue-400 uppercase tracking-wide">
            Strength Meets Logic
          </h2>
          <p className="text-gray-400 leading-relaxed mb-3 text-lg">
            Iron sharpens the body. Logic sharpens the mind.  
            Together, they forge unshakable discipline.
          </p>
          <p className="text-gray-400 text-lg">
            The grind isn’t noise — it’s power in silence.
          </p>
        </section>

        {/* Core Values */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-300">Code of the Giant</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((val) => (
              <div
                key={val.title}
                className="p-6 bg-gradient-to-br from-slate-900/50 to-slate-950/30 border border-slate-800 rounded-xl hover:border-blue-400/50 transition-all hover:scale-[1.02] hover:shadow-lg hover:shadow-blue-800/20"
              >
                <div className="text-3xl mb-2">{val.emoji}</div>
                <h3 className="font-semibold text-lg mb-1 text-blue-300">{val.title}</h3>
                <p className="text-sm text-gray-400">{val.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dual Grind Section */}
        <section className="bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-slate-800/20 border border-slate-700 rounded-2xl p-10 text-center mb-16">
          <h2 className="text-2xl font-semibold mb-3 text-blue-300">Lift. Code. Repeat.</h2>
          <p className="text-gray-400 mb-8 text-lg">
            Whether it’s weights or frameworks, Gagan builds with intent.  
            Power in reps, precision in logic.
          </p>
          <div className="flex justify-center gap-6 text-blue-400">
            <Dumbbell className="w-10 h-10 animate-pulse" />
            <Code className="w-10 h-10 animate-pulse" />
            <Cpu className="w-10 h-10 animate-pulse" />
          </div>
        </section>

        {/* Quote */}
        <div className="text-center text-gray-400 italic text-lg font-light">
          “Built by effort. Driven by code.  
          Powered by purpose.”
        </div>
      </main>
    </div>
  )
}
