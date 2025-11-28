"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"

const projects = [
  {
    id: "01",
    title: "Of Earth",
    category: "Documentary",
    year: "2024",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "of-earth",
  },
  {
    id: "02",
    title: "After The Quiet",
    category: "Short Film",
    year: "2024",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "after-the-quiet",
  },
  {
    id: "03",
    title: "Midnight Sun",
    category: "Commercial",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "midnight-sun",
  },
  {
    id: "04",
    title: "Stillwater",
    category: "Music Video",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "stillwater",
  },
  {
    id: "05",
    title: "Horizon",
    category: "Brand Film",
    year: "2023",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "horizon",
  },
  {
    id: "06",
    title: "Echoes",
    category: "Documentary",
    year: "2022",
    image: "/placeholder.svg?height=800&width=1200",
    slug: "echoes",
  },
]

export default function WorkPage() {
  return (
    <main>
      {/* Hero */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6 block">Our Work</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
              Selected
              <br />
              <span className="text-black/40">Projects</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: JUST_CULTURE_ANIMATION.duration.default,
                delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                ease: JUST_CULTURE_ANIMATION.ease.default,
                }}
                viewport={{ once: true }}
              >
                <Link href={`/work/${project.slug}`} className="group block">
                  <div className="relative overflow-hidden aspect-4/3 mb-6">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  </div>
                  <div className="flex justify-between items-start">
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-2 group-hover:opacity-60 transition-opacity">
                        {project.title}
                      </h2>
                      <p className="text-black/60 text-sm tracking-wider">{project.category}</p>
                    </div>
                    <span className="text-sm text-black/40">{project.year}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
