import React, { useState, useEffect, useRef } from 'react'
import { motion, useInView, useAnimation } from 'framer-motion'
import { Sun, Moon, Code, Briefcase, Mail, User, Target, Lightbulb, Layers } from 'lucide-react'
import { GrArchlinux, GrReactjs, GrNode, GrMysql } from 'react-icons/gr'
import './App.css' 
import { Reveal } from "./Reveal"
import { RiNextjsFill } from 'react-icons/ri'
import { FaGit, FaGitAlt, FaGithub, FaJava, FaUnity } from 'react-icons/fa'
import { SiNeovim, SiPandas, SiPostgresql } from 'react-icons/si'
import { BiLogoSpringBoot } from 'react-icons/bi'
import { FaPython } from 'react-icons/fa6'
import pepita from '/pepita.png'
import app from '/app.png'
import service from '/service.png'
import physics from '/101.png'
import CV from '/CV.pdf'
import andes3d from '/andes3d.png'
import andesagile from '/andesagile.png'
import andesdesing from '/andesdesing.png'
import andesintro from '/andesintro.png'
import samsung1 from '/samsung1.png'
import samsung2 from '/samsung2.png'
import CertificatesGrid from './certificates'


const Portfolio = () => {
  const [language, setLanguage] = useState('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'es' : 'en')
  }

  const content = {
    en: {
      about: "About Me",
      objective: "Objective",
      mission: "Mission",
      vision: "Vision",
      certificates: "Certificates",
      technologies: "Technologies",
      projects: "Projects",
      contact: "Contact",
	  personal: "Personal Proyects",
	  professional: "Professional Use",
    },
    es: {
      about: "Sobre Mí",
      objective: "Objetivo",
      mission: "Misión",
      vision: "Visión",
      certificates: "Certificados",
      technologies: "Tecnologías",
      projects: "Proyectos",
      contact: "Contacto",
	  personal: "Proyectos Personales",
	  professional: "Uso Profesional",
    }
  }

  const technologies = [
    { name: 'Python', logo: <FaPython />},
    { name: 'Git', logo: <FaGitAlt />},
    { name: 'GitHub', logo: <FaGithub />},
    { name: 'React', logo: <GrReactjs />},
    { name: 'Node.js', logo: <GrNode />},
    { name: 'Java', logo: <FaJava />},
    { name: 'Spring Boot', logo: <BiLogoSpringBoot />},
    { name: 'MySql', logo: <GrMysql />},
    { name: 'PostgreSQL', logo: <SiPostgresql /> },
  ]
  
  const personalProjects = [
    { name: 'Linux', logo: <GrArchlinux /> },
    { name: 'Unity', logo: <FaUnity /> },
    { name: 'Nextjs', logo: <RiNextjsFill /> },
    { name: 'Pandas', logo: <SiPandas /> },
    { name: 'Neovim', logo: <SiNeovim /> },
  ]

  const projects = {
	en: [
	  { title: "Pepita Confections", description: "A web application using lit that manages the production and calculation of materials and products", image: pepita, link: "https://confecciones-pepita.netlify.app/" },
	  { title: "How much you app cost?", description: "A web recreation of a page with the same name that lets you calculate the price of your own app with certain parameters", image: app, link: "https://cuanto-cuesta-mi-app.netlify.app/" },
	  { title: "Companie Managment System", description: "A fullstack app with different roles that lets users and providers to manage different services", image: service, link: "https://github.com/JuanRojasAguilar/companies-management-system" },
	  { title: "Physics 101", description: "A videogame demo that aims to teach children how gravity and forces work while enjoing the process", image: physics, link: "https://github.com/ItsAlexdro28/Physics-101" },
	],
	es: [
	  { title: "Confecciones Pepita ", description: "Una aplicación web utilizando lit que gestiona la producción y el cálculo de materiales y productos", image: pepita, link: "https://confecciones-pepita.netlify.app/" },
	  { title: "Cuanto cuesta mi app?", description: "Una recreación web de una página con el mismo nombre que te permite calcular el precio de tu propia aplicación con ciertos parámetros.", image: app, link: "https://cuanto-cuesta-mi-app.netlify.app/" },
	  { title: "Companie Managment System", description: "Una aplicación fullstack con diferentes roles que permite a usuarios y proveedores gestionar distintos servicios.", image: service, link: "https://github.com/JuanRojasAguilar/companies-management-system" },
	  { title: "Physics 101", description: "Una demo de videojuego que busca enseñar a los niños cómo funcionan la gravedad y las fuerzas mientras disfrutan del proceso.", image: physics, link: "https://github.com/ItsAlexdro28/Physics-101" },
	]
  }

  const certificates = [
	samsung1, samsung2, andesintro, andesdesing, andesagile, andes3d
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

      <main className="pt-64 px-4 md:px-8 lg:px-16 md:space-y-96 space-y-48 lg:mx-12">
        <section id="about" className="flex flex-col items-center my-5 md:flex-row">
          <div className="w-1/2 flex flex-col items-center">
			<Reveal>
			  <User className="w-12 h-12 mb-4 text-[#d946ef]" />
			</Reveal>
			<Reveal>
			<a href={CV} target='_blank'>
			  <button className='bg-[#8b5cf6] rounded-full text-white'>
                {language === 'en' 
                  ? "Download CV"
                  : "Descargar Hoja de vida"}
	  		  </button>
			</a>
			</Reveal>
          </div>
          <div className="w-1/2 flex flex-col items-center">
			<Reveal>
            <h2 className="text-6xl font-bold mb-4 text-nowrap">{content[language].about}</h2>
			</Reveal>
			<Reveal>
            <p className="text-center max-w-2xl text-xl">
              {language === 'en' 
                ? "I'm a developer Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text Placeholder text ."
                : "Soy un desarrollador Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno Texto de relleno."}
            </p>
			</Reveal>
          </div>
        </section>

        <section id="objective" className="flex flex-col items-center md:flex-row">
          <div className="w-1/2 flex flex-col items-center">
			<Reveal>
            <h2 className="text-5xl font-bold mb-4 text-nowrap">{content[language].objective}</h2>
			</Reveal>
			<Reveal>
            <p className="text-center max-w-2xl text-xl">
              {language === 'en'
                ? "To leverage my skills in web development to create impactful digital solutions that solve real-world problems."
                : "Aprovechar mis habilidades en desarrollo web para crear soluciones digitales impactantes que resuelvan problemas del mundo real."}
            </p>
			</Reveal>
          </div>
          <div className="w-1/2 flex flex-col items-center">
			<Reveal>
            <Target className="w-12 h-12 mb-4 text-[#8b5cf6]" />
			</Reveal>
          </div>
        </section>

        <section id="mission-vision" className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col items-center md:w-1/2">
			<Reveal>
            <Lightbulb className="w-12 h-12 mb-4 text-[#ec4899]" />
			</Reveal>
			<Reveal>
            <h2 className="text-4xl font-bold mb-4 text-nowrap">{content[language].mission}</h2>
			</Reveal>
			<Reveal>
            <p className="text-center text-xl">
              {language === 'en'
                ? "To continuously innovate and push the boundaries of web technology, creating seamless and engaging user experiences."
                : "Innovar continuamente y empujar los límites de la tecnología web, creando experiencias de usuario fluidas y atractivas."}
            </p>
			</Reveal>
          </div>
          <div className="flex flex-col items-center md:w-1/2">
			<Reveal>
            <Layers className="w-12 h-12 mb-4 text-[#6366f1]" />
			</Reveal>
			<Reveal>
            <h2 className="text-4xl font-bold mb-4 text-nowrap">{content[language].vision}</h2>
			</Reveal>
			<Reveal>
            <p className="text-center text-xl">
              {language === 'en'
                ? "To be at the forefront of web development, setting new standards for performance, accessibility, and design."
                : "Estar a la vanguardia del desarrollo web, estableciendo nuevos estándares de rendimiento, accesibilidad y diseño."}
            </p>
			</Reveal>
          </div>
        </section>

        <section id="certificates" className="flex flex-col items-center">
		  <Reveal>
          <Briefcase className="w-12 h-12 mb-4 text-[#14b8a6]" />
		  </Reveal>
		  <CertificatesGrid certificates={certificates} />
        </section>


	    <section id="technologies" className="flex flex-col items-center space-y-8">
		  <Reveal>
          <h2 className="text-4xl font-bold mb-4 text-nowrap">{content[language].technologies}</h2>
		  </Reveal>
      
	  	  <div className='flex flex-col w-5/6 my-12 md:flex-row'>
          <div className="w-full flex flex-col items-center space-y-4 md:mb-0 mb-12">
		  <Reveal>
            <h3 className="text-2xl mb-2">{content[language].professional}</h3>
		  </Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
		  <Reveal>
                <motion.div
                  key={index}
                  className="p-4 bg-[#4c1d95] rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{tech.logo}</div>
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
		  </Reveal>
              ))}
            </div>
          </div>
      
          <div className="w-full flex flex-col items-center space-y-4">
		  <Reveal>
            <h3 className="text-2xl mb-2">{content[language].personal}</h3>
		  </Reveal>
            <div className="flex flex-wrap justify-center gap-4">
              {personalProjects.map((tech, index) => (
		  <Reveal>
                <motion.div
                  key={index}
                  className="p-4 bg-[#1d4c95] rounded-lg flex flex-col items-center transition-transform transform hover:scale-105"
                >
                  <div className="text-4xl mb-2">{tech.logo}</div>
                  <span className="text-sm">{tech.name}</span>
                </motion.div>
		  </Reveal>
              ))}
            </div>
          </div>
          </div>
        </section>

		<section id="projects" className="flex flex-col items-center">
		  <Reveal>
          <Briefcase className="w-12 h-12 mb-4 text-[#f59e0b]" />
		  </Reveal>
		  <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].projects}</h2>
		  </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl">
            {projects[language].map((project) => (
		  <Reveal>
			<div class="max-w-sm bg-[#2d2640] border border-gray-800 rounded-lg shadow">
		  	  <a href={project.link}>
		  		<img class="rounded-t-lg" src={project.image} alt="" />
		  	  </a>
			 <div class="p-5">
		  	  <a href={project.link}>
		  		<h5 class="mb-2 text-2xl font-bold tracking-tight text-white">{project.title}</h5>
		  	  </a>
		  	  <p class="mb-3 font-normal text-gray-200">{project.description}</p>
		  	  <a href={project.link} class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300">
				Link
		  		<svg class="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
		  		  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
		  		</svg>
		  	  </a>
			 </div>
			</div>
		  </Reveal>
            ))}
          </div>
        </section>

        <section id="contact" className="flex flex-col items-center">
		  <Reveal>
          <Mail className="w-12 h-12 mb-4 text-[#f43f5e]" />
		  </Reveal>
		  <Reveal>
          <h2 className="text-3xl font-bold mb-4 text-nowrap">{content[language].contact}</h2>
		  </Reveal>
          <form className="w-full max-w-md">
		  <Reveal>
            <input 
              type="email" 
              placeholder={language === 'en' ? "Your email" : "Tu correo electrónico"} 
              className="w-full p-2 mb-4 bg-[#2d2640] rounded"
            />
		  </Reveal>
		  <Reveal>
            <textarea 
              placeholder={language === 'en' ? "Your message" : "Tu mensaje"} 
              className="w-full p-2 mb-4 bg-[#2d2640] rounded h-32"
            ></textarea>
		  </Reveal>
		  <Reveal>
            <button 
              type="submit" 
              className="w-full p-2 bg-[#8b5cf6] rounded text-white hover:bg-[#7c3aed] transition-colors"
            >
              {language === 'en' ? "Send" : "Enviar"}
            </button>
		  </Reveal>
          </form>
        </section>
      </main>

      <footer className="mt-20 py-6 bg-[#2d2640] text-center">
        <p>&copy; 2024 Portfolio. {language === 'en' ? "All rights reserved | oneko.js by adryd325." : "Todos los derechos reservados | oneko.js por adryd325."}</p>
      </footer>
    </div>
  )
}

export default Portfolio
