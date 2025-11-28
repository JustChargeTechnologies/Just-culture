"use client"

import { useRef, use } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"

const projectData: Record<
  string,
  {
    title: string
    category: string
    year: string
    client: string
    director: string
    description: string
    images: string[]
  }
> = {
  "of-earth": {
    title: "Of Earth",
    category: "Documentary",
    year: "2024",
    client: "National Geographic",
    director: "Sarah Chen",
    description:
      "A cinematic exploration of our planet's most remote landscapes, capturing the raw beauty of nature through stunning visuals and intimate storytelling.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
  "after-the-quiet": {
    title: "After The Quiet",
    category: "Short Film",
    year: "2024",
    client: "Sundance Institute",
    director: "Marcus Wright",
    description:
      "An intimate portrait of resilience and hope, following a community rebuilding after silence fell. A meditation on human connection.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
  "midnight-sun": {
    title: "Midnight Sun",
    category: "Commercial",
    year: "2023",
    client: "Volvo",
    director: "Elena Rodriguez",
    description:
      "A visually stunning brand film shot during the Arctic summer, showcasing innovation meeting nature in the land of the midnight sun.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
  stillwater: {
    title: "Stillwater",
    category: "Music Video",
    year: "2023",
    client: "Atlantic Records",
    director: "James Kim",
    description:
      "A dreamlike visual journey accompanying an artist's most personal work yet. Water, light, and emotion intertwine in this evocative piece.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
  horizon: {
    title: "Horizon",
    category: "Brand Film",
    year: "2023",
    client: "Apple",
    director: "Sarah Chen",
    description:
      "A global campaign celebrating human creativity and the tools that empower it. Shot across five continents over six months.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
  echoes: {
    title: "Echoes",
    category: "Documentary",
    year: "2022",
    client: "HBO Documentary Films",
    director: "Marcus Wright",
    description:
      "An unflinching look at generational memory and cultural preservation, following three families across three continents.",
    images: [
      "/placeholder.svg?height=900&width=1600",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=600&width=900",
      "/placeholder.svg?height=900&width=1600",
    ],
  },
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const projectSlugs = Object.keys(projectData)
  const currentIndex = projectSlugs.indexOf(params.slug)
  const safeIndex = currentIndex === -1 ? 0 : currentIndex
  const slug = projectSlugs[safeIndex]
  const project = projectData[slug] || projectData["of-earth"]
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  // Get next project for navigation
  const nextSlug = projectSlugs[(safeIndex + 1) % projectSlugs.length]
  const nextProject = projectData[nextSlug]

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
          <Image src={project.images[0] || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </motion.div>

        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center"
          style={{ opacity }}
        >
          <motion.span
            className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, delay: 0.2, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            {project.category} / {project.year}
          </motion.span>
          <motion.h1
            className="text-white text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight uppercase"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, delay: 0.4, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            {project.title}
          </motion.h1>
        </motion.div>

        <motion.div
          className="absolute bottom-0 left-0 right-0 px-6 md:px-12 py-6 z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, delay: 0.6, ease: JUST_CULTURE_ANIMATION.ease.default }}
        >
          <div className="flex items-end justify-between text-white/70">
            <div className="flex items-center gap-8 md:gap-16">
              <div>
                <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Client</span>
                <span className="text-sm font-medium tracking-wide">{project.client}</span>
              </div>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Director</span>
                <span className="text-sm font-medium tracking-wide">{project.director}</span>
              </div>
            </div>
            <div className="hidden md:block">
              <span className="text-xs tracking-[0.2em] uppercase block mb-1 text-white/40">Scroll</span>
              <motion.div
                className="w-px h-8 bg-white/40 mx-auto"
                animate={{ scaleY: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                style={{ transformOrigin: "top" }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Details */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-4 gap-8 md:gap-12 mb-20 pb-20 border-b border-black/10">
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2 block">Client</span>
              <p className="text-lg font-medium">{project.client}</p>
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2 block">Director</span>
              <p className="text-lg font-medium">{project.director}</p>
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2 block">Year</span>
              <p className="text-lg font-medium">{project.year}</p>
            </div>
            <div>
              <span className="text-xs tracking-[0.3em] uppercase text-black/40 mb-2 block">Category</span>
              <p className="text-lg font-medium">{project.category}</p>
            </div>
          </div>
          <motion.p
            className="text-2xl md:text-4xl leading-relaxed max-w-4xl font-medium"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            {project.description}
          </motion.p>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="py-20 bg-neutral-100">
        <div className="container mx-auto px-6 md:px-12 space-y-6">
          {project.images.slice(1).map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: JUST_CULTURE_ANIMATION.duration.default,
                delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                ease: JUST_CULTURE_ANIMATION.ease.default,
              }}
              viewport={{ once: true }}
            >
              <div className={`relative ${index % 2 === 0 ? "aspect-video" : "aspect-4/3"}`}>
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${project.title} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="py-32 md:py-48 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <motion.span
            className="text-xs tracking-[0.3em] uppercase text-white/40 mb-8 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, ease: JUST_CULTURE_ANIMATION.ease.default }}
            viewport={{ once: true }}
          >
            Next Project
          </motion.span>
          <Link href={`/work/${nextSlug}`} className="group inline-block">
            <motion.h2
              className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase group-hover:opacity-60 transition-opacity"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
              viewport={{ once: true }}
            >
              {nextProject.title}
            </motion.h2>
          </Link>
          <motion.p
            className="text-white/50 text-sm tracking-wider mt-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, delay: 0.2, ease: JUST_CULTURE_ANIMATION.ease.default }}
            viewport={{ once: true }}
          >
            {nextProject.category}
          </motion.p>
        </div>
      </section>
    </main>
  )
}
