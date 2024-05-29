import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaReact } from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

export const InformationHome: React.FC = () => {
  // Información del programador
  const programmerInfo = {
    name: "Torcoroma Aria Ascanio",
    role: "Frontend Developer",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Bootstrap", icon: <FaBootstrap /> },
      { name: "React", icon: <FaReact /> },
    ],
    bio: "Soy un desarrollador frontend apasionado con experiencia en crear interfaces de usuario atractivas y funcionales utilizando las últimas tecnologías y mejores prácticas.",
  };

  return (
    <div className="bg-[#F0F0F0] p-6 rounded-lg shadow-md text-zinc-600">
      <h1 className="text-2xl font-bold mb-2 text-[#E78895]">
        {programmerInfo.role}
      </h1>
      <h2 className="text-xl mb-4 text-[#E78895]">{programmerInfo.name}</h2>
      <p className="mb-4">{programmerInfo.bio}</p>
      <h3 className="text-lg font-semibold mb-2">Skills:</h3>
      <ul className="list-disc list-inside">
        {programmerInfo.skills.map((skill, index) => (
          <li key={index} className="flex items-center">
            <span className="mr-2">{skill.icon}</span>
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
};
