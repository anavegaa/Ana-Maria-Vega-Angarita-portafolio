import React from "react";
import Avatar from "@/components/atoms/Avatar";
import ContactInfo from "@/components/molecules/ContactInfo";
import ProgressBar from "@/components/atoms/ProgressBar";

const Index = () => {
  const languages = [
    { name: "Español", percentage: 100 },
    { name: "Inglés", percentage: 85 },
  ];

  const programmingLanguages = [
    { name: "JavaScript", percentage: 80 },
    { name: "TypeScript", percentage: 70 },
    { name: "Python", percentage: 80 },
    { name: "React", percentage: 75 },
    { name: "Next.js", percentage: 75 },
  ];

    const technicalSkills = [
    { name: "Git/GitHub", percentage: 90 },
    { name: "Docker", percentage: 65 },
    { name: "MongoDB", percentage: 80 },
    { name: "PostgreSQL", percentage: 85 },
  ];

    const softSkills = [
    { name: "Comunicación", percentage: 95 },
    { name: "Trabajo en equipo", percentage: 85 },
    { name: "Adaptabilidad", percentage: 90 },
    { name: "Gestión del tiempo y organización", percentage: 90 },
  ];

  return (
    <div className="bg-white shadow-lg ">
      <div className="p-6">
        {/* Profile Section */}
        <div className="text-center mb-8">
          <Avatar
            src="/FotoPerfil.jpg"
            alt="Foto de perfil"
            size="xl"
            className="mx-auto mb-4"
          />
          <h1 className="text-xl font-bold text-gray-800 mb-1">Ana María Vega Angarita</h1>
          <p className="text-blue-600 font-medium mb-4">Estudiante Ingeniería de Sistemas</p>
        </div>

        {/* Contact Info */}
        <div className="mb-8">
          <ContactInfo
            phone="(+57) 3014567888"
            email="anamvegaan@gmail.com"
            location="Medellín, Colombia"
          />
        </div>

        {/* Languages */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">Idiomas</h3>
          {languages.map((lang, index) => (
            <ProgressBar
              key={index}
              label={lang.name}
              percentage={lang.percentage}
              color="bg-green-600"
            />
          ))}
        </div>

        {/* Programming Languages */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Lenguajes de Programación
          </h3>
          {programmingLanguages.map((lang, index) => (
            <ProgressBar
              key={index}
              label={lang.name}
              percentage={lang.percentage}
              color="bg-blue-600"
            />
          ))}
        </div>

        {/* Technical Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Habilidades Técnicas
          </h3>
          {technicalSkills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.name}
              percentage={skill.percentage}
              color="bg-purple-600"
            />
          ))}
        </div>
        {/* Soft Skills */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold text-gray-800 mb-4">
            Habilidades blandas
          </h3>
          {softSkills.map((skill, index) => (
            <ProgressBar
              key={index}
              label={skill.name}
              percentage={skill.percentage}
              color="bg-pink-600"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;