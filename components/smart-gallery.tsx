"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import { SectionAura } from "./section-aura"

const categories = ["All", "Stiletto", "Almond", "Short/Natural", "Makeup", "Pedicure"]

const galleryItems = [
  {
    id: 1,
    title: "Chrome Hearts",
    category: "Stiletto",
    mainImage: "/stilleto.jpeg",
    subImages: [
      "/pink_stilleto.jpeg",
      "/matte_blue_stilleto.jpeg",
      "/green_tip_stilleto.jpeg",
      "/chocolate_stilleto.jpeg",
    ],
    price: "Ksh 2500",
    description: "Hand-painted chrome details on a soft pink builder gel base.",
  },
  {
    id: 2,
    title: "Rose Quartz",
    category: "Almond",
    mainImage: "/rose_quartz_almond.png",
    subImages: [
      "/almond_nude.jpeg",
      "/almond1.jpeg",
      "/almond2.jpeg",
      "/gold_leaf_almond.png",
    ],
    price: "Ksh 2000",
    description: "Delicate rose quartz effect with subtle shimmer finish.",
  },
  {
    id: 3,
    title: "French Tip Classic",
    category: "Short/Natural",
    mainImage: "/french_stilleto.jpeg",
    subImages: [
      "/nude_stilleto.jpeg",
      "/pink_stilleto.jpeg",
      "/short_stilleto.jpeg",
      "/white_tip_stilleto.jpeg",
    ],
    price: "Ksh 1500",
    description: "Timeless French tip on natural nail length for everyday elegance.",
  },
  {
    id: 4,
    title: "Smoky Glam",
    category: "Makeup",
    mainImage: "/makeup.jpeg",
    subImages: [
      "/young-asian-woman-portrait-smiling.jpg",
      "/professional-woman-smiling-portrait.png",
      "/lashes.jpeg",
      "/makeup.jpeg",
    ],
    price: "Ksh 3500",
    description: "Full glam smoky eye with lash application and contour.",
  },
  {
    id: 5,
    title: "Gold Leaf Luxe",
    category: "Almond",
    mainImage: "/gold_leaf_almond.png",
    subImages: [
      "/almond1.jpeg",
      "/almond2.jpeg",
      "/pearl_essence_almond.png",
      "/chrome_almond.png",
    ],
    price: "Ksh 3000",
    description: "Genuine gold leaf accents on nude stiletto extensions.",
  },
  {
    id: 6,
    title: "Ocean Spa",
    category: "Pedicure",
    mainImage: "/rose_ocean.png",
    subImages: [
      "/rose_garden_almond.png",
      "/butterfly_dreams_almond.png",
      "/pink_stilleto.jpeg",
      "/stilleto.jpeg",
    ],
    price: "Ksh 2200",
    description: "Relaxing spa pedicure with ocean-inspired gel art.",
  },
  {
    id: 7,
    title: "Butterfly Dreams",
    category: "Almond",
    mainImage: "/butterfly_dreams_almond.png",
    subImages: [
      "/rose_garden_almond.png",
      "/almond_nude.jpeg",
      "/almond1.jpeg",
      "/almond2.jpeg",
    ],
    price: "Ksh 2800",
    description: "Delicate hand-painted butterflies on soft pastel base.",
  },
  {
    id: 8,
    title: "Minimal Nude",
    category: "Short/Natural",
    mainImage: "/almond_nude.jpeg",
    subImages: [
      "/nude_coffin.jpeg",
      "/nude_stilleto.jpeg",
      "/almond1.jpeg",
      "/french_stilleto.jpeg",
    ],
    price: "Ksh 1200",
    description: "Clean girl aesthetic with perfectly matched nude gel.",
  },
  {
    id: 9,
    title: "Bridal Glow",
    category: "Almond",
    mainImage: "/bridal_glow_almond.png",
    subImages: [
      "/pearl_essence_almond.png",
      "/rose_quartz_almond.png",
      "/french_stilleto.jpeg",
      "/almond_nude.jpeg",
    ],
    price: "Ksh 5000",
    description: "Luminous bridal makeup with airbrush foundation.",
  },
  {
    id: 10,
    title: "Ombre Sunset",
    category: "Stiletto",
    mainImage: "/ribena_stilleto.jpeg",
    subImages: [
      "/matte_blue_stilleto.jpeg",
      "/green_stilleto.jpeg",
      "/chocolate_stilleto.jpeg",
      "/animal_print_stilleto.jpeg",
    ],
    price: "Ksh 2700",
    description: "Stunning sunset ombre blend from coral to pink.",
  },
  {
    id: 11,
    title: "Pearl Essence",
    category: "Almond",
    mainImage: "/pearl_essence_almond.png",
    subImages: [
      "/bridal_glow_almond.png",
      "/chrome_almond.png",
      "/rose_quartz_almond.png",
      "/almond1.jpeg",
    ],
    price: "Ksh 2300",
    description: "Iridescent pearl finish with micro-pearl accents.",
  },
  {
    id: 12,
    title: "Rose Garden",
    category: "Almond",
    mainImage: "/rose_garden_almond.png",
    subImages: [
      "/rose_ocean.png",
      "/butterfly_dreams_almond.png",
      "/almond2.jpeg",
      "/pink_stilleto.jpeg",
    ],
    price: "Ksh 2400",
    description: "Hand-painted rose details on soft pink gel base.",
  },
]

