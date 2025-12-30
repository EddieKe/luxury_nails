"use client"

import { motion } from "framer-motion"
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react"
import Image from "next/image"

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/luxurynails", label: "Instagram" },
  { icon: Facebook, href: "https://facebook.com/luxurynails", label: "Facebook" },
  { icon: Twitter, href: "https://twitter.com/luxurynails", label: "Twitter" },
  { icon: TikTokIcon, href: "https://tiktok.com/@luxurynails", label: "TikTok" },
]

export function Footer() {
  return (
    <footer id="contact" className="bg-black pt-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 pb-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-16 w-16">
                <Image
                  src="/luxury_nails.png"
                  alt="Luxury Nails Logo"
                  fill
                  className="object-contain drop-shadow-[0_0_12px_rgba(236,72,153,0.5)]"
                />
              </div>
              <h3 className="bg-gradient-to-r from-pink-400 to-amber-300 bg-clip-text font-serif text-2xl font-bold text-transparent">
                Luxury Nails
              </h3>
            </div>
            <p className="mb-6 leading-relaxed text-gray-400">
              Your premier destination for luxury nail art and beauty services.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-pink-500"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="mb-4 font-semibold text-white">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: "Services", href: "#services" },
                { name: "Gallery", href: "#gallery" },
                { name: "Team", href: "#team" },
                { name: "Academy", href: "#academy" },
                { name: "Testimonials", href: "#testimonials" },
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-gray-400 transition-colors hover:text-pink-400">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="mb-4 font-semibold text-white">Services</h4>
            <ul className="space-y-3">
              {["Gel Manicure", "Nail Art", "Lash Extensions", "Makeup", "Nail Courses"].map((service) => (
                <li key={service}>
                  <a href="#services" className="text-gray-400 transition-colors hover:text-pink-400">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="mb-4 font-semibold text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 flex-shrink-0 text-amber-400" />
                <span className="text-gray-400">
                  Sarit Centre, Westlands
                  <br />
                  Nairobi, Kenya
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <a href="tel:+254700000000" className="text-gray-400 hover:text-pink-400">
                  +254 700 000 000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a href="mailto:hello@luxurynails.co.ke" className="text-gray-400 hover:text-pink-400">
                  hello@luxurynails.co.ke
                </a>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 py-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-500">© 2025 Luxury Nails. All rights reserved.</p>
            <div className="flex gap-6 text-sm text-gray-500">
              <a href="#" className="hover:text-pink-400">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-pink-400">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
