import React from 'react'

interface EducationCardProps {
  institution: string
  degree: string
  period: string
  description: string
}

function EducationCard({ institution, degree, period, description }: EducationCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{degree}</h3>
        <span className="text-sm text-blue-600 font-medium">{period}</span>
      </div>
      <h4 className="text-md font-medium text-gray-600 mb-3">{institution}</h4>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

export default EducationCard