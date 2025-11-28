"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { JUST_CULTURE_ANIMATION, fadeInUp } from "@/lib/animation-config"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log(formState)
  }

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
            <span className="text-sm tracking-[0.3em] uppercase text-black/40 mb-6 block">Contact</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight uppercase">
              Let&apos;s Start
              <br />
              <span className="text-black/40">Something</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white border-t border-black/10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight uppercase mb-8">Send us a message</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-black/50 mb-2 block">Name</label>
                  <input
                    type="text"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-4 text-lg focus:border-black outline-none transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-black/50 mb-2 block">Email</label>
                  <input
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-4 text-lg focus:border-black outline-none transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-black/50 mb-2 block">Company</label>
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) => setFormState({ ...formState, company: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-4 text-lg focus:border-black outline-none transition-colors"
                    placeholder="Your company (optional)"
                  />
                </div>
                <div>
                  <label className="text-xs tracking-[0.2em] uppercase text-black/50 mb-2 block">Message</label>
                  <textarea
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-transparent border-b border-black/20 py-4 text-lg focus:border-black outline-none transition-colors resize-none"
                    placeholder="Tell us about your project"
                    rows={4}
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-4 text-sm font-medium tracking-[0.15em] uppercase bg-black text-white px-8 py-4 hover:bg-black/80 transition-colors group"
                >
                  Send Message
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: JUST_CULTURE_ANIMATION.duration.slow, ease: JUST_CULTURE_ANIMATION.ease.default }}
              viewport={{ once: true }}
            >
              <div className="space-y-12">
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Email</h3>
                  <a
                    href="mailto:hello@JUST CULTURE.studio"
                    className="text-2xl md:text-3xl font-medium hover:opacity-60 transition-opacity"
                  >
                    hello@JUST CULTURE.studio
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-2xl md:text-3xl font-medium hover:opacity-60 transition-opacity"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Location</h3>
                  <address className="text-xl md:text-2xl font-medium not-italic">
                    123 Creative Street
                    <br />
                    Noida ,Uttar Pradesh 10001
                  </address>
                </div>
                <div>
                  <h3 className="text-xs tracking-[0.3em] uppercase text-black/40 mb-4">Social</h3>
                  <div className="flex flex-wrap gap-6">
                    {["Instagram", "Twitter", "Vimeo", "LinkedIn"].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="text-sm font-medium tracking-wider uppercase hover:opacity-60 transition-opacity"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-[50vh] bg-neutral-200 relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: JUST_CULTURE_ANIMATION.duration.default, ease: JUST_CULTURE_ANIMATION.ease.default }}
            viewport={{ once: true }}
          >
            <p className="text-black/40 text-xs tracking-[0.2em] uppercase mb-4">Visit Our Studio</p>
            <p className="text-4xl md:text-5xl font-bold tracking-tight uppercase">Noida ,Uttar Pradesh</p>
          </motion.div>
        </div>
      </section>
    </main>
  )
}
