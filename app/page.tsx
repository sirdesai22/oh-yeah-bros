"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function Home() {
  const members = [
    {
      name: "Rohan",
      role: "The Translator",
      description: "Master of languages, breaking down barriers one word at a time",
      href: "/rohan",
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
    },
    {
      name: "Tony",
      role: "The Detective",
      description: "Solving mysteries with style and sharp instincts",
      href: "/tony",
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Priyankar",
      role: "The Romantic",
      description: "Hopeless dreamer with a heart full of endless devotion",
      href: "/priyankar",
      color: "from-blue-600 to-blue-400",
      bgColor: "bg-blue-600/10",
    },
    {
      name: "Gagan",
      role: "The Giant",
      description: "Celebrating love, identity, and the power of pride",
      href: "/gagan",
      color: "from-cyan-400 to-blue-400",
      bgColor: "bg-purple-500/10",
    },
    {
      name: "Sirdesai",
      role: "The Short Chaos",
      description: "Short, Chaotic and Pro Coder",
      href: "/prathamesh",
      color: "from-pink-400 to-blue-400",
      bgColor: "bg-blue-600/10",
    }
  ]

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent"
          >
            Oh Yeah Bros
          </Link>
          <div className="hidden sm:flex gap-8">
            <Link href="#members" className="text-sm hover:text-accent transition">
              Members
            </Link>
            <Link href="#about" className="text-sm hover:text-accent transition">
              About
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-7xl font-bold leading-tight text-pretty">
              We Are{" "}
              <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
                Oh Yeah Bros
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              A collective of creative minds pushing boundaries. Each with their own story, their own skill, their own
              vibe.
            </p>
            <div className="flex gap-4 justify-center pt-4">
              <Link
                href="#members"
                className="px-8 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium"
              >
                Meet the Bros
              </Link>
              <Link
                href="#about"
                className="px-8 py-3 rounded-full border border-border hover:bg-accent/10 transition font-medium"
              >
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Members Section */}
      <section id="members" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Meet The Crew</h2>
          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Four unique perspectives. One powerful collective. Each bringing their own magic to the table.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {members.map((member) => (
              <Link key={member.name} href={member.href} className="group">
                <div
                  className={`${member.bgColor} p-8 rounded-2xl border border-border/50 hover:border-border transition-all duration-300 hover:shadow-lg cursor-pointer h-full`}
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-pink-500 group-hover:to-purple-500 transition">
                        {member.name}
                      </h3>
                      <p
                        className={`text-sm font-semibold bg-gradient-to-r ${member.color} bg-clip-text text-transparent mt-1`}
                      >
                        {member.role}
                      </p>
                    </div>
                    <p className="text-muted-foreground">{member.description}</p>
                    <div className="flex items-center gap-2 text-accent pt-4 group-hover:gap-4 transition-all">
                      <span className="text-sm font-medium">Explore</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <h2 className="text-4xl font-bold">Why Oh Yeah Bros?</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Because collaboration is magic. Because diversity of thought creates innovation. Because we believe in
            celebrating who we are and supporting each other unconditionally.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We're not just a group—we're a movement. A testament to friendship, creativity, and the power of being
            authentically yourself.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center text-sm text-muted-foreground">
          <p>© 2025 Oh Yeah Bros. All vibes reserved.</p>
        </div>
      </footer>
    </div>
  )
}
