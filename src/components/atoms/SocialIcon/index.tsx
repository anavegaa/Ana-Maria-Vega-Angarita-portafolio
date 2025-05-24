import React from 'react'
import type { ReactNode } from 'react'

interface SocialIconProps {
  icon: ReactNode
  href: string
  label: string
  className?: string
}

function SocialIcon({ icon, href, label, className = "" }: SocialIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={`w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-600 hover:text-blue-600 hover:shadow-xl transition-all duration-200 ${className}`}
    >
      {icon}
    </a>
  )
}

export default SocialIcon