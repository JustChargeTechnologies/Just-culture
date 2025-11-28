"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion"

type CursorMode = "default" | "pointer" | "label"

const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, textarea, select, [data-cursor="pointer"]'

const LABEL_MAP: Record<string, string> = {
  view: "VIEW",
  play: "PLAY",
}

const resolveCursorIntent = (target: EventTarget | null): { mode: CursorMode; text: string } => {
  if (!(target instanceof HTMLElement)) {
    return { mode: "default", text: "" }
  }

  const cursorTarget = target.closest("[data-cursor]") as HTMLElement | null

  if (cursorTarget) {
    const cursorAttr = cursorTarget.dataset.cursor?.toLowerCase() ?? ""
    const customLabel = cursorTarget.dataset.cursorLabel ?? cursorTarget.getAttribute("data-cursor-label")

    if (cursorAttr === "pointer") {
      return { mode: "pointer", text: "" }
    }

    if (cursorAttr && (LABEL_MAP[cursorAttr] || customLabel)) {
      return {
        mode: "label",
        text: (customLabel || LABEL_MAP[cursorAttr] || cursorAttr).toUpperCase(),
      }
    }
  }

  if (target.closest(INTERACTIVE_SELECTOR)) {
    return { mode: "pointer", text: "" }
  }

  return { mode: "default", text: "" }
}

export function CustomCursor() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const dotSpringConfig = { damping: 32, stiffness: 360 }
  const dotX = useSpring(mouseX, dotSpringConfig)
  const dotY = useSpring(mouseY, dotSpringConfig)

  const [cursorMode, setCursorMode] = useState<CursorMode>("default")
  const [hoverText, setHoverText] = useState("")
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handlePointerMove = (event: PointerEvent) => {
      if (event.pointerType === "touch") return

      mouseX.set(event.clientX)
      mouseY.set(event.clientY)
      setIsVisible(true)

      const { mode, text } = resolveCursorIntent(event.target)
      setCursorMode((prev) => (prev === mode ? prev : mode))
      setHoverText((prev) => (prev === text ? prev : text))
    }

    const handlePointerLeave = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      setIsVisible(false)
      setCursorMode("default")
      setHoverText("")
    }

    const handlePointerEnter = (event: PointerEvent) => {
      if (event.pointerType === "touch") return
      setIsVisible(true)
    }

    window.addEventListener("pointermove", handlePointerMove, { passive: true })
    window.addEventListener("pointerleave", handlePointerLeave)
    window.addEventListener("pointerenter", handlePointerEnter)

    return () => {
      window.removeEventListener("pointermove", handlePointerMove)
      window.removeEventListener("pointerleave", handlePointerLeave)
      window.removeEventListener("pointerenter", handlePointerEnter)
    }
  }, [mouseX, mouseY])

  const [isTouchDevice, setIsTouchDevice] = useState(false)
  useEffect(() => {
    if (typeof window === "undefined") return
    setIsTouchDevice("ontouchstart" in window || navigator.maxTouchPoints > 0)
  }, [])

  if (isTouchDevice) return null

  const dotSize = cursorMode === "label" ? 80 : cursorMode === "pointer" ? 48 : 14

  return (
    <motion.div
      className="fixed top-0 left-0 z-9999 pointer-events-none mix-blend-difference"
      style={{
        x: dotX,
        y: dotY,
        translateX: "-50%",
        translateY: "-50%",
      }}
    >
      <motion.div
        className={`flex items-center justify-center rounded-full bg-white ${
          cursorMode === "label" ? "text-black mix-blend-normal" : ""
        }`}
        animate={{
          width: dotSize,
          height: dotSize,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{
          type: "spring",
          damping: 32,
          stiffness: 280,
        }}
      >
        <AnimatePresence mode="wait">
          {hoverText && cursorMode === "label" && (
            <motion.span
              key={hoverText}
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.7 }}
              className="text-[10px] font-semibold tracking-[0.45em]"
            >
              {hoverText}
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  )
}
