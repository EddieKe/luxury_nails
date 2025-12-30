"use client"

import { motion } from "framer-motion"
import { Award, Heart, Users, Clock } from "lucide-react"

export function AboutSection() {
  const bentoItems = [
    {
      icon: <Award className="h-8 w-8 text-amber-500" />,
      title: "Award Winning",
      description: "Recognized excellence in nail artistry",
      className: "md:col-span-1 md:row-span-1",
      color: "from-amber-50 to-amber-100/50",
    },
    {
      icon: <Heart className="h-8 w-8 text-pink-500" />,
      title: "Passion Driven",
      description: "Every nail tells a story. We bring your vision to life with creativity and precision.",
      className: "md:col-span-2 md:row-span-1",
      color: "from-pink-50 to-rose-100/50",
    },
    {
      icon: <Users className="h-8 w-8 text-rose-500" />,
      title: "Expert Team",
      description: "Our certified technicians bring years of experience and continuous training.",
      className: "md:col-span-2 md:row-span-1",
      color: "from-rose-50 to-pink-100/50",
    },
    {
      icon: <Clock className="h-8 w-8 text-amber-500" />,
      title: "Flexible Hours",
      description: "Open 7 days a week",
      className: "md:col-span-1 md:row-span-1",
      color: "from-amber-50 to-yellow-100/50",
    },
  ]

  return (
    <section id="about" className="relative py-24 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <span className="mb-4 inline-block w-fit rounded-full bg-pink-100 px-4 py-2 text-sm font-medium text-pink-600">
              About Us
            </span>
            <h2 className="mb-6 font-serif text-4xl font-bold text-gray-900 md:text-5xl">
              Where Art Meets{" "}
              <span className="bg-gradient-to-r from-pink-500 to-amber-400 bg-clip-text text-transparent">
                Elegance
              </span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Founded with a passion for nail artistry, Luxury Nails has grown into a premier destination for those
              seeking exceptional beauty services. Our studio combines cutting-edge techniques with timeless elegance.
            </p>

            {/* Inner shadow buttons */}
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 shadow-inner transition-all hover:bg-gray-200"
              >
                Our Story
              </motion.button>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="rounded-full bg-gray-100 px-6 py-3 font-medium text-gray-700 shadow-inner transition-all hover:bg-gray-200"
              >
                Meet the Team
              </motion.button>
            </div>
          </motion.div>

          {/* Right - Bento grid */}
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {bentoItems.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group rounded-2xl bg-gradient-to-br ${item.color} p-6 transition-all hover:shadow-lg ${item.className}`}
              >
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-sm">
                  {item.icon}
                </div>
                <h3 className="mb-2 font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Featured image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="/interior_design.png"
              alt="Luxury Nails salon interior"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 to-amber-500/10" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
