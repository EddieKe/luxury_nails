"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Award, Users, Briefcase, ChevronDown, Calendar, MessageCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const syllabus = [
  {
    week: "Week 1",
    title: "Nail Anatomy & Sanitation",
    description: "Learn the fundamentals of nail structure, proper sanitation protocols, and essential tools setup.",
  },
  {
    week: "Week 2",
    title: "Acrylic Application & Shaping (The Dan Method)",
    description: "Master our signature acrylic technique with perfect application and various nail shapes.",
  },
  {
    week: "Week 3",
    title: "Advanced Nail Art & 3D Designs",
    description: "Create stunning nail art, chrome effects, ombre gradients, and intricate 3D embellishments.",
  },
  {
    week: "Week 4",
    title: "Business of Beauty & Branding",
    description: "Build your brand, price your services, attract clients, and launch your nail business.",
  },
]

const socialProof = [
  {
    icon: Award,
    title: "Certified Excellence",
    description: "Receive an accredited certificate upon completion",
  },
  {
    icon: Users,
    title: "Hands-on Training",
    description: "Practice on live models with expert guidance",
  },
  {
    icon: Briefcase,
    title: "Career Ready",
    description: "80% of our students start their own business within 3 months",
  },
]

function AccordionItem({
  week,
  title,
  description,
  isOpen,
  onClick,
}: {
  week: string
  title: string
  description: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="overflow-hidden rounded-2xl border border-white/50 bg-white/60 backdrop-blur-sm"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between p-5 text-left transition-colors hover:bg-white/40"
      >
        <div className="flex items-center gap-4">
          <span className="rounded-full bg-gradient-to-r from-pink-500 to-rose-400 px-3 py-1 text-xs font-bold text-white">
            {week}
          </span>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
        <ChevronDown
          className={cn("h-5 w-5 text-gray-500 transition-transform duration-300", isOpen && "rotate-180")}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="px-5 pb-5 text-gray-600">{description}</p>
      </motion.div>
    </motion.div>
  )
}

export function AcademySection() {
  const [openIndex, setOpenIndex] = useState(0)

  const handleWhatsAppRegister = () => {
    const message = encodeURIComponent(
      "Hi Dan, I'm interested in registering for the Nail Tech Masterclass. Please share details about the next intake and how to book my slot.",
    )
    window.open(`https://wa.me/254700000000?text=${message}`, "_blank")
  }

  return (
    <section id="academy" className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-gradient-to-r from-amber-500 to-amber-400 px-4 py-2 text-sm font-bold text-white shadow-lg">
            The Academy
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
            The Nail Tech{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
              Masterclass
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            From Beginner to Pro in <span className="font-semibold text-pink-600">4 Weeks</span>
          </p>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="mb-20 grid gap-8 lg:grid-cols-2">
          {/* Left Column - Price Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Floating Schedule Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -right-4 -top-4 z-10 flex items-center gap-2 rounded-full border border-amber-200 bg-white px-4 py-2 shadow-lg"
            >
              <Calendar className="h-4 w-4 text-amber-500" />
              <span className="text-sm font-medium text-gray-700">
                Next Class: <span className="font-bold text-pink-600">Dec 10th</span>
              </span>
              <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs font-bold text-red-600">3 Slots Left</span>
            </motion.div>

            {/* Glassmorphic Price Card */}
            <div className="relative overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-8 shadow-xl backdrop-blur-xl">
              {/* Gradient accent */}
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br from-pink-400/30 to-amber-300/30 blur-2xl" />

              <div className="relative">
                <h3 className="mb-6 text-lg font-semibold text-gray-700">Course Investment</h3>

                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-5xl font-bold text-gray-900">KES 35,000</span>
                  </div>
                  <p className="mt-2 text-gray-500">Complete training package</p>
                </div>

                {/* Deposit */}
                <div className="mb-6 rounded-2xl bg-gradient-to-r from-pink-50 to-amber-50 p-4">
                  <p className="text-sm text-gray-600">
                    Book your slot with just <span className="text-xl font-bold text-pink-600">KES 5,000</span> deposit
                  </p>
                </div>

                {/* Includes */}
                <div className="mb-8">
                  <h4 className="mb-4 font-semibold text-gray-800">What's Included:</h4>
                  <ul className="space-y-3">
                    {["Full Starter Kit", "Accredited Certificate", "1-on-1 Mentorship", "Live Model Practice"].map(
                      (item) => (
                        <li key={item} className="flex items-center gap-3">
                          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-rose-400">
                            <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={handleWhatsAppRegister}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-pink-500 to-rose-400 py-4 font-semibold text-white shadow-lg shadow-pink-500/30 transition-all hover:shadow-xl hover:shadow-pink-500/40"
                >
                  <MessageCircle className="h-5 w-5" />
                  Register for Next Intake
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Syllabus Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="mb-2 text-lg font-semibold text-gray-700">Course Curriculum</h3>
            {syllabus.map((item, index) => (
              <AccordionItem
                key={item.week}
                week={item.week}
                title={item.title}
                description={item.description}
                isOpen={openIndex === index}
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
              />
            ))}
          </motion.div>
        </div>

        {/* Social Proof Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h3 className="mb-8 text-2xl font-bold text-gray-900">Why Train With Luxury Nails?</h3>
          <div className="grid gap-6 md:grid-cols-3">
            {socialProof.map((proof, index) => (
              <motion.div
                key={proof.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-white/60 bg-white/70 p-8 shadow-lg backdrop-blur-sm transition-all hover:shadow-xl"
              >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-100 to-amber-100 transition-transform group-hover:scale-110">
                  <proof.icon className="h-8 w-8 text-pink-500" />
                </div>
                <h4 className="mb-2 text-lg font-bold text-gray-900">{proof.title}</h4>
                <p className="text-gray-600">{proof.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
