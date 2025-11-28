"use client"

import { motion } from "framer-motion"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

const logos = ["Vogue", "GQ", "Nike", "Apple", "Chanel", "Dior", "Louis Vuitton", "Gucci", "Prada", "Hermès"]

export function LogoMarquee() {
  return (
    <section className="py-12 bg-black overflow-hidden border-y border-white/10">
      <div className="relative h-4 mb-8 overflow-hidden">
        <div className="absolute inset-x-0 flex items-end h-full justify-center">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/30 ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="relative">
        <motion.div
          className="flex items-center whitespace-nowrap animate-marquee"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: JUST_CULTURE_ANIMATION.duration.default,
            ease: JUST_CULTURE_ANIMATION.ease.default,
          }}
        >
          {[...logos, ...logos, ...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex items-center">
              <span className="text-lg md:text-xl font-medium tracking-[0.15em] uppercase text-white/40 hover:text-white transition-colors duration-300 px-8 md:px-12">
                {logo}
              </span>
              <span className="text-white/20 text-xs">◆</span>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative h-4 mt-8 overflow-hidden">
        <div className="absolute inset-x-0 flex items-start h-full justify-center">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/30 ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

