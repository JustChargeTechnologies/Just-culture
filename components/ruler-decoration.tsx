"use client"

import { motion } from "framer-motion"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

interface RulerDecorationProps {
  variant?: "top" | "bottom" | "both"
  className?: string
}

export function RulerDecoration({ variant = "both", className = "" }: RulerDecorationProps) {
  const rulerMarks = Array.from({ length: 50 }, (_, i) => i)

  const RulerLine = () => (
    <div className="relative h-6 overflow-hidden bg-black">
      <div className="absolute inset-x-0 flex items-end h-full">
        {rulerMarks.map((_, i) => (
          <div key={i} className="shrink-0 w-4 flex justify-center">
            <div className={`w-px bg-white ${i % 5 === 0 ? "h-4" : "h-2"}`} />
          </div>
        ))}
      </div>
      <div className="absolute inset-x-0 bottom-0 h-px bg-white" />
    </div>
  )

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: JUST_CULTURE_ANIMATION.duration.default,
        ease: JUST_CULTURE_ANIMATION.ease.default,
      }}
    >
      {(variant === "top" || variant === "both") && <RulerLine />}
      {(variant === "bottom" || variant === "both") && <RulerLine />}
    </motion.div>
  )
}
