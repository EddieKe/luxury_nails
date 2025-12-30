"use client"

import { motion } from "framer-motion"

interface AuraOrbProps {
  className?: string
  color: string
  size: string
  delay?: number
  duration?: number
}

function AuraOrb({ className, color, size, delay = 0, duration = 20 }: AuraOrbProps) {
  return (
    <motion.div
      className={`absolute rounded-full blur-xl md:blur-3xl ${className}`}
      style={{
        background: color,
        width: size,
        height: size,
      }}
      animate={{
        x: [0, 30, -20, 10, 0],
        y: [0, -20, 30, -10, 0],
        scale: [1, 1.1, 0.95, 1.05, 1],
      }}
      transition={{
        duration,
        delay,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "reverse",
        ease: "easeInOut",
      }}
    />
  )
}

export function AuraBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Gold cream orb - top right */}
      <AuraOrb
        className="right-[-10%] top-[-5%] opacity-40"
        color="radial-gradient(circle, rgba(212,165,116,0.6) 0%, rgba(255,248,240,0.2) 70%, transparent 100%)"
        size="600px"
        delay={0}
        duration={25}
      />

      {/* Soft pink orb - left middle */}
      <AuraOrb
        className="left-[-15%] top-[30%] opacity-30"
        color="radial-gradient(circle, rgba(253,164,175,0.5) 0%, rgba(255,240,243,0.2) 70%, transparent 100%)"
        size="500px"
        delay={2}
        duration={22}
      />

      {/* Cream orb - bottom center */}
      <AuraOrb
        className="bottom-[10%] left-[40%] opacity-35"
        color="radial-gradient(circle, rgba(253,251,247,0.8) 0%, rgba(212,165,116,0.3) 50%, transparent 100%)"
        size="450px"
        delay={4}
        duration={28}
      />

      {/* Dusty pink orb - top left */}
      <AuraOrb
        className="left-[20%] top-[-10%] opacity-25"
        color="radial-gradient(circle, rgba(236,72,153,0.3) 0%, rgba(253,164,175,0.15) 60%, transparent 100%)"
        size="400px"
        delay={1}
        duration={20}
      />

      {/* Gold accent orb - right middle */}
      <AuraOrb
        className="right-[5%] top-[50%] opacity-30"
        color="radial-gradient(circle, rgba(212,165,116,0.5) 0%, rgba(255,248,240,0.15) 70%, transparent 100%)"
        size="350px"
        delay={3}
        duration={24}
      />

      {/* Light cream orb - bottom left */}
      <AuraOrb
        className="bottom-[20%] left-[-5%] opacity-40"
        color="radial-gradient(circle, rgba(253,251,247,0.9) 0%, rgba(253,164,175,0.2) 60%, transparent 100%)"
        size="380px"
        delay={5}
        duration={26}
      />
    </div>
  )
}
