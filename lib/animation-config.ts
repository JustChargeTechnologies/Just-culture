export const JUST_CULTURE_ANIMATION = {
  duration: {
    fast: 0.35,
    default: 0.8,
    slow: 1.2,
    verySlow: 1.6,
  },
  ease: {
    default: [0.22, 0.61, 0.36, 1] as const,
    out: [0.16, 1, 0.3, 1] as const,
    in: [0.32, 0, 0.67, 0] as const,
    spring: [0.34, 1.56, 0.64, 1] as const,
  },
  stagger: {
    fast: 0.04,
    default: 0.08,
    slow: 0.12,
  },
  parallax: {
    light: 0.05,
    default: 0.1,
    heavy: 0.2,
  },
  scale: {
    subtle: 1.02,
    default: 1.05,
    prominent: 1.08,
  },
} as const

export const fadeInUp = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.default,
      ease: JUST_CULTURE_ANIMATION.ease.default,
    },
  },
  exit: {
    opacity: 0,
    y: -16,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.in,
    },
  },
}

export const fadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.default,
      ease: JUST_CULTURE_ANIMATION.ease.default,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.in,
    },
  },
}

export const scaleIn = {
  initial: { opacity: 0, scale: 0.95 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.default,
      ease: JUST_CULTURE_ANIMATION.ease.out,
    },
  },
  exit: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.in,
    },
  },
}

export const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: JUST_CULTURE_ANIMATION.stagger.default,
      delayChildren: 0.1,
    },
  },
}

export const pageTransition = {
  initial: { opacity: 0, y: 24, rotateX: -5 },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.default,
      ease: JUST_CULTURE_ANIMATION.ease.default,
    },
  },
  exit: {
    opacity: 0,
    y: -24,
    rotateX: 5,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.in,
    },
  },
}

export const hoverScale = {
  rest: { scale: 1 },
  hover: {
    scale: JUST_CULTURE_ANIMATION.scale.default,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.out,
    },
  },
}

export const hoverLift = {
  rest: { y: 0 },
  hover: {
    y: -4,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.out,
    },
  },
}

export const revealMask = {
  initial: { opacity: 0, clipPath: "inset(0% 0% 100% 0%)" },
  animate: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.slow,
      ease: JUST_CULTURE_ANIMATION.ease.default,
    },
  },
}

export const magneticHover = (strength: number = 10) => ({
  rest: { x: 0, y: 0 },
  hover: (event: { clientX: number; clientY: number }) => ({
    x: (event.clientX - window.innerWidth / 2) / strength,
    y: (event.clientY - window.innerHeight / 2) / strength,
    transition: {
      duration: JUST_CULTURE_ANIMATION.duration.fast,
      ease: JUST_CULTURE_ANIMATION.ease.spring,
    },
  }),
})