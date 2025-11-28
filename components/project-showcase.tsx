"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import Link from "next/link"
import { JUST_CULTURE_ANIMATION } from "@/lib/animation-config"

interface Project {
  id: string
  title: string
  category: string
  year: string
  slug: string
  video: string
}

const projects: Project[] = [
  {
    id: "01",
    title: "Of Earth",
    category: "Documentary",
    year: "2024",
    slug: "of-earth",
    video: "https://res.cloudinary.com/vipinyadav01/video/upload/v1764252709/sqm8hevcelaotqdgldtg.mp4",
  },
  {
    id: "02",
    title: "After The Quiet",
    category: "Short Film",
    year: "2024",
    slug: "after-the-quiet",
    video: "https://res.cloudinary.com/vipinyadav01/video/upload/v1764252709/sqm8hevcelaotqdgldtg.mp4",
  },
  {
    id: "03",
    title: "Midnight Sun",
    category: "Commercial",
    year: "2023",
    slug: "midnight-sun",
    video: "https://assets.mixkit.co/videos/download/mixkit-fashion-model-walking-on-the-catwalk-1472.mp4",
  },
  {
    id: "04",
    title: "Stillwater",
    category: "Music Video",
    year: "2023",
    slug: "stillwater",
    video: "https://res.cloudinary.com/vipinyadav01/video/upload/v1764252709/sqm8hevcelaotqdgldtg.mp4",
  },
]

function ProjectItem({ project }: { project: Project }) {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isClient, setIsClient] = useState(false)
  const [videoState, setVideoState] = useState<'loading' | 'ready' | 'error'>('loading')
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })
  
  const isInView = useInView(ref, { amount: 0.5, once: false })
  
  const imageScale = useTransform(scrollYProgress, [0, 0.5, 1], [1.2, 1, 1.1])
  const imageOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.3, 1, 1, 0.3])
  const contentY = useTransform(scrollYProgress, [0, 0.5, 1], [100, 0, -100])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Initialize video on mount
  useEffect(() => {
    if (!isClient) return

    const video = videoRef.current
    if (!video) return

    const handleCanPlay = () => {
      setVideoState('ready')
    }

    const handleError = (e: Event) => {
      console.warn(`Video loading failed for ${project.title}:`, e)
      setVideoState('error')
    }

    const handleLoadedData = () => {
      setVideoState('ready')
    }

    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    // Force load
    video.load()
    
    return () => {
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [isClient, project.title, project.video])

  // Handle video play/pause based on viewport
  useEffect(() => {
    if (!isClient) return

    const video = videoRef.current
    if (!video || videoState !== 'ready') return

    const handlePlayback = async () => {
      try {
        if (isInView) {
          await video.play()
        } else {
          video.pause()
        }
      } catch (error) {
        // Silently handle autoplay restrictions
        if (isInView) {
          video.muted = true
          try {
            await video.play()
          } catch (e) {
            console.warn(`Playback failed for ${project.title}`)
          }
        }
      }
    }

    handlePlayback()
  }, [isClient, isInView, videoState, project.title])

  return (
    <div ref={ref} className="relative h-[150vh]">
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* Background Video */}
        <motion.div
          className="absolute inset-0"
          style={{ scale: imageScale, opacity: imageOpacity }}
        >
          {isClient ? (
            <>
              <video
                ref={videoRef}
                src={project.video}
                preload="auto"
                loop
                muted
                playsInline
                disablePictureInPicture
                webkit-playsinline="true"
                x5-playsinline="true"
                className="w-full h-full object-cover pointer-events-none"
                style={{ display: videoState === 'error' ? 'none' : 'block' }}
              />
              {videoState === 'loading' && (
                <div className="w-full h-full bg-black flex items-center justify-center">
                  <div className="w-12 h-12 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                </div>
              )}
                {videoState === 'error' && (
                  <div className="w-full h-full bg-linear-to-br from-zinc-900 to-black flex items-center justify-center">
                  <div className="text-white/40 text-sm">Video unavailable</div>
                </div>
              )}
            </>
          ) : (
            <div className="w-full h-full bg-black" />
          )}
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>

        {/* Foreground Content */}
        <motion.div
          className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6"
          style={{ y: contentY, opacity: contentOpacity }}
        >
          <motion.span
            className="text-sm tracking-[0.3em] uppercase text-white/60 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            {project.id} / {project.category}
          </motion.span>

          <Link href={`/work/${project.slug}`} className="group" data-cursor="view">
            <h2 className="text-5xl md:text-7xl lg:text-9xl font-bold tracking-tight uppercase mb-6 group-hover:opacity-70 transition-opacity">
              {project.title}
            </h2>
          </Link>

          <span className="text-white/50 text-sm tracking-wider">
            {project.year}
          </span>

        </motion.div>
      </div>
    </div>
  )
}

export function ProjectShowcase() {
  return (
    <section className="bg-black">
      <div className="py-8 md:py-16 bg-white">
        <div className="container mx-auto px-2 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.0,
              ease: [0.25, 0.1, 0.25, 1],
            }}
            viewport={{ once: true }}
          >
            <div className="flex flex-row items-end gap-8">
              <h2 className="text-5xl md:text-7xl font-bold tracking-tight uppercase mb-2">
                Featured&nbsp;
                <span className="text-black/40">Projects</span>
              </h2>
            </div>
          </motion.div>
        </div>

        {projects.map((project) => (
          <ProjectItem key={project.id} project={project} />
        ))}
      </div>
    </section>
  )
}