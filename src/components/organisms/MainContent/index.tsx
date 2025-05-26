import React, { useState } from "react"
import Button from "@/components/atoms/Button"
import SkillCard from "@/components/molecules/SkillCard"
import EducationCard from "@/components/molecules/EducationCard"
import ProjectCard from "@/components/molecules/ProjectCard"
import Modal from "@/components/molecules/Modal"
import { Code, Database, Globe, Smartphone, Server, Palette } from "lucide-react"

interface Project {
  id: number
  title: string
  description: string
  image: string
  technologies: string[]
  fullDescription: string
  features: string[]
  liveUrl: string
  githubUrl: string
}

const Index = () => {
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const skills = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Desarrollo Frontend",
      description: "Creación de interfaces modernas y responsivas con React, Next.js y TypeScript.",
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Desarrollo Backend",
      description: "APIs robustas y escalables con Node.js, SpringBoot y bases de datos relacionales y NoSQL.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de Datos",
      description: "Diseño y optimización de bases de datos PostgreSQL y MongoDB.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Desarrollo Web",
      description: "Aplicaciones web completas con arquitecturas modernas y mejores prácticas.",
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Desarrollo Mobile",
      description: "Aplicaciones móviles híbridas con React Native y Progressive Web Apps.",
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "UI/UX Design",
      description: "Diseño de experiencias de usuario intuitivas y atractivas con Figma.",
    },
  ]

  const education = [
    {
      institution: "Institución Educativa La Presentación",
      degree: "Bachillerato Académico",
      period: "2006 - 2019",
      description:
        "Estudios de secundaria",
    },
    {
      institution: "Colombo Americano",
      degree: "Inglés Intermedio-Avanzado",
      period: "2024 - 2025",
      description: "Estudios de inglés con énfasis en conversación y escritura técnica.",
    },
    {
      institution: "Udemy",
      degree: "Fundamentos de ReactJS",
      period: "2022-2023",
      description: "Curso de ReactJS con énfasis en hooks y gestión de estado.",
    },
  ]

  const projects = [
    {
      id: 1,
      title: "Formula 1",
      description: "Plataforma de Formula 1 con estadísticas y predicciones de carreras.",
      image: "/formula1.jpg",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
      fullDescription:
        "Plataforma web dedicada a la Fórmula 1, que ofrece estadísticas detalladas de pilotos y equipos, así como predicciones de carreras basadas en datos históricos. Utiliza Next.js para el frontend y PostgreSQL para la gestión de datos.",
      features: [
        "Estadísticas de pilotos y equipos",
        "Predicciones de carreras",
        "Análisis de rendimiento",
        "Interfaz interactiva",
        "Diseño responsivo",
      ],
      liveUrl: "https://formula1-demo.example.com",
      githubUrl: "https://github.com/anavegaa/Formula1.git",
    },
    {
      id: 2,
      title: "Asistente Holográfico",
      description: "Asistente virtual ambiental para gestión de tareas y colaboración en tiempo real.",
      image: "/Sylvie.png",
      technologies: ["JavaSript", "CSS", "TypeScript", "Python"],
      fullDescription:
        "Asistente holográfico que permite la gestión de tareas y colaboración en tiempo real. Utiliza tecnologías de inteligencia artificial para ofrecer recomendaciones y optimizar la productividad.",
      features: [
        "Colaboración en tiempo real",
        "Recomendaciones personalizadas",
        "Interfaz intuitiva",
        "Diseño responsivo",
        "Asistente virtual",
      ],
      liveUrl: "https://asistente-holografico.example.com",
      githubUrl: "https://github.com/anavegaa/Asistente.git",
    },
    {
      id: 3,
      title: "Gasol Find",
      description: "Aplicación movil para encontrar estaciones de servicio y comparar precios.",
      image: "/GasolFind.png",
      technologies: ["Dart", "Flutter", "Android Studio", "Firebase"],
      fullDescription:
        "Aplicación móvil que permite a los usuarios encontrar estaciones de servicio cercanas y comparar precios de combustible en tiempo real. Utiliza Flutter para el desarrollo multiplataforma.",
      features: [
        "Búsqueda de estaciones de servicio",
        "Comparación de precios",
        "Interfaz amigable",        
        "Gráficos interactivos",
        "Ubicación en tiempo real",
        "Múltiples ubicaciones",
      ],
      liveUrl: "https://gasolfind.example.com",
      githubUrl: "https://github.com/anavegaa/gasol.git",
    },
  ]

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-8">
{/* Profile Section */}
<section className="mb-12">
  <div className="bg-white rounded-lg shadow-md p-8 flex items-center justify-between flex-wrap gap-6">
    {/* Texto del perfil */}
    <div className="flex-1 min-w-[250px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Ana María Vega Angarita</h2>
      <p className="text-gray-600 mb-6 leading-relaxed">
        Estudiante de ingeniería de Sistemas en la Universidad de Antioquia, apasionada por escribir código limpio, implementar mejores prácticas y crear experiencias de usuario excepcionales.
      </p>
      <Button onClick={() => setIsProfileModalOpen(true)} variant="outline">
        Conoce más sobre mí
      </Button>
    </div>

    {/* Profile picture */}
    <img
      src="/FotoPerfil.jpg"
      alt="Profile"
      className="w-48 h-48 rounded-full object-cover shadow-lg"
    />
  </div>
