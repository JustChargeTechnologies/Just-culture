"use client"

import { useRef, useEffect, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { LiveClock } from "./live-clock"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"])

  // Hydration fix: only render video after mount
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section ref={containerRef} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y, scale }}>
          {mounted && (
            <video
              src="https://res.cloudinary.com/vipinyadav01/video/upload/v1764252709/sqm8hevcelaotqdgldtg.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          )}
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div className="relative z-10 h-full flex flex-col" style={{ opacity }}>
          {/* Main Title - Centered */}
          <motion.div className="flex-1 flex items-center justify-center px-6" style={{ y: titleY }}>
            <motion.h1
              className="text-white text-6xl md:text-8xl lg:text-[12rem] font-bold tracking-tight uppercase leading-none text-center"
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: JUST_CULTURE_ANIMATION.duration.slow,
                ease: JUST_CULTURE_ANIMATION.ease.default,
                delay: 0.2,
              }}
            >
              JUST CULTURE
            </motion.h1>
          </motion.div>

          <motion.div
            className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: JUST_CULTURE_ANIMATION.duration.default,
              ease: JUST_CULTURE_ANIMATION.ease.default,
              delay: 0.6,
            }}
          >
            {/* Ruler decoration */}
            <div className="relative h-4 mb-6 overflow-hidden">
              <div className="absolute inset-x-0 flex items-end h-full">
                {Array.from({ length: 80 }, (_, i) => (
                  <div key={i} className="shrink-0 w-3 flex justify-center">
                    <div className={`w-px bg-white/40 ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-0 bottom-0 h-px bg-white/20" />
            </div>

            <div className="flex items-end justify-between text-white/70">
              <div className="flex items-center gap-8 md:gap-16">
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Studio</span>
                  <span className="text-sm font-medium tracking-wide">JUST CULTURE Creative</span>
                </div>
                <div>
                  <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Location</span>
                  <span className="text-sm font-medium tracking-wide">Noida ,Uttar Pradesh</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Local Time</span>
                <LiveClock />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
