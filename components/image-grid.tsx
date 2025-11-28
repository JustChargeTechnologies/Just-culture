"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"

const gridItems = [
  {
    title: "Commercials",
    description: "Brand films & advertising",
    image: "/placeholder.svg?height=600&width=800",
    size: "large",
  },
  {
    title: "Documentaries",
    description: "Stories that matter",
    image: "/placeholder.svg?height=400&width=600",
    size: "small",
  },
  {
    title: "Music Videos",
    description: "Visual storytelling",
    image: "/placeholder.svg?height=400&width=600",
    size: "small",
  },
  {
    title: "Editorial",
    description: "Fashion & lifestyle",
    image: "/placeholder.svg?height=600&width=800",
    size: "large",
  },
]

export function ImageGrid() {
  return (
    <section className="py-20 md:py-32 bg-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          className="mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          transition={{
            duration: JUST_CULTURE_ANIMATION.duration.slow,
            ease: JUST_CULTURE_ANIMATION.ease.default,
          }}
        >
          <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 block">What We Do</span>
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase">
            Our
            <br />
            <span className="text-black/40">Services</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {gridItems.map((item, index) => (
            <motion.div
              key={item.title}
              className={`relative overflow-hidden group cursor-pointer ${
                item.size === "large" ? "aspect-[4/3]" : "aspect-[3/2]"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: JUST_CULTURE_ANIMATION.duration.default,
                delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                ease: JUST_CULTURE_ANIMATION.ease.default,
              }}
              viewport={{ once: true }}
            >
              <Link href="/work">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500" />
                <div className="absolute inset-0 flex flex-col items-start justify-end p-6 md:p-8">
                  <motion.span
                    className="text-white/60 text-xs tracking-[0.2em] uppercase mb-2"
                    initial={{ y: 10, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: JUST_CULTURE_ANIMATION.duration.default,
                      delay: index * JUST_CULTURE_ANIMATION.stagger.default + 0.1,
                    }}
                    viewport={{ once: true }}
                  >
                    {item.description}
                  </motion.span>
                  <motion.h3
                    className="text-white text-2xl md:text-3xl font-bold tracking-tight uppercase"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{
                      duration: JUST_CULTURE_ANIMATION.duration.default,
                      delay: index * JUST_CULTURE_ANIMATION.stagger.default + 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    {item.title}
                  </motion.h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
