"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-6">
      {/* Ruler decoration at top */}
      <div className="absolute top-0 left-0 right-0 h-6 overflow-hidden">
        <div className="absolute inset-x-0 flex items-end h-full justify-center">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/20 ${i % 5 === 0 ? "h-4" : "h-2"}`} />
            </div>
          ))}
        </div>
      </div>

      <motion.div
        className="text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-white/40 mb-6 block">Error 404</span>
        <h1 className="text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tight uppercase mb-8">
          Page
          <br />
          <span className="text-white/30">Not Found</span>
        </h1>
        <Link
          href="/"
          className="inline-flex items-center gap-4 text-sm font-medium tracking-[0.15em] uppercase border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group"
        >
          Back to Home
          <svg
            className="w-4 h-4 transition-transform group-hover:translate-x-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </motion.div>

      {/* Ruler decoration at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-6 overflow-hidden">
        <div className="absolute inset-x-0 flex items-start h-full justify-center">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="flex-shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/20 ${i % 5 === 0 ? "h-4" : "h-2"}`} />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
