"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Menu, X } from "lucide-react"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Gallery", href: "#gallery" },
  { name: "Team", href: "#team" },
  { name: "Academy", href: "#academy" },
  { name: "Vibes", href: "#vibes" },
  { name: "Contact", href: "#contact" },
]

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeLink, setActiveLink] = useState("Home")

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="fixed left-1/2 top-6 z-50 -translate-x-1/2"
    >
      {/* Desktop nav */}
      <div className="hidden rounded-full border border-white/50 bg-white/70 px-2 py-2 shadow-lg backdrop-blur-xl md:block">
        <div className="flex items-center gap-1">
          <a
            href="#"
            className="mr-4 flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-4 py-2"
          >
            <span className="text-sm font-bold text-white">Luxury Nails</span>
          </a>

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
                activeLink === link.name ? "text-pink-600" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {activeLink === link.name && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-pink-100"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{link.name}</span>
            </a>
          ))}

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="ml-2 rounded-full bg-gray-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-gray-800"
          >
            Book Now
          </motion.a>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden">
        <div className="flex items-center gap-4 rounded-full border border-white/50 bg-white/70 px-4 py-3 shadow-lg backdrop-blur-xl">
          <div className="flex items-center gap-2">
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text font-bold text-transparent">
              Luxury Nails
            </span>
          </div>
          <button onClick={() => setIsOpen(!isOpen)} className="rounded-full p-2 transition-colors hover:bg-gray-100">
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute left-1/2 top-full mt-4 w-48 -translate-x-1/2 rounded-2xl border border-white/50 bg-white/90 p-4 shadow-xl backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.name)
                    setIsOpen(false)
                  }}
                  className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                    activeLink === link.name ? "bg-pink-100 text-pink-600" : "text-gray-600 hover:bg-gray-100"
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#"
                className="mt-2 rounded-full bg-gray-900 px-4 py-2 text-center text-sm font-medium text-white"
              >
                Book Now
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}
