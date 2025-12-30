"use client"

import { motion } from "framer-motion"
import { MapPin, Clock, Navigation } from "lucide-react"

export function ContactSection() {
  const handleGetDirections = () => {
    window.open(
      "https://www.google.com/maps/place/Sarit+Centre/@-1.2647718,36.8016641,17z",
      "_blank",
    )
  }

  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute left-1/4 top-20 h-[500px] w-[500px] rounded-full bg-amber-100/40 blur-[120px]" />
      <div className="pointer-events-none absolute right-1/4 bottom-20 h-[500px] w-[500px] rounded-full bg-rose-100/30 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/60 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
            Visit Us
          </span>
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Find Our <span className="text-primary">Studio</span>
          </h2>
        </motion.div>

        {/* Map Container with Floating Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl shadow-2xl"
        >
          {/* Google Maps Embed with Sepia/Grayscale Filter */}
          <div className="relative h-[500px] w-full md:h-[600px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15955.364358461562!2d36.79947504868984!3d-1.2647717804913217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f173c0a1f9a1f%3A0x231454c015525381!2sSarit%20Centre!5e0!3m2!1sen!2ske!4v1701868800000!5m2!1sen!2ske"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[40%] sepia-[20%] contrast-[95%] brightness-[105%]"
              title="Luxury Nails Location - Sarit Centre, Westlands, Nairobi"
            />

            {/* Gradient overlay for better card contrast */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-transparent" />
          </div>

          {/* Floating Address Card */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-auto md:w-[380px]"
          >
            <div className="rounded-2xl border border-white/50 bg-white/80 p-6 shadow-2xl backdrop-blur-xl md:p-8">
              {/* Location */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500 to-rose-400 shadow-lg shadow-pink-500/30">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Our Location</h3>
                  <p className="text-gray-600">
                    Sarit Centre, Shop 204
                    <br />
                    Westlands, Nairobi
                  </p>
                </div>
              </div>

              {/* Hours */}
              <div className="mb-6 flex items-start gap-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-400 shadow-lg shadow-amber-500/30">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="mb-1 font-semibold text-gray-900">Working Hours</h3>
                  <p className="text-gray-600">Mon - Sat: 9:00 AM - 7:00 PM</p>
                </div>
              </div>

              {/* Get Directions Button */}
              <motion.button
                onClick={handleGetDirections}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:shadow-xl hover:shadow-pink-500/40"
              >
                <Navigation className="h-5 w-5 transition-transform group-hover:rotate-12" />
                Get Directions
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
