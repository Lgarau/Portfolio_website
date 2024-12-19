import { motion, MotionConfig } from "framer-motion"
import image from "../../../../../fotocv.jpg"


const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">

      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity:0}}
        animate={{y: 0, opacity:1}}
        transition={{duration: 0.8, delay:0.2}}
        >
          <img src={image} alt="" className="w-[160px] cursor-pointer rounded-full shadow-xl shadow-indigo-900
          transition-all duration-300 hover:-translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600
          md:w-[230px]"/>
          </motion.div>
          <motion.div 
          initial={{y: 50, opacity:0}}
          animate={{y: 0, opacity:1}}
          transition={{duration: 0.8, delay:0.2}}
          
          
          className="flex max-w-[600px] flex-col items-center justify-center gap-5 text-center">
            <h1 className="bg-gradient-to-r from-blue-500 to-orange-500 bg-clip-text text-transparent 
      text-3xl font-light md:text-5xl">Laura Garau</h1>
            <h3 className="bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent 
      text-1xl md:text-2xl">Web Developer</h3>
            <p className="md:text-base text-pretty text-sm text-gray-400">
              I'm a web developer skilled in React, Node.js and Typescript, focused on building clean scalable applications.
              From front-end design to seamless database integration with Mongodb and Node.js for back-end, I create efficient solutions for dynamic user experiences. 
              Let's build something great!
            </p>
          
        </motion.div>
      </div>
    </div>
  )
}

export default Hero