"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

export function AboutPreview() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [80, -80])

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "200+", label: "Projects Done" },
    { number: "50+", label: "Global Clients" },
    { number: "12", label: "Awards Won" },
  ]

  return (
    <section ref={ref} className="py-32 md:py-48 bg-black text-white overflow-hidden">
      <div className="relative h-4 mb-16 overflow-hidden">
        <div className="absolute inset-x-0 flex items-end h-full justify-center">
          {Array.from({ length: 100 }, (_, i) => (
            <div key={i} className="shrink-0 w-3 flex justify-center">
              <div className={`w-px bg-white/20 ${i % 5 === 0 ? "h-3" : "h-1.5"}`} />
            </div>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: JUST_CULTURE_ANIMATION.duration.slow,
              ease: JUST_CULTURE_ANIMATION.ease.default,
            }}
            viewport={{ once: true }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-white/40 mb-6 block">About Us</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight uppercase leading-tight mb-8">
              A creative studio focused on culture, luxury, editorial & art.
            </h2>
            <Link
              href="/about"
              className="inline-flex items-center gap-4 text-sm font-medium tracking-[0.15em] uppercase border border-white/30 px-8 py-4 hover:bg-white hover:text-black transition-all duration-300 group"
            >
              Learn More
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

          <motion.div className="relative" style={{ y }}>
            <div className="grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: JUST_CULTURE_ANIMATION.duration.default,
                    delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                    ease: JUST_CULTURE_ANIMATION.ease.default,
                  }}
                  viewport={{ once: true }}
                >
                  <div className="text-5xl md:text-6xl font-bold">{stat.number}</div>
                  <div className="text-xs tracking-[0.2em] uppercase text-white/50">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
