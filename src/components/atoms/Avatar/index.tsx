import React from 'react'
import Image from "next/image"

interface AvatarProps {
  src: string
  alt: string
  size?: "sm" | "md" | "lg" | "xl"
  className?: string
}

function Avatar({ src, alt, size = "md", className = "" }: AvatarProps) {
  const sizeClasses = {
    sm: "w-12 h-12",
    md: "w-16 h-16",
    lg: "w-24 h-24",
    xl: "w-32 h-32",
  }

  return (
    <div className={`${sizeClasses[size]} rounded-full overflow-hidden border-4 border-white shadow-lg ${className}`}>
      <Image
        src={src || "/placeholder.svg"}
        alt={alt}
        width={128}
        height={128}
        className="w-full h-full object-cover"
      />
    </div>
  )
}

export default Avatar