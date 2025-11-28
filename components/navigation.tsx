"use client"

import { useId, useState } from "react"
import Link from "next/link"

const navLinks = [
  { label: "Project", href: "/work" },
  { label: "About", href: "/about" },
]

const ctaLink = { label: "Let’s Talk", href: "/contact" }

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const handleLinkClick = () => setIsMenuOpen(false)
  const logoCircleId = useId()

  return (
    <nav className="pointer-events-none fixed inset-x-0 top-0 z-50 flex w-full items-center px-6 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white mix-blend-difference sm:px-12">
      <Link
        href="/"
        className="pointer-events-auto group/logo flex-1 text-left text-sm font-extrabold tracking-[0.5em]"
        onClick={handleLinkClick}
      >
        <span className="sr-only">JUST CULTURE</span>
        <div className="inline-flex items-center gap-4">
          <div className="relative inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 text-[0.6rem] uppercase tracking-[0.4em]">
            <span className="absolute inset-2 rounded-full border border-white/10" />
            <svg
              viewBox="0 0 120 120"
              className="h-full w-full text-white transition-transform duration-1800 ease-[.22,.61,.36,1] group-hover/logo:rotate-360"
            >
              <defs>
                <path
                  id={logoCircleId}
                  d="M60 60 m -45 0 a 45 45 0 1 1 90 0 a 45 45 0 1 1 -90 0"
                />
              </defs>
              <text className="text-[10px] tracking-[0.4em] fill-white">
                <textPath href={`#${logoCircleId}`} startOffset="0%">
                  JUST CULTURE • JUST CULTURE •
                </textPath>
              </text>
            </svg>
          </div>
          <span className="hidden sm:inline-block">JUST CULTURE</span>
        </div>
      </Link>

      <div className="pointer-events-auto hidden flex-1 items-center justify-center gap-52 text-[0.75rem] sm:flex">
        {navLinks.map((link) => (
          <Link key={link.label} href={link.href} className="transition-colors hover:text-white/70">
            {link.label}
          </Link>
        ))}
      </div>

      <div className="pointer-events-auto hidden flex-1 justify-end text-[0.75rem] sm:flex">
        <Link href={ctaLink.href} className="transition-colors hover:text-white/70">
          {ctaLink.label}
        </Link>
      </div>

      <button
        type="button"
        className="pointer-events-auto rounded-full  px-4 py-1 text-[0.65rem] tracking-[0.4em] uppercase transition hover:bg-white hover:text-black sm:hidden"
        onClick={() => setIsMenuOpen((prev) => !prev)}
      >
        {isMenuOpen ? "Close" : "Menu"}
      </button>

      {isMenuOpen && (
        <div className="pointer-events-auto sm:hidden absolute top-full left-0 right-0 mt-3 mx-6 rounded-xl border border-white/15 bg-white text-black p-4 text-[0.7rem] tracking-[0.3em] backdrop-blur-md shadow-lg">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="block py-2 text-center uppercase tracking-[0.3em] transition hover:text-black/70"
                onClick={handleLinkClick}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-black/10" />
            <Link
              href={ctaLink.href}
              className="block py-2 text-center uppercase tracking-[0.3em] transition hover:text-black/70"
              onClick={handleLinkClick}
            >
              {ctaLink.label}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
