"use client"

import Link from "next/link"
import { ArrowLeft, Heart, Sparkles } from "lucide-react"

export default function GayganPage() {
  const prideValues = [
    { emoji: "🏳️‍🌈", title: "Pride", desc: "Celebrating identity unapologetically" },
    { emoji: "💪", title: "Strength", desc: "The power of community and solidarity" },
    { emoji: "❤️", title: "Love", desc: "Love in all its forms and expressions" },
    { emoji: "🌟", title: "Authenticity", desc: "Being true to yourself, always" },
    { emoji: "🎨", title: "Expression", desc: "Art, creativity, and visibility" },
    { emoji: "🤝", title: "Unity", desc: "Standing together, stronger together" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-background to-purple-900">
      {/* Rainbow Background Animation */}
      <div className="fixed inset-0 pointer-events-none opacity-30">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-pink-400 hover:text-pink-300 transition w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 via-yellow-500/20 to-purple-500/20 border border-pink-500/50">
            <span className="text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text text-sm font-semibold flex items-center gap-2 justify-center">
              🏳️‍🌈 CELEBRATING PRIDE
            </span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="text-transparent bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 bg-clip-text">
              Gaygan
            </span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Living loud, living proud. Celebrating love, identity, and the beautiful spectrum of human experience.
          </p>
        </div>

        {/* Pride Message */}
        <div className="bg-card/50 backdrop-blur border border-pink-500/30 rounded-2xl p-12 mb-16 text-center space-y-6">
          <Sparkles className="w-12 h-12 text-transparent bg-gradient-to-r from-red-500 to-purple-500 bg-clip-padding mx-auto" />
          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-red-400 via-yellow-400 to-purple-400 bg-clip-text">
              Love is Love
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Pride is not just a month, a parade, or a flag. It's a state of mind. It's waking up and deciding that you
              deserve to exist without apology. That your love is valid. That your identity matters. That you matter.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Gaygan celebrates that every single day. Living authentically. Loving freely. Supporting those who do the
              same.
            </p>
          </div>
        </div>

        {/* Pride Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center">What Pride Means</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {prideValues.map((value, idx) => (
              <div
                key={idx}
                className="group bg-card/50 backdrop-blur border border-pink-500/20 hover:border-pink-500/50 rounded-xl p-6 transition-all hover:shadow-lg"
              >
                <div className="text-4xl mb-3">{value.emoji}</div>
                <h3 className="font-bold text-lg text-transparent bg-gradient-to-r from-red-400 to-purple-400 bg-clip-text mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community */}
        <div className="bg-gradient-to-r from-red-500/10 via-yellow-500/10 to-purple-500/10 border border-pink-500/30 rounded-2xl p-8 mb-16">
          <h2 className="text-2xl font-bold mb-4">Our Community</h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            This is a space for everyone. For the loud and the quiet. For those who've known forever and those just
            figuring it out. For allies standing shoulder to shoulder. For families built by choice. For love in all its
            infinite expressions.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Acceptance", "Visibility", "Safety", "Joy", "Courage", "Community", "Love", "Freedom"].map((word) => (
              <div
                key={word}
                className="px-4 py-3 rounded-lg bg-gradient-to-r from-red-500/20 to-purple-500/20 border border-pink-500/50 text-center text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-purple-400"
              >
                {word}
              </div>
            ))}
          </div>
        </div>

        {/* Final Message */}
        <div className="text-center space-y-4">
          <Heart className="w-8 h-8 text-transparent bg-gradient-to-r from-red-500 to-purple-500 bg-clip-padding mx-auto animate-pulse fill-pink-500" />
          <p className="text-lg text-muted-foreground italic">
            "The revolution will not be televised, but it will be celebrated. It will be loud. It will be beautiful. It
            will be ours."
          </p>
        </div>
      </div>
    </div>
  )
}
