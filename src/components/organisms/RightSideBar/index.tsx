import React from "react"
import SocialIcon from "@/components/atoms/SocialIcon"
import { FileText } from "lucide-react"
import { LinkedInIcon, GitHubIcon  } from "@/components/atoms/Icons"  

const Index = () => {
  const socialLinks = [
    {
      icon: <GitHubIcon className="w-5 h-5" />,
      href: "https://github.com/anavegaa",
      label: "GitHub",
    },
    {
      icon: <LinkedInIcon className="w-5 h-5" />,
      href: "https://www.linkedin.com/in/ana-mar%C3%ADa-vega-angarita-6660a32a4/",
      label: "LinkedIn",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      href: "/Hojadevida.pdf",
      label: "Descargar CV",
    },
  ]

  return (
    <div className="flex xl:flex-col flex-row xl:justify-center xl:items-center xl:h-full xl:space-y-4 space-x-4 xl:space-x-0 xl:p-4 p-0">
      {socialLinks.map((link, index) => (
        <SocialIcon key={index} {...link} />
      ))}
    </div>
  )
}

export default Index