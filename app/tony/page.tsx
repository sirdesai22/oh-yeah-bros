"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TonyPage() {
  const projects = [
    {
      title: "The Case of the Missing Code",
      description: "Solved a critical bug that had been haunting the codebase for months",
      year: "2024",
    },
    {
      title: "Digital Forensics Expert",
      description: "Specialized in uncovering hidden patterns and anomalies in complex systems",
      year: "2024",
    },
    {
      title: "The Mystery of User Experience",
      description: "Investigated why users left, found answers in the design",
      year: "2023",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-background to-pink-950">
      {/* Navigation */}
      <nav className="border-b border-border/40 bg-background/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link href="/" className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition w-fit">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header */}
        <div className="mb-20">
          <div className="inline-block mb-4 px-4 py-2 rounded-full bg-purple-500/20 border border-purple-500/50">
            <span className="text-purple-300 text-sm font-semibold">🔍 THE DETECTIVE</span>
          </div>
          <h1 className="text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Tony</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Sharp instincts. Keen eye for detail. Always three steps ahead, solving mysteries nobody else can see.
          </p>
        </div>

        {/* Profile Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur border border-purple-500/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-purple-300 mb-4">The Detective</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Tony doesn't just solve problems—he investigates them. With a detective's mindset and a developer's
                precision, he uncovers root causes where others see only symptoms.
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-muted-foreground">Master of debugging</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-muted-foreground">Problem investigator</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-purple-400">✓</span>
                  <span className="text-muted-foreground">Code forensics expert</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-2">🔎</div>
                <p className="text-muted-foreground text-sm">The Detective at work</p>
              </div>
            </div>
          </div>
        </div>

        {/* Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Notable Cases</h2>
          <div className="space-y-4">
            {projects.map((project, idx) => (
              <div
                key={idx}
                className="bg-card/50 backdrop-blur border border-purple-500/20 hover:border-purple-500/50 rounded-xl p-6 transition-all group cursor-pointer"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-purple-300 group-hover:text-purple-200 transition">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{project.description}</p>
                  </div>
                  <span className="text-sm text-muted-foreground ml-4 whitespace-nowrap">{project.year}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-6">Specializations</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {["System Design", "Debugging", "Analytics", "Performance", "Security", "Architecture"].map((skill) => (
              <div
                key={skill}
                className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm font-medium text-center"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