</section>


        {/* Skills Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Conocimientos</h2>
          <h3 className="text-center mb-6 text-sm">En esta sección encontrarás las tecnologías y herramientas que domino, 
            las cuales he utilizado en diversos proyectos académicos y personales para desarrollar soluciones eficientes y funcionales.</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <SkillCard key={index} {...skill} />
            ))}
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Educación</h2>
          <h3 className="text-center mb-6 text-sm">En esta sección podrás explorar información detallada sobre los estudios que he
             realizado, incluyendo formaciones académicas, cursos, certificaciones y otras experiencias educativas que han contribuido 
             a mi desarrollo profesional.</h3>
          <div className="space-y-1">
            {education.map((edu, index) => (
              <EducationCard key={index} {...edu} />
            ))}
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-2 text-center">Portafolio</h2>
          <h3 className="text-center mb-6 text-sm">En esta sección encontrarás información detallada sobre los proyectos en los que
             he trabajado, abarcando tanto iniciativas académicas como personales, donde he aplicado distintas tecnologías para 
             resolver problemas reales y adquirir experiencia práctica.</h3>
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-6">
              {projects.map((project) => (
                <ProjectCard
                  key={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  technologies={project.technologies}
                  onViewDetails={() => setSelectedProject(project)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-white rounded-lg shadow-md p-8 text-center">
          <p className="text-gray-600 mb-4">¿Interesado en trabajar juntos? ¡Contáctame!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=anamvegaan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Enviar Correo</Button>
            </a>
            <a
              href="https://wa.me/573014567888"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="outline">Comunicarse por WhatsApp</Button>
            </a>
          </div>
        </footer>
      </div>

      {/* Profile Modal */}
      <Modal
        isOpen={isProfileModalOpen}
        onClose={() => setIsProfileModalOpen(false)}
        title="Perfil Profesional Completo"
      >
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">👨‍💻 Experiencia</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-800">Estudiante de Ingeniería de Sistemas</h4>
                <p className="text-sm text-gray-600 mb-2">Universidad de Antioquia</p>
                <p className="text-sm text-gray-700">
                  Actualmente curso mi carrera universitaria con un enfoque en el desarrollo de software, bases de datos, redes y sistemas inteligentes.
                </p>
              </div>
              <div>
                <h4 className="font-medium text-gray-800">Pasión por la tecnología</h4>
                <p className="text-sm text-gray-700">
                  Desde muy joven me he sentido atraída por la lógica, la computación y el impacto que las soluciones digitales pueden tener en la vida cotidiana.
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">🚀 Proyectos y metas</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Sueño con viajar, conocer culturas y trabajar en proyectos tecnológicos que tengan impacto global.</li>
              <li>Me interesa la inteligencia artificial, la automatización y el desarrollo de soluciones que mejoren procesos y conecten personas.</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">🧭 Valores y visión</h3>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Disciplina y constancia: creo que el progreso viene del esfuerzo diario.</li>
              <li>Curiosidad: siempre estoy buscando aprender algo nuevo.</li>
              <li>Trabajo en equipo: valoro el aprendizaje colaborativo y las experiencias compartidas.</li>
              <li>Responsabilidad: me comprometo con los proyectos que emprendo, desde la idea hasta su ejecución.</li>
            </ul>
          </div>
        </div>
      </Modal>

      {/* Project Modal */}
      <Modal isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} title={selectedProject?.title || ""}>
        {selectedProject && (
          <div className="space-y-6">
            <div className="aspect-video relative rounded-lg overflow-hidden">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Descripción</h3>
              <p className="text-gray-700">{selectedProject.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Características Principales</h3>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                {selectedProject.features?.map((feature: string, index: number) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-3">Tecnologías Utilizadas</h3>
              <div className="flex flex-wrap gap-2">
                {selectedProject.technologies.map((tech: string, index: number) => (
                  <span key={index} className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-4">
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline">Ver Proyecto</Button>
              </a>
            </div>
          </div>
        )}
      </Modal>
    </div>
  )
}

export default Index