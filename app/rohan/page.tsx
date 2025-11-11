"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowLeft, Copy, Check } from "lucide-react"

export default function RohanPage() {
  const [inputText, setInputText] = useState("")
  const [selectedLang, setSelectedLang] = useState("es")
  const [translatedText, setTranslatedText] = useState("")
  const [loading, setLoading] = useState(false)
  const [copied, setCopied] = useState(false)

  const languages = {
    es: "Spanish",
    fr: "French",
    de: "German",
    it: "Italian",
    ja: "Japanese",
    ko: "Korean",
    pt: "Portuguese",
    ru: "Russian",
  }

  const handleTranslate = async () => {
    if (!inputText.trim()) return

    setLoading(true)
    // Simulated translation
    setTimeout(() => {
      const translations: { [key: string]: string } = {
        es: `[${languages.es}] ${inputText}`,
        fr: `[${languages.fr}] ${inputText}`,
        de: `[${languages.de}] ${inputText}`,
        it: `[${languages.it}] ${inputText}`,
        ja: `[${languages.ja}] ${inputText}`,
        ko: `[${languages.ko}] ${inputText}`,
        pt: `[${languages.pt}] ${inputText}`,
        ru: `[${languages.ru}] ${inputText}`,
      }
      setTranslatedText(translations[selectedLang] || "")
      setLoading(false)
    }, 600)
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-background to-cyan-950">
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
            <span className="text-blue-300 text-sm font-semibold">🌍 THE TRANSLATOR</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Rohan</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Breaking language barriers, one translation at a time. Type something and watch it transform.
          </p>
        </div>

        {/* Translator Tool */}
        <div className="bg-card/50 backdrop-blur border border-blue-500/30 rounded-2xl p-8 space-y-6">
          {/* Input */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-blue-300">Original Text</label>
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Type anything here..."
              className="w-full h-32 bg-background/50 border border-border rounded-lg p-4 text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Language Selection */}
          <div className="space-y-2">
            <label className="block text-sm font-semibold text-blue-300">Translate To</label>
            <select
              value={selectedLang}
              onChange={(e) => setSelectedLang(e.target.value)}
              className="w-full bg-background/50 border border-border rounded-lg p-3 text-foreground focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {Object.entries(languages).map(([code, name]) => (
                <option key={code} value={code}>
                  {name}
                </option>
              ))}
            </select>
          </div>

          {/* Translate Button */}
          <button
            onClick={handleTranslate}
            disabled={loading || !inputText.trim()}
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold py-3 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Translating..." : "Translate"}
          </button>

          {/* Output */}
          {translatedText && (
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-cyan-300">Translated Text</label>
              <div className="relative">
                <div className="w-full bg-background/50 border border-border rounded-lg p-4 text-foreground min-h-32 break-words">
                  {translatedText}
                </div>
                <button
                  onClick={copyToClipboard}
                  className="absolute top-3 right-3 p-2 hover:bg-background rounded transition"
                  title="Copy to clipboard"
                >
                  {copied ? (
                    <Check className="w-5 h-5 text-green-500" />
                  ) : (
                    <Copy className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>
              </div>
            </div>
          )}
        </div>

        {/* About Rohan */}
        <div className="mt-16 p-8 rounded-2xl bg-blue-500/10 border border-blue-500/30">
          <h2 className="text-2xl font-bold mb-4 text-blue-300">About Rohan</h2>
          <p className="text-muted-foreground leading-relaxed">
            Rohan has an innate gift for languages. Fluent in 8+ languages, he's the bridge between cultures and
            communities. When he's not translating, he's discovering new linguistic nuances or teaching others the
            beauty of human communication.
          </p>
        </div>
      </div>
    </div>
  )
}
