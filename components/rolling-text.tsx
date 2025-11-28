"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"

interface RollingTextProps {
  text: string
  direction?: "left" | "right"
  variant?: "dark" | "light"
}

export function RollingText({ text, direction = "left", variant = "dark" }: RollingTextProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const x = useTransform(scrollYProgress, [0, 1], direction === "left" ? ["0%", "-25%"] : ["-25%", "0%"])

  const bgClass = variant === "dark" ? "bg-black" : "bg-white"
  const textClass = variant === "dark" ? "text-white/10" : "text-black/10"
  const borderColor = variant === "dark" ? "border-white" : "border-black"
  const barColor = variant === "dark" ? "bg-white" : "bg-black"

  return (
    <div
      ref={ref}
      className={`overflow-hidden py-6 md:py-10 ${bgClass} border-t ${borderColor} relative`}
    >
      <motion.div className="flex whitespace-nowrap" style={{ x }}>
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className={`text-5xl md:text-7xl lg:text-[10rem] font-bold tracking-tighter uppercase ${textClass} mx-4 md:mx-8`}
          >
            {text} •
          </span>
        ))}
      </motion.div>
      <div className={`absolute left-0 right-0 bottom-0 h-2 ${barColor}`} />
    </div>
  )
}
