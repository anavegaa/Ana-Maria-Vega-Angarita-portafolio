"use client"

import React from "react"
import type { ReactNode } from "react"

interface SkillCardProps {
  icon: ReactNode
  title: string
  description: string
}

const SkillCard = ({ icon, title, description }: SkillCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 max-w-xs w-full">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mr-4">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default SkillCard