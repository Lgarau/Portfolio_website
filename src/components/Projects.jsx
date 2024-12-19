import { motion } from "framer-motion"
import image1 from "../assets/image1.jpg"
import image2 from "../assets/image2.jpg"
import image3 from "../assets/image3.jpg"
import image4 from "../assets/image4.jpg"

const projectsData = [
  {
    image: image1,
    title: "PhotoPortfolio",
    description: "A personal website for an amateur photographer",
    technologies: ["HTML","CSS","JavaScript"],
  },
  {
    image: image2,
    title: "Register Form",
    description: "A minimal register form with a cyberpunk city background",
    technologies: ["React","TailwindCSS","NodeJs", "Mongodb"],
  },
  {
    image: image3,
    title: "Weather App",
    description: "An elegant and functional weather web app",
    technologies: ["React","Typescript","Tailwind CSS"],
  },
  {
    image: image4,
    title: "Synthesizer",
    description: "A simple synthesizer with customizable vintage sounds",
    technologies: ["HTML","CSS","JavaScript"],
  },


]

const ScrollReveal = ({children}) => {
  return(
    <motion.div
      initial={{opacity: 0, y:100}}
      whileInView={{opacity:1, y:0}}
      viewport={{once:true}}
      transition={{duration: 0.8}}
      >
        {children}
    </motion.div>
  )
}

const ProjectCard = ({project}) => {
  return (
    <ScrollReveal>
    <div className="flex flex-col items-center gap-7 md:flex-row md:gap-24">
      <img src={project.image} alt="" className=" w-full cursor-pointer rounded-2xl transition-all duration-300 
      hover:scale-105 md:w-[300px] "/>

      <div className="flex flex-col gap-5">

        <div className="flex flex-col gap-3">
        <div className="text-xl font-semibold text-white">{project.title}</div>
        <p className="text-gray-400">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-5">
          {
          project.technologies.map((tech, index) => (
            <span key={index} className="rounded-lg bg-black p-3">
              {tech}
            </span>
          ))
          }
          </div>

        
        
      </div>
    </div>
    </ScrollReveal>
  )
}

const Projects = () => {
  return (
    <div id="projects" className="flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-24">
      <ScrollReveal>
      <h1 className="text-4xl font-light text-white md:text-6xl">My Projects</h1>
      </ScrollReveal>
      <div className="flex w-full max-w-[900px] flex-col gap-16 text-white">
      {
        projectsData.map((project, index) => (
          <ProjectCard key={index} project={project}/>
        ))
      }
      </div>

    </div>
  )
}

export default Projects