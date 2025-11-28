"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { RollingText } from "@/components/rolling-text"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"

const team = [
  { name: "Sarah Chen", role: "Founder & Director", image: "/placeholder.svg?height=600&width=500" },
  { name: "Marcus Wright", role: "Cinematographer", image: "/placeholder.svg?height=600&width=500" },
  { name: "Elena Rodriguez", role: "Producer", image: "/placeholder.svg?height=600&width=500" },
  { name: "James Kim", role: "Editor", image: "/placeholder.svg?height=600&width=500" },
]

const values = [
  { title: "Vision", description: "We see beyond the frame, crafting stories that resonate and inspire." },
  { title: "Craft", description: "Every detail matters. We pursue excellence in every shot, every cut." },
  { title: "Collaboration", description: "Great films come from great partnerships. We believe in working together." },
  { title: "Impact", description: "We create work that moves people and drives meaningful change." },
]

export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <main>
      {/* Hero */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: imageScale }}>
          <Image src="/placeholder.svg?height=1080&width=1920" alt="About JUST CULTURE" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/60" />
        </motion.div>
        <motion.div className="relative z-10 h-full flex items-center" style={{ y: textY }}>
          <div className="container mx-auto px-6 md:px-12">
            <motion.span
              className="text-white/60 text-sm tracking-[0.3em] uppercase mb-6 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, delay: 0.2, ease: JUST_CULTURE_ANIMATION.ease.default }}
            >
              About Us
            </motion.span>
            <motion.h1
              className="text-white text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, delay: 0.4, ease: JUST_CULTURE_ANIMATION.ease.default }}
            >
              We are a
              <br />
              creative studio
              <br />
              <span className="text-white/40">focused on impact</span>
            </motion.h1>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeInUp}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
            >
              <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6 block">Our Story</span>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase mb-8">
                Founded in 2010, we&apos;ve spent over a decade crafting visual stories.
              </h2>
              <div className="space-y-6 text-black/70 text-lg leading-relaxed">
                <p>
                  What started as a small production studio has grown into an award-winning creative agency, working
                  with some of the world&apos;s most recognized brands.
                </p>
                <p>
                  Our approach combines cinematic vision with strategic storytelling, ensuring every project delivers
                  both aesthetic excellence and meaningful impact.
                </p>
              </div>
            </motion.div>
            <motion.div
              className="relative aspect-4/5 overflow-hidden"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
              viewport={{ once: true }}
            >
              <Image src="/placeholder.svg?height=800&width=640" alt="Our team" fill className="object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      <RollingText text="Culture • Luxury • Editorial • Art" direction="left" />

      {/* Values */}
      <section className="py-20 md:py-32 bg-neutral-100">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 block">Our Values</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">
              What Drives
              <br />
              <span className="text-black/40">Us</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="p-8 md:p-12 bg-white"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: JUST_CULTURE_ANIMATION.duration.default,
                  delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                  ease: JUST_CULTURE_ANIMATION.ease.default,
                }}
                viewport={{ once: true }}
              >
                <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 block">0{index + 1}</span>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-4">{value.title}</h3>
                <p className="text-black/60 text-lg">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 md:py-32 bg-black text-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { number: "15+", label: "Years of Experience" },
              { number: "200+", label: "Projects Completed" },
              { number: "50+", label: "Global Clients" },
              { number: "12", label: "Awards Won" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                className="text-center"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: JUST_CULTURE_ANIMATION.duration.default,
                  delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                  ease: JUST_CULTURE_ANIMATION.ease.default,
                }}
                viewport={{ once: true }}
              >
                <div className="text-5xl md:text-7xl font-bold mb-4">{stat.number}</div>
                <div className="text-xs tracking-[0.2em] uppercase text-white/50">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 md:py-32 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            className="mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
          >
            <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-4 block">Our Team</span>
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight uppercase">
              Meet The
              <br />
              <span className="text-black/40">People</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: JUST_CULTURE_ANIMATION.duration.default,
                  delay: index * JUST_CULTURE_ANIMATION.stagger.default,
                  ease: JUST_CULTURE_ANIMATION.ease.default,
                }}
                viewport={{ once: true }}
              >
                <div className="relative aspect-4/5 overflow-hidden mb-6">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-xl font-bold tracking-tight uppercase mb-1">{member.name}</h3>
                <p className="text-black/60 text-sm tracking-wider">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
