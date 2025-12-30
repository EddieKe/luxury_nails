"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -left-1/4 -top-1/4 h-[800px] w-[800px] rounded-full bg-gradient-to-br from-pink-200/40 via-rose-100/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, 30, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute -right-1/4 top-1/4 h-[600px] w-[600px] rounded-full bg-gradient-to-bl from-amber-100/40 via-yellow-50/30 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, -40, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-gradient-to-t from-pink-300/30 via-rose-200/20 to-transparent blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="grid min-h-[calc(100vh-8rem)] items-center gap-12 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex w-fit items-center gap-2 rounded-full border border-pink-200 bg-white/60 px-4 py-2 backdrop-blur-sm"
            >
              <Sparkles className="h-4 w-4 text-pink-500" />
              <span className="text-sm font-medium text-gray-700">Luxury Nail Art Studio</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-serif text-5xl font-bold leading-tight tracking-tight text-gray-900 md:text-6xl lg:text-7xl"
            >
              <span className="block">Elevate Your</span>
              <span className="bg-gradient-to-r from-pink-500 via-rose-400 to-amber-400 bg-clip-text text-transparent">
                Natural Beauty
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="max-w-lg text-lg leading-relaxed text-gray-600"
            >
              Experience the art of luxury nail care. Our expert technicians blend creativity with precision to create
              stunning, personalized nail designs that express your unique style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-8 py-4 font-semibold text-white shadow-lg shadow-pink-500/25 transition-all hover:shadow-xl hover:shadow-pink-500/30"
              >
                Book Appointment
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.95 }}
                className="rounded-full border-2 border-gray-200 bg-white/60 px-8 py-4 font-semibold text-gray-800 backdrop-blur-sm transition-all hover:border-pink-300 hover:bg-white"
              >
                View Gallery
              </motion.button>
            </motion.div>
            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex gap-12"
            >
              {[
                { value: "10K+", label: "Happy Clients" },
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Nail Designs" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="text-3xl font-bold text-gray-900">{stat.value}</span>
                  <span className="text-sm text-gray-500">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>
          {/* Right visual - 3D floating composition */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative block mt-12 lg:mt-0"
          >
            <div className="relative h-[450px] lg:h-[600px] w-full max-w-[500px] mx-auto lg:max-w-none">
              {/* Main floating card */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              >
                <div className="relative h-[320px] w-[280px] lg:h-[400px] lg:w-[350px] overflow-hidden rounded-3xl border border-white/50 bg-white/40 p-6 shadow-2xl backdrop-blur-xl">
                  <img
                    src="/hero_face.jpeg"
                    alt="Luxury nail art showcase"
                    className="h-full w-full rounded-2xl object-cover"
                  />
                  {/* Soft colored shadow */}
                  <div className="absolute -bottom-10 left-1/2 h-32 w-3/4 -translate-x-1/2 rounded-full bg-pink-300/40 blur-3xl" />
                </div>
              </motion.div>
              {/* Floating accent elements */}
              <motion.div
                animate={{ y: [0, 15, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
                className="absolute left-0 top-20"
              >
                <div className="h-24 w-24 rounded-2xl border border-white/50 bg-gradient-to-br from-amber-200/60 to-yellow-100/40 p-4 shadow-xl backdrop-blur-sm">
                  <div className="flex h-full items-center justify-center">
                    <Sparkles className="h-8 w-8 text-amber-600" />
                  </div>
                </div>
              </motion.div>
              <motion.div
                animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
                transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-0"
              >
                <div className="h-20 w-20 rounded-full border border-white/50 bg-gradient-to-br from-pink-300/60 to-rose-200/40 shadow-xl backdrop-blur-sm" />
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1.5 }}
                className="absolute right-16 top-10"
              >
                <div className="h-16 w-16 rounded-xl border border-white/50 bg-white/50 shadow-lg backdrop-blur-sm" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
