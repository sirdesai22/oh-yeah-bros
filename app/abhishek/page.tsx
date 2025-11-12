"use client"

import Link from "next/link"
import { ArrowLeft, Trophy, Heart,  CloudRain } from "lucide-react"

export default function AbhishekPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-950 text-gray-100">
      {/* Navigation */}
      <nav className="border-b border-slate-700 bg-slate-900/70 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition w-fit"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/40">
            <span className="text-blue-300 text-sm font-semibold">🏏 THE CRICKET PAGLU</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-300 to-blue-600 bg-clip-text text-transparent">
              Abhishek
            </span>
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A boy with a bat in one hand and a bowl of Gulab Jamuns in the other.  
            Fighting battles the world never saw.
          </p>
        </div>

        {/* Sweet Side */}
        <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Heart className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            <h2 className="text-2xl font-bold text-yellow-300">The Gulab Jamun Therapy</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg italic">
            "Some find peace in music.  
            Some in sleep.  
            I find mine in the syrup-soaked sweetness of Gulab Jamun."
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            Maybe it’s not just a dessert — maybe it’s how he keeps the sweetness alive,
            even when life turns bitter.
          </p>
        </div>

        {/* Cricket Passion */}
        <div className="bg-gradient-to-r from-blue-900/30 to-slate-800/30 border border-blue-700/40 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-bold text-blue-300">The Game of His Life</h2>
          </div>
          <p className="text-gray-400 text-lg leading-relaxed">
            Cricket isn't a sport to him — it's a heartbeat, a language, a memory of better days.  
            He celebrates centuries like festivals, and losses hit deeper than words can explain.  
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            Every match is more than just runs — it’s therapy, adrenaline, and escape.
          </p>
        </div>

        {/* Trauma Section */}
        <div className="bg-slate-900/50 border border-red-500/20 rounded-2xl p-8 mb-16">
          <div className="flex items-center gap-2 mb-4">
            <CloudRain className="w-5 h-5 text-red-400" />
            <h2 className="text-2xl font-bold text-red-300">The Stampede That Changed Everything</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg italic">
            There are moments that don’t just leave scars — they leave silence.  
            A noise so loud, it echoes in the mind forever.
          </p>
          <p className="text-gray-500 mt-4 text-sm">
            Abhishek still walks through crowds carefully. Not out of fear —  
            but out of respect for the chaos he once survived.
          </p>
        </div>

        {/* Healing and Hope */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-300 mb-3">Healing in Motion</h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Between cricket pitches and quiet nights, he’s learning to rebuild —  
            one boundary, one memory, one sweet bite at a time.
          </p>
          <p className="italic text-blue-400">
            “You can’t control what broke you,  
            but you can choose what rebuilds you.”
          </p>
        </div>

        {/* Ending Note */}
        <div className="mt-16 text-center opacity-70">
          <Heart className="w-12 h-12 text-yellow-400 fill-yellow-400 mx-auto mb-4" />
          <p className="text-sm text-gray-400">
            "Cricket keeps him alive. Gulab Jamun keeps him human."
          </p>
        </div>
      </div>
    </div>
  )
}
