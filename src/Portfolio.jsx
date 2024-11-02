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
import emailjs from "@emailjs/browser";


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

  const [formData, setFormData] = useState({
    email: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      await emailjs.send(
        "service_l3udgsd",
        "template_cugii1p",
        formData,
        "0zu_ZNIAI7HrUncXM"
      );
      setIsSent(true);
    } catch (error) {
      console.error("Error sending email:", error);
    } finally {
      setIsSending(false);
    }
  };


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
	    <div className="flex flex-row items-center">
          <h1 className="text-2xl font-bold px-3 mr-8">
            {language === 'en'
              ? "Personal page"
              : "Portafolio personal"}
          </h1>
	  	  <img src="/favicon.ico" alt="" className='object-cover h-16 w-16' />
	  	</div>
      </nav>

      <main className="pt-64 px-4 md:px-8 lg:px-16 md:space-y-96 space-y-48 lg:mx-12">
        <section id="about" className="flex flex-col items-center my-5 md:flex-row">
          <div className="w-1/2 flex flex-col items-center">
			<Reveal>
	  		  <img src="/foto.jpeg" alt="" className='object-cover h-80 rounded-lg mb-8' />
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
                ? "I am a developer driven by creating efficient, user-centered solutions that meet business standards. With a talent for problem-solving and quickly adopting new technologies, I bring strengths in collaboration, clear communication, and adaptability, seeking challenges that foster growth and allow me to make a meaningful impact in dynamic team environments."
                : "Soy un desarrollador enfocado en crear soluciones eficientes y centradas en el usuario que cumplan con los estándares empresariales. Con habilidad para resolver problemas y adaptarme rápidamente a nuevas tecnologías, destaco por mi capacidad de colaboración, comunicación clara y adaptabilidad. Busco desafíos que impulsen mi crecimiento y me permitan aportar de manera significativa en entornos de equipo dinámicos."}
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
                ? "To be a well-rounded professional in technology development, capable of implementing and supporting innovative solutions that create a positive and transformative impact across various sectors. My goal is to leverage emerging technologies and leadership skills to optimize processes, foster collaboration, and contribute to sustainable growth that drives efficiency and quality in every solution."
                : "Ser un profesional integral en el desarrollo tecnológico, capaz de implementar y apoyar soluciones innovadoras que generen un impacto positivo y transformador en distintos sectores. Mi objetivo es aprovechar tecnologías emergentes y habilidades de liderazgo para optimizar procesos, fomentar la colaboración y contribuir a un crecimiento sostenible que impulse la eficiencia y calidad en cada solución."}
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
                ? "Develop effective digital solutions that address specific business problems, collaborating seamlessly with teams of any size. I approach each challenge as an opportunity to strengthen analytical skills and time management, strategically prioritizing tasks while maintaining a constant balance between technology and the human element."
                : "Desarrollar soluciones digitales efectivas que aborden problemas empresariales específicos, colaborando de manera fluida con equipos de cualquier tamaño. Aprovecho cada desafío como una oportunidad para fortalecer el análisis y la gestión del tiempo, priorizando de manera estratégica y manteniendo un equilibrio constante entre la tecnología y el factor humano."}
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
                ? "To specialize in full-stack development, leveraging emerging technologies and building my experience through personal projects and collaborations with innovation-focused companies. To strengthen my professional network while acquiring the skills needed to advance my career, inspiring confidence and leadership at every stage of my professional growth."
                : "Especializarme en desarrollo fullstack, aprovechando diversas tecnologías emergentes y consolidando mi experiencia a través de proyectos personales y colaboraciones con empresas orientadas a la innovación. Fortalecer mis conexiones profesionales mientras adquiero las habilidades necesarias para avanzar en mi carrera, inspirando confianza y liderazgo en cada etapa de mi crecimiento profesional."}
            </p>
			</Reveal>
          </div>
        </section>

        <section id="certificates" className="flex flex-col items-center">
		  <Reveal>
          <Briefcase className="w-12 h-12 mb-4 text-[#14b8a6]" />
		  </Reveal>
			<Reveal>
            <h2 className="text-4xl font-bold mb-4 text-nowrap">{content[language].certificates}</h2>
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

		  <form className="w-full max-w-md" onSubmit={sendEmail}>
    	    <Reveal>
    	      <input
    	        type="email"
    	        name="email"
    	        value={formData.email}
    	        onChange={handleInputChange}
    	        placeholder={language === "en" ? "Your email" : "Tu correo electrónico"}
    	        className="w-full p-2 mb-4 bg-[#2d2640] rounded"
    	        required
    	      />
    	    </Reveal>
    	    <Reveal>
    	      <textarea
    	        name="message"
    	        value={formData.message}
    	        onChange={handleInputChange}
    	        placeholder={language === "en" ? "Your message" : "Tu mensaje"}
    	        className="w-full p-2 mb-4 bg-[#2d2640] rounded h-32"
    	        required
    	      ></textarea>
    	    </Reveal>
    	    <Reveal>
    	      <button
    	        type="submit"
    	        className="w-full p-2 bg-[#8b5cf6] rounded text-white hover:bg-[#7c3aed] transition-colors"
    	        disabled={isSending}
    	      >
    	        {isSending
    	          ? language === "en"
    	            ? "Sending..."
    	            : "Enviando..."
    	          : isSent
    	          ? language === "en"
    	            ? "Sent!"
    	            : "¡Enviado!"
    	          : language === "en"
    	          ? "Send"
    	          : "Enviar"}
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
