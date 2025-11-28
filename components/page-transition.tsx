"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"
import { pageTransition, JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageTransition}
        transition={{
          duration: JUST_CULTURE_ANIMATION.duration.default,
          ease: JUST_CULTURE_ANIMATION.ease.default,
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
