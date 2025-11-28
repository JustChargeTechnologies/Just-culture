"use client"

import React from "react"

export default function ClientVideo({ src, ...props }: { src: string } & React.VideoHTMLAttributes<HTMLVideoElement>) {
  return (
    <video src={src} {...props} />
  )
}
