"use client"

import React from "react"
import Image from "next/image"

interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  size?: "sm" | "md" | "lg"
  className?: string
}

const Button = ({ children, onClick, size = "md", className = "" }: ButtonProps) => {
  const sizeClasses = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }

  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 text-white font-medium rounded-lg w-full transition-all duration-200 hover:bg-blue-700 ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  )
}

interface ProjectCardProps {
  title: string
  description: string
  image: string
  technologies: string[]
  onViewDetails: () => void
}

const ProjectCard = ({ title, description, image, technologies, onViewDetails }: ProjectCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 min-w-[300px] max-w-[300px]">
      <div className="h-48 relative">
        <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
              {tech}
            </span>
          ))}
        </div>
        <Button onClick={onViewDetails} size="sm">
          Ver Detalles
        </Button>
      </div>
    </div>
  )
}

export default ProjectCard