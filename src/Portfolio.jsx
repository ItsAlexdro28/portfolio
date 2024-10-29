import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Sun, Moon, Code, Briefcase, Mail, User, Target, Lightbulb, Layers } from 'lucide-react'
import { GrArchlinux, GrReactjs, GrNode } from 'react-icons/gr'
import './App.css' 


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

  const technologies = [
    { name: 'Arch Linux', logo: <GrArchlinux /> },
    { name: 'React', logo: <GrReactjs /> },
    { name: 'Node.js', logo: <GrNode /> },
    // Add additional technologies here
  ]
  
  const personalProjects = [
    { name: 'Project X', logo: <GrReactjs /> },
    { name: 'Project Y', logo: <GrNode /> },
    // Add additional projects here
  ]

  return (
    <div className="min-h-screen background-color text-white font-sans w-full">
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
        <h1 className="text-2xl font-bold px-3">
          {language === 'en'
            ? "Personal page"
            : "Portafolio personal"}
        </h1>
      </nav>

      <main className="pt-64 px-4 md:px-8 lg:px-16 space-y-80 lg:mx-12">
        <section id="about" className="flex flex-col items-center my-5 md:flex-row">
          <div className="w-1/2 flex flex-col items-center">
            <User className="w-12 h-12 mb-4 text-[#d946ef]" />
          </div>
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-6xl font-bold mb-4 text-nowrap">{content[language].about}</h2>
            <p className="text-center max-w-2xl">
              {language === 'en' 
                ? "I'm a developer Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text ."
                : "Soy un desarrollador Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno."}
            </p>
          </div>
        </section>

        <section id="objective" className="flex flex-col items-center md:flex-row">
          <div className="w-1/2 flex flex-col items-center">
            <h2 className="text-6xl font-bold mb-4 text-nowrap">{content[language].objective}</h2>
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
            <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].mission}</h2>
            <p className="text-center">
              {language === 'en'
                ? "To continuously innovate and push the boundaries of web technology, creating seamless and engaging user experiences."
                : "Innovar continuamente y empujar los límites de la tecnología web, creando experiencias de usuario fluidas y atractivas."}
            </p>
          </div>
          <div className="flex flex-col items-center md:w-1/2">
            <Layers className="w-12 h-12 mb-4 text-[#6366f1]" />
            <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].vision}</h2>
            <p className="text-center">
              {language === 'en'
                ? "To be at the forefront of web development, setting new standards for performance, accessibility, and design."
                : "Estar a la vanguardia del desarrollo web, estableciendo nuevos estándares de rendimiento, accesibilidad y diseño."}
            </p>
          </div>
        </section>

        <section id="services" className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 mb-4 text-[#14b8a6]" />
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].services}</h2>
          <ul className="list-disc list-inside max-w-2xl">
            <li>{language === 'en' ? "Web Application Development" : "Desarrollo de Aplicaciones Web"}</li>
            <li>{language === 'en' ? "UI/UX Design" : "Diseño UI/UX"}</li>
            <li>{language === 'en' ? "API Integration" : "Integración de APIs"}</li>
            <li>{language === 'en' ? "Performance Optimization" : "Optimización de Rendimiento"}</li>
          </ul>
        </section>


	    <section id="technologies" className="flex flex-col items-center space-y-8">
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].technologies}</h2>
      
	  	  <div className='flex flex-col w-5/6 my-12 md:flex-row'>
          <div className="w-full flex flex-col items-center space-y-4 md:mb-0 mb-12">
            <h3 className="text-2xl font-semibold mb-2">Professional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-[#4c1d95] rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{tech.logo}</div>
                  <span className="underline text-sm">{tech.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
      
          <div className="w-full flex flex-col items-center space-y-4">
            <h3 className="text-2xl font-semibold mb-2">Personal Projects</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {personalProjects.map((project, index) => (
                <motion.div
                  key={index}
                  className="p-4 bg-[#1d4c95] rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{project.logo}</div>
                  <span className="underline text-sm">{project.name}</span>
                </motion.div>
              ))}
            </div>
          </div>
          </div>
        </section>

	<section id="projects" className="flex flex-col items-center">
          <Briefcase className="w-12 h-12 mb-4 text-[#f59e0b]" />
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].projects}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {[1, 2, 3].map((project) => (
              <div key={project} className="bg-[#2d2640] p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-semibold mb-2">{language === 'en' ? `Project ${project}` : `Proyecto ${project}`}</h3>
                <p>{language === 'en' ? "Description of the project goes here." : "La descripción del proyecto va aquí."}</p>
              </div>
            ))}
	    <div class="max-w-sm bg-[#2d2640] border border-gray-800 rounded-lg shadow">
    <a href="#">
        <img class="rounded-t-lg" src="/docs/images/blog/image-1.jpg" alt="" />
    </a>
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-white">Noteworthy technology acquisitions 2021</h5>
        </a>
        <p class="mb-3 font-normal text-gray-400">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <a href="#" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Read more
             <svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
    </div>
</div>
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center">
          <Mail className="w-12 h-12 mb-4 text-[#f43f5e]" />
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].contact}</h2>
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
