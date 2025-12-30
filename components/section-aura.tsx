"use client"

import { motion } from "framer-motion"

interface SectionAuraProps {
  variant?: "default" | "pink" | "gold" | "mixed"
}

export function SectionAura({ variant = "default" }: SectionAuraProps) {
  const getColors = () => {
    switch (variant) {
      case "pink":
        return ["bg-rose-100/30", "bg-pink-100/20", "bg-white/40"]
      case "gold":
        return ["bg-amber-100/40", "bg-yellow-50/20", "bg-white/40"]
      case "mixed":
        return ["bg-amber-100/40", "bg-rose-100/30", "bg-white/60"]
      default:
        return ["bg-amber-100/40", "bg-rose-100/30", "bg-white/60"]
    }
  }

  const colors = getColors()

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className={`absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full ${colors[0]} blur-[120px]`}
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className={`absolute bottom-20 right-1/4 h-[500px] w-[500px] rounded-full ${colors[1]} blur-[120px]`}
      />
      <motion.div
        animate={{
          opacity: [0.4, 0.7, 0.4],
          scale: [0.9, 1.1, 0.9],
        }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className={`absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full ${colors[2]} blur-[100px]`}
      />
    </div>
  )
}
