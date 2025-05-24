import React from 'react'
import { Phone, Mail, MapPin } from "lucide-react"

interface ContactInfoProps {
  phone: string
  email: string
  location: string
}

function ContactInfo({ phone, email, location }: ContactInfoProps) {
  return (
    <div className="space-y-3">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Contacto</h3>

      <div className="flex items-center space-x-3">
        <Phone className="w-4 h-4 text-blue-600" />
        <span className="text-sm text-gray-600">{phone}</span>
      </div>

      <div className="flex items-center space-x-3">
        <Mail className="w-4 h-4 text-blue-600" />
        <span className="text-sm text-gray-600">{email}</span>
      </div>

      <div className="flex items-center space-x-3">
        <MapPin className="w-4 h-4 text-blue-600" />
        <span className="text-sm text-gray-600">{location}</span>
      </div>
    </div>
  )
}

export default ContactInfo