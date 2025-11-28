"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"



export function Footer() {  
  return (
    <footer className="bg-black text-white">
      <div className="relative h-6 overflow-hidden">
        <div className="absolute inset-x-0 flex items-end h-full">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/20 ${i % 5 === 0 ? "h-4" : "h-2"}`} />
            </div>
          ))}
        </div>
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="py-5 md:py-12">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="group border-b border-white/10 pb-16 md:pb-20 mb-12 md:mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{
              duration: JUST_CULTURE_ANIMATION.duration.slow,
              ease: JUST_CULTURE_ANIMATION.ease.default,
            }}
          >
            <div className="flex flex-col gap-10 md:flex-row md:items-center md:justify-between">
              <div className="relative flex-1 overflow-visible">
                <div className="relative flex flex-wrap items-baseline gap-5 text-4xl md:text-6xl lg:text-7xl font-bold tracking-[0.25em] uppercase leading-none transition-transform duration-700 ease-[.22,.61,.36,1] group-hover:md:-rotate-2">
                  {["LET'S", "CONNECT", "TOGETHER"].map((word, index) => (
                    <span key={word} className="relative block overflow-hidden text-white">
                      <span
                        className="block translate-y-0 transition-transform duration-700 ease-[.22,.61,.36,1] group-hover:-translate-y-2"
                        style={{ transitionDelay: `${index * 60}ms` }}
                      >
                        {word}
                      </span>
                    </span>
                  ))}
                </div>

                <div className="pointer-events-none absolute inset-x-[-5%] top-1/2 -translate-y-1/2">
                  <span className="block h-[2px] w-full origin-left scale-x-0 bg-linear-to-r from-transparent via-white/80 to-transparent transition duration-500 ease-[.22,.61,.36,1] group-hover:scale-x-100 group-hover:rotate-2" />
                </div>
              </div>

              <Link
                href="/contact"
                className="relative inline-flex items-center gap-4 overflow-hidden border border-white/30 px-6 md:px-10 py-4 text-xs md:text-sm font-medium tracking-[0.3em] uppercase transition duration-500 ease-[.22,.61,.36,1] hover:rotate-2 group-hover:rotate-2"
              >
                <span className="absolute inset-0 translate-y-full bg-white transition-transform duration-500 ease-[.22,.61,.36,1] group-hover:translate-y-0 hover:translate-y-0" />
                <span className="relative z-10 text-white transition-colors duration-300 ease-[.22,.61,.36,1] group-hover:text-black hover:text-black">
                  Start a Project
                </span>
                <svg
                  className="relative z-10 h-5 w-5 transition-transform duration-500 ease-[.22,.61,.36,1] group-hover:translate-x-2 group-hover:text-black hover:translate-x-2 hover:text-black"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </motion.div>
          <div className="flex flex-col md:flex-row justify-between items-center pt-4 border-t border-white/10 gap-4">
            <p className="text-white/40 text-xs tracking-wider">© 2025 JUST CULTURE. All rights reserved.</p>
            <p className="text-white/40 text-xs tracking-wider">Crafted with precision</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
