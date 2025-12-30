"use client"

import { useState } from "react"
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion"
import { X, Clock, Check, MessageCircle } from "lucide-react"
import Image from "next/image"
import type { MouseEvent } from "react"
import { SectionAura } from "./section-aura"

interface ServiceTier {
  name: string
  price: string
  duration: string
  features: string[]
}

interface ServiceData {
  id: string
  title: string
  tagline: string
  description: string
  image: string
  tiers: ServiceTier[]
}

const services: ServiceData[] = [
  {
    id: "nails",
    title: "Luxury Nails",
    tagline: "Artistry at your fingertips",
    description:
      "From classic manicures to intricate nail art, our experts craft stunning designs tailored to your style.",
    image: "/pink_stilleto.jpeg",
    tiers: [
      {
        name: "Classic Gel",
        price: "Ksh 1,500",
        duration: "45 mins",
        features: ["Gel polish application", "Cuticle care", "Hand massage", "Choice of 50+ colors"],
      },
      {
        name: "Nail Art",
        price: "Ksh 2,500",
        duration: "1.5 hrs",
        features: [
          "Custom design consultation",
          "Hand-painted art",
          "Chrome or glitter finish",
          "Nail repair included",
        ],
      },
      {
        name: "Full Set Extensions",
        price: "Ksh 3,500",
        duration: "2 hrs",
        features: ["Acrylic or gel extensions", "Shape customization", "2 accent nails included", "Aftercare kit"],
      },
    ],
  },
  {
    id: "lashes",
    title: "Lash Extensions",
    tagline: "Wake up flawless",
    description: "Enhance your natural beauty with our premium lash extensions for a captivating, effortless look.",
    image: "/lashes.jpeg",
    tiers: [
      {
        name: "Natural Set",
        price: "Ksh 2,000",
        duration: "1 hr",
        features: ["40-60 lashes per eye", "Natural wispy look", "Lasts 2-3 weeks", "Aftercare guide"],
      },
      {
        name: "Volume Set",
        price: "Ksh 3,500",
        duration: "1.5 hrs",
        features: ["80-100 lashes per eye", "Full dramatic look", "Lasts 3-4 weeks", "Free lash brush"],
      },
      {
        name: "Mega Volume",
        price: "Ksh 5,000",
        duration: "2 hrs",
        features: ["120+ lashes per eye", "Red carpet glam", "Lasts 4+ weeks", "Touch-up discount"],
      },
    ],
  },
  {
    id: "classes",
    title: "Nail Classes",
    tagline: "Master the craft",
    description: "Master the art of nail design with our comprehensive courses taught by industry professionals.",
    image: "/french_stilleto.jpeg",
    tiers: [
      {
        name: "Beginner Course",
        price: "Ksh 15,000",
        duration: "2 days",
        features: ["Basic techniques", "Tool handling", "Gel application", "Starter kit included"],
      },
      {
        name: "Advanced Art",
        price: "Ksh 25,000",
        duration: "3 days",
        features: ["Complex designs", "3D nail art", "Chrome techniques", "Certificate awarded"],
      },
      {
        name: "Full Certification",
        price: "Ksh 35,000",
        duration: "4 weeks",
        features: ["Complete training", "Business mentorship", "Portfolio building", "Job placement support"],
      },
    ],
  },
  {
    id: "makeup",
    title: "Makeup Artistry",
    tagline: "Your best face forward",
    description: "Complete your look with our professional makeup services for any occasion, from subtle to glamorous.",
    image: "/makeup.jpeg",
    tiers: [
      {
        name: "Day Glam",
        price: "Ksh 2,500",
        duration: "45 mins",
        features: ["Natural enhancement", "Skin prep included", "Setting spray", "Touch-up kit"],
      },
      {
        name: "Evening Glam",
        price: "Ksh 4,000",
        duration: "1 hr",
        features: ["Full glam look", "Lash application", "Contour & highlight", "Long-lasting formula"],
      },
      {
        name: "Bridal Package",
        price: "Ksh 8,000",
        duration: "2 hrs",
        features: ["Trial session included", "Airbrush foundation", "Waterproof formula", "Touch-up service"],
      },
    ],
  },
]

