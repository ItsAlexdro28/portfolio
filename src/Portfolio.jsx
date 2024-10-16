import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Code, Briefcase, Mail, User, Target, Lightbulb, Layers } from 'lucide-react'


const Portfolio = () => {
  const [language, setLanguage] = useState('en')
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  const content = {
    en: {
      about: "About Me",
      objective: "Objective",
      mission: "Mission",
      vision: "Vision",
      services: "Services",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
    },
    es: {
      about: "Sobre Mí",
      objective: "Objetivo",
      mission: "Misión",
      vision: "Visión",
      services: "Servicios",
      technologies: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
    }
  }

  return (
    <div className="min-h-screen bg-[#1e1e2e] text-white font-sans w-screen">
      <nav className="fixed top-0 left-0 right-0 p-4 flex justify-between items-center bg-[#2d2640] z-10">
        <motion.div
          className="flex space-x-2"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <button
            onClick={toggleLanguage}
            className="p-2 bg-[#8b5cf6] rounded-full text-white hover:bg-[#7c3aed] transition-colors w-10"
          >
            {language === 'en' ? 'EN' : 'ES'}
          </button>
        </motion.div>
        <h1 className="text-2xl font-bold">
          {language === 'en'
            ? "Personal page"
            : "Portafolio personal"}
        </h1>
      </nav>

      <main className="pt-20 px-4 md:px-8 lg:px-16 space-y-80 my-40">
        <section id="about" className="flex flex-row items-center my-5">
          <div className="w-1/2 flex flex-col items-center">
            <User className="w-12 h-12 mb-4 text-[#d946ef]" />
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-6xl font-bold mb-4">{content[language].about}</h2>
            <p className="text-center max-w-2xl">
              {language === 'en' 
                ? "I'm a developer Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text ."
                : "Soy un desarrollador Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno."}
            </p>
          </div>
        </section>

        <section id="objective" className="flex flex-row items-center">
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-6xl font-bold mb-4">{content[language].objective}</h2>
            <p className="text-center max-w-2xl">
              {language === 'en'
                ? "To leverage my skills in web development to create impactful digital solutions that solve real-world problems."
                : "Aprovechar mis habilidades en desarrollo web para crear soluciones digitales impactantes que resuelvan problemas del mundo real."}
            </p>
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <Target className="w-12 h-12 mb-4 text-[#8b5cf6]" />
          </div>
        </section>

        <section id="mission-vision" className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:w-1/2">
            <Lightbulb className="w-12 h-12 mb-4 text-[#ec4899]" />
            <h2 className="text-3xl font-bold mb-4">{content[language].mission}</h2>
            <p className="text-center">
              {language === 'en'
                ? "To continuously innovate and push the boundaries of web technology, creating seamless and engaging user experiences."
                : "Innovar continuamente y empujar los límites de la tecnología web, creando experiencias de usuario fluidas y atractivas."}
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/2">
            <Layers className="w-12 h-12 mb-4 text-[#6366f1]" />
            <h2 className="text-3xl font-bold mb-4">{content[language].vision}</h2>
            <p className="text-center">
              {language === 'en'
                ? "To be at the forefront of web development, setting new standards for performance, accessibility, and design."
                : "Estar a la vanguardia del desarrollo web, estableciendo nuevos estándares de rendimiento, accesibilidad y diseño."}
            </p>
          </div>
        </section>

        <section id="services" className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 mb-4 text-[#14b8a6]" />
          <h2 className="text-3xl font-bold mb-4">{content[language].services}</h2>
          <ul className="list-disc list-inside max-w-2xl">
            <li>{language === 'en' ? "Web Application Development" : "Desarrollo de Aplicaciones Web"}</li>
            <li>{language === 'en' ? "UI/UX Design" : "Diseño UI/UX"}</li>
            <li>{language === 'en' ? "API Integration" : "Integración de APIs"}</li>
            <li>{language === 'en' ? "Performance Optimization" : "Optimización de Rendimiento"}</li>
          </ul>
        </section>

        <section id="technologies" className="flex flex-col items-center">
          <Code className="w-12 h-12 mb-4 text-[#22d3ee]" />
          <h2 className="text-3xl font-bold mb-4">{content[language].technologies}</h2>
          <div className="flex flex-wrap justify-center gap-4 max-w-2xl">
            {['React', 'Node.js', 'TypeScript', 'GraphQL', 'Tailwind CSS', 'Next.js'].map((tech, index) => (
              <span key={index} className="px-3 py-1 bg-[#4c1d95] rounded-full text-sm">{tech}</span>
            ))}
          </div>
        </section>

        <section id="projects" className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 mb-4 text-[#f59e0b]" />
          <h2 className="text-3xl font-bold mb-4">{content[language].projects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-[#2d2640] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{language === 'en' ? `Project ${project}` : `Proyecto ${project}`}</h3>
                <p>{language === 'en' ? "Description of the project goes here." : "La descripción del proyecto va aquí."}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center">
          <Mail className="w-12 h-12 mb-4 text-[#f43f5e]" />
          <h2 className="text-3xl font-bold mb-4">{content[language].contact}</h2>
          <form className="w-full max-w-md">
            <input 
              type="email" 
              placeholder={language === 'en' ? "Your email" : "Tu correo electrónico"} 
              className="w-full p-2 mb-4 bg-[#2d2640] rounded"
            />
            <textarea 
              placeholder={language === 'en' ? "Your message" : "Tu mensaje"} 
              className="w-full p-2 mb-4 bg-[#2d2640] rounded h-32"
            ></textarea>
            <button 
              type="submit" 
              className="w-full p-2 bg-[#8b5cf6] rounded text-white hover:bg-[#7c3aed] transition-colors"
            >
              {language === 'en' ? "Send" : "Enviar"}
            </button>
          </form>
        </section>
      </main>

      <footer className="mt-20 py-6 bg-[#2d2640] text-center">
        <p>&copy; 2023 Portfolio. {language === 'en' ? "All rights reserved." : "Todos los derechos reservados."}</p>
      </footer>
    </div>
  )
}

export default Portfolio
