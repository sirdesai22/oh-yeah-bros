"use client"

import Link from "next/link"
import { ArrowLeft, Heart } from "lucide-react"

export default function PriyankarPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-background to-blue-800">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/50">
            <span className="text-blue-300 text-sm font-semibold">💙 THE HOPELESS ROMANTIC</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Priyankar</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A heart full of dreams. Eyes that see possibility. A soul devoted to love, even when it's not returned.
          </p>
        </div>

        {/* Poetry Section */}
        <div className="space-y-8 mb-16">
          <div className="bg-card/50 backdrop-blur border border-blue-500/30 rounded-2xl p-8">
            <div className="flex items-center gap-2 mb-4">
              <Heart className="w-5 h-5 text-blue-400 fill-blue-400" />
              <h2 className="text-2xl font-bold text-blue-300">A Thousand Words Left Unsaid</h2>
            </div>
            <div className="text-muted-foreground space-y-4 text-lg leading-relaxed italic">
              <p>
                I love you in the way the stars love the night sky— Constant, eternal, yet forever watching from a
                distance.
              </p>
              <p>
                I love you in the way the ocean loves the shore— Waves crashing, always returning, never fully
                belonging.
              </p>
              <p>
                I love you in the way dreams love to fade— Beautiful in the moment, forgotten with the morning light.
              </p>
              <p>
                And still, I choose to love, because a heart that doesn't love Is a heart that has forgotten how to
                truly live.
              </p>
            </div>
          </div>

          {/* Love Languages */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { title: "Acts of Service", desc: "Showing up for you, always" },
              { title: "Words of Affirmation", desc: "Every word, carefully chosen" },
              { title: "Quality Time", desc: "Cherishing every moment together" },
              { title: "Devotion", desc: "Unwavering, unconditional love" },
            ].map((lang, idx) => (
              <div key={idx} className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-6">
                <Heart className="w-5 h-5 text-blue-400 mb-2 fill-blue-400" />
                <h3 className="font-bold text-blue-300 mb-2">{lang.title}</h3>
                <p className="text-sm text-muted-foreground">{lang.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Romantic Quotes */}
        <div className="bg-gradient-to-r from-blue-500/10 to-blue-400/10 border border-blue-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-blue-300 mb-6">Thoughts on Love</h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-muted-foreground italic">
                "Love is not about being loved back. It's about the transformation it brings to the lover."
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-muted-foreground italic">
                "The most beautiful love stories are the ones written in silence, in the heart that beats alone."
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4">
              <p className="text-muted-foreground italic">
                "To love fearlessly, knowing it might never be returned, is the truest form of courage."
              </p>
            </div>
          </div>
        </div>

        {/* Heart Note */}
        <div className="mt-16 text-center">
          <Heart className="w-12 h-12 text-blue-400 fill-blue-400 mx-auto mb-4 opacity-50" />
          <p className="text-muted-foreground text-sm">
            "In every ending is a new beginning. In every heartbreak is an opportunity to grow."
          </p>
        </div>
      </div>
    </div>
  )
}