interface ServiceCardProps {
  service: ServiceData
  delay: number
  onSelect: (service: ServiceData) => void
}

function ServiceCard({ service, delay, onSelect }: ServiceCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / rect.width - 0.5
    const yPct = mouseY / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative cursor-pointer"
    >
      {/* Glow effect on hover */}
      <motion.div className="absolute -inset-4 rounded-3xl bg-primary/20 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative h-[320px] overflow-hidden rounded-2xl border border-white/30 shadow-lg transition-all duration-300 group-hover:shadow-2xl">
        {/* Background Image */}
        <Image
          src={service.image || "/placeholder.svg"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-end p-6" style={{ transform: "translateZ(30px)" }}>
          <span className="mb-2 text-sm font-medium text-primary/90">{service.tagline}</span>
          <h3 className="mb-2 font-serif text-2xl font-bold text-white">{service.title}</h3>
          <p className="mb-4 line-clamp-2 text-sm text-white/80">{service.description}</p>

          <motion.div whileHover={{ x: 5 }} className="inline-flex items-center gap-2 font-medium text-primary">
            <span>Learn More</span>
            <span className="transition-transform">→</span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export function ServicesSection() {
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null)

  const handleWhatsApp = (service: ServiceData, tier: ServiceTier) => {
    const message = encodeURIComponent(
      `Hi Dan, I'd like to book the ${tier.name} (${tier.price}) from your ${service.title} service. When are you available?`,
    )
    window.open(`https://wa.me/254700000000?text=${message}`, "_blank")
  }

  return (
    <section id="services" className="relative z-10 py-24 overflow-hidden">
      <SectionAura variant="default" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            Our Services
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            <span className="text-balance">Beauty Services Tailored to </span>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Perfection</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Discover our range of premium beauty services designed to enhance your natural elegance.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} delay={index * 0.1} onSelect={setSelectedService} />
          ))}
        </div>
      </div>

      {/* Full-Screen Service Detail Overlay */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto p-4"
            onClick={() => setSelectedService(null)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/50 backdrop-blur-xl" />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 my-8 w-full max-w-4xl overflow-hidden rounded-3xl bg-white/95 shadow-2xl backdrop-blur-md"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedService(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/10 text-foreground backdrop-blur-sm transition-colors hover:bg-black/20"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Header with Image */}
              <div className="relative h-48 md:h-64">
                <Image
                  src={selectedService.image || "/placeholder.svg"}
                  alt={selectedService.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#FDFBF7] via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="mb-2 inline-block rounded-full bg-primary/20 px-3 py-1 text-xs font-medium text-primary backdrop-blur-sm">
                    {selectedService.tagline}
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-foreground md:text-4xl">{selectedService.title}</h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="mb-8 text-muted-foreground">{selectedService.description}</p>

                {/* Pricing Tiers */}
                <div className="grid gap-4 md:grid-cols-3">
                  {selectedService.tiers.map((tier, index) => (
                    <motion.div
                      key={tier.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="group relative overflow-hidden rounded-2xl border border-white/50 bg-white/60 p-5 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
                    >
                      {/* Popular badge for middle tier */}
                      {index === 1 && (
                        <div className="absolute right-0 top-0 rounded-bl-lg bg-primary px-3 py-1 text-xs font-medium text-white">
                          Popular
                        </div>
                      )}

                      <h4 className="mb-1 font-semibold text-foreground">{tier.name}</h4>
                      <div className="mb-3 flex items-baseline gap-1">
                        <span className="font-serif text-2xl font-bold text-accent">{tier.price}</span>
                      </div>

                      <div className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" />
                        <span>{tier.duration}</span>
                      </div>

                      <ul className="mb-5 space-y-2">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2 text-sm text-muted-foreground">
                            <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() => handleWhatsApp(selectedService, tier)}
                        className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30"
                      >
                        <MessageCircle className="h-4 w-4" />
                        Book Now
                      </button>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
