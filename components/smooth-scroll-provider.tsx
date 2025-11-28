"use client"

import { useEffect, useRef, type ReactNode } from "react"
import Lenis from "lenis"

interface SmoothScrollProviderProps {
  children: ReactNode
}

export function SmoothScrollProvider({ children }: SmoothScrollProviderProps) {
  const lenisRef = useRef<Lenis | null>(null)
  const frameRef = useRef<number | null>(null)

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.05,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
      wheelMultiplier: 1.1,
    })

    lenisRef.current = lenis
    document.documentElement.classList.add("lenis-enabled")

    const handleScroll = ({ progress }: { progress: number }) => {
      document.documentElement.style.setProperty("--scroll-progress", `${progress}`)
    }

    lenis.on("scroll", handleScroll)

    const raf = (time: number) => {
      lenis.raf(time)
      frameRef.current = requestAnimationFrame(raf)
    }

    frameRef.current = requestAnimationFrame(raf)

    return () => {
      document.documentElement.classList.remove("lenis-enabled")
      lenis.off("scroll", handleScroll)
      lenis.destroy()
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current)
      }
    }
  }, [])

  return <>{children}</>
}