export function SmartGallery() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [selectedItem, setSelectedItem] = useState<(typeof galleryItems)[0] | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const filteredItems =
    activeCategory === "All" ? galleryItems : galleryItems.filter((item) => item.category === activeCategory)

  const handleWhatsApp = (item: (typeof galleryItems)[0]) => {
    const message = encodeURIComponent(
      `Hi Dan, I want to book this specific ${item.category} design: "${item.title}" (${item.price}). Can we schedule an appointment?`,
    )
    window.open(`https://wa.me/254715702251?text=${message}`, "_blank")
  }

  const nextImage = () => {
    if (selectedItem) {
      setCurrentImageIndex((prev) => (prev + 1) % (selectedItem.subImages.length + 1))
    }
  }

  const prevImage = () => {
    if (selectedItem) {
      setCurrentImageIndex(
        (prev) => (prev - 1 + selectedItem.subImages.length + 1) % (selectedItem.subImages.length + 1),
      )
    }
  }

  const getCurrentImage = () => {
    if (!selectedItem) return ""
    return currentImageIndex === 0 ? selectedItem.mainImage : selectedItem.subImages[currentImageIndex - 1]
  }

  return (
    <section id="gallery" className="relative py-24 md:py-32 overflow-hidden">
      <SectionAura variant="mixed" />

      <div className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="font-serif text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Browse by <span className="text-primary">Style</span>
          </h2>
        </motion.div>

        {/* Filter Bar */}
        <div className="sticky top-20 z-30 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex gap-2 overflow-x-auto rounded-full border border-white/20 bg-white/60 p-2 shadow-lg backdrop-blur-xl scrollbar-hide">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${activeCategory === category
                    ? "bg-primary text-white shadow-md"
                    : "text-muted-foreground hover:bg-white/80 hover:text-foreground"
                    }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Masonry Grid */}
        <motion.div layout className="columns-2 gap-4 md:columns-3 lg:columns-4">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                layoutId={`card-${item.id}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                onClick={() => {
                  setSelectedItem(item)
                  setCurrentImageIndex(0)
                }}
                className="group mb-4 cursor-pointer break-inside-avoid"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/40 shadow-lg backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20">
                  <motion.div layoutId={`image-${item.id}`} className="relative">
                    <Image
                      src={item.mainImage || "/placeholder.svg"}
                      alt={item.title}
                      width={500}
                      height={700}
                      className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/60 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      <motion.h3 layoutId={`title-${item.id}`} className="font-serif text-lg font-medium text-white">
                        {item.title}
                      </motion.h3>
                      <motion.p layoutId={`price-${item.id}`} className="text-sm font-semibold text-accent">
                        {item.price}
                      </motion.p>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Modal/Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedItem(null)}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-xl" />

            <motion.div
              layoutId={`card-${selectedItem.id}`}
              onClick={(e) => e.stopPropagation()}
              className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl md:flex-row"
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-white backdrop-blur-sm transition-colors hover:bg-black/40"
              >
                <X className="h-5 w-5" />
              </button>

              {/* IMAGE CONTAINER FIX: object-contain prevents cropping */}
              <div className="relative flex-shrink-0 bg-neutral-50 md:w-[60%]">
                <motion.div layoutId={`image-${selectedItem.id}`} className="relative h-[40vh] md:h-full">
                  <Image
                    src={getCurrentImage() || "/placeholder.svg"}
                    alt={selectedItem.title}
                    fill
                    priority
                    className="object-contain p-4 md:p-8"
                  />

                  {selectedItem.subImages.length > 0 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:scale-110"
                      >
                        <ChevronLeft className="h-5 w-5 text-foreground" />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 shadow-lg transition-all hover:scale-110"
                      >
                        <ChevronRight className="h-5 w-5 text-foreground" />
                      </button>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Right Panel */}
              <div className="flex flex-1 flex-col justify-between p-6 md:p-8">
                <div>
                  <motion.h3
                    layoutId={`title-${selectedItem.id}`}
                    className="mb-2 font-serif text-2xl font-medium text-foreground md:text-3xl"
                  >
                    {selectedItem.title}
                  </motion.h3>
                  <span className="mb-4 inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    {selectedItem.category}
                  </span>
                  <p className="mb-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {selectedItem.description}
                  </p>
                  <motion.p
                    layoutId={`price-${selectedItem.id}`}
                    className="mb-8 font-serif text-3xl font-semibold text-accent md:text-4xl"
                  >
                    {selectedItem.price}
                  </motion.p>
                </div>

                <button
                  onClick={() => handleWhatsApp(selectedItem)}
                  className="group flex w-full items-center justify-center gap-3 rounded-full bg-primary px-6 py-4 font-medium text-white shadow-lg transition-all hover:bg-primary/90"
                >
                  <MessageCircle className="h-5 w-5 transition-transform group-hover:scale-110" />I Want This Look
                </button>

                {selectedItem.subImages.length > 0 && (
                  <div className="mt-6 border-t border-border/30 pt-6">
                    <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">More Views</p>
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                      <button
                        onClick={() => setCurrentImageIndex(0)}
                        className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${currentImageIndex === 0 ? "border-primary" : "border-transparent opacity-60"
                          }`}
                      >
                        <Image src={selectedItem.mainImage} alt="Main" fill className="object-cover" />
                      </button>
                      {selectedItem.subImages.map((img, idx) => (
                        <button
                          key={idx}
                          onClick={() => setCurrentImageIndex(idx + 1)}
                          className={`relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border-2 transition-all ${currentImageIndex === idx + 1 ? "border-primary" : "border-transparent opacity-60"
                            }`}
                        >
                          <Image src={img} alt="View" fill className="object-cover" />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}