"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"
import { SectionAura } from "./section-aura"

const testimonials = [
  {
    name: "Sarah Mwangi",
    sentiment: "Loved the vibe!",
    content:
      "Absolutely obsessed with my nails! The attention to detail is unmatched. I've never felt more confident walking into a room.",
    rating: 5,
    image: "/emma.png",
    date: "Dec 2024",
  },
  {
    name: "Emma Ochieng",
    sentiment: "Life-changing experience",
    content:
      "They made my wedding nails absolutely perfect. The whole bridal party was impressed! Daniella understood exactly what I wanted.",
    rating: 5,
    image: "/daniella.png",
    date: "Nov 2024",
  },
  {
    name: "Jessica Wanjiku",
    sentiment: "My new go-to spot!",
    content:
      "Best nail salon in the city! Clean, professional, and the designs are always on trend. I recommend everyone to try their chrome nails.",
    rating: 5,
    image: "/grace.png",
    date: "Nov 2024",
  },
  {
    name: "Olivia Njeru",
    sentiment: "Career-changing course",
    content:
      "Took their nail art course and it changed my career. The instructors are incredible and so patient. Now I have my own clients!",
    rating: 5,
    image: "/olivia.png",
    date: "Oct 2024",
  },
  {
    name: "Aisha Bakari",
    sentiment: "Worth every shilling",
    content:
      "The lash extensions are phenomenal. I wake up looking fabulous every day. Grace has the most gentle touch and her work lasts forever.",
    rating: 5,
    image: "/aisha.png",
    date: "Oct 2024",
  },
  {
    name: "Michelle Kamau",
    sentiment: "Absolutely stunning!",
    content:
      "Got the 3D Korean nail art for my birthday and received so many compliments. The whole experience was luxurious and relaxing.",
    rating: 5,
    image: "/kenyan-woman-portrait-professional.jpg",
    date: "Sep 2024",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="relative z-10 overflow-hidden py-24">
      <SectionAura variant="gold" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-white/60 px-4 py-2 text-sm font-medium text-primary shadow-sm backdrop-blur-sm">
            Testimonials
          </span>
          <h2 className="mb-4 font-serif text-4xl font-bold text-foreground md:text-5xl">
            Loved by{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Thousands</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Don&apos;t just take our word for it — hear from our amazing clients.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="group relative"
            >
              {/* Inner glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/80 to-white/40 opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-white/50 p-6 shadow-lg backdrop-blur-xl transition-all duration-300 hover:shadow-2xl">
                {/* Inner shadow glow */}
                <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)] pointer-events-none" />

                {/* Top: Stars + Sentiment */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {testimonial.sentiment}
                  </span>
                </div>

                {/* Middle: Review Text */}
                <p className="mb-6 font-serif text-base italic leading-relaxed text-foreground/80">
                  &ldquo;{testimonial.content}&rdquo;
                </p>

                {/* Bottom: Client Photo + Name + Date */}
                <div className="flex items-center gap-3">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full ring-2 ring-white shadow-md">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
