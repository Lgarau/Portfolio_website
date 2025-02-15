import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";

const words = ["Developer.", "Creative Mind.", "Tech Lover.", "Innovation enthusiast."];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="bg-gradient-to-tr from-stone-900 to-gray-800 flex center flex-col items-center justify-center min-h-screen w-full px-6 py-28 md:flex-row md:px-16">
  <div className="absolute inset-0"></div>

  <div className=" flex z-10 flex flex-col items-center text-center md:items-center md:text-center md:w-1/2">
        <motion.h2
          key={index}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5 }}
          className="text-7xl md:text-7xl font-bold text-white"
        >
          {words[index]}</motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-4 max-w-md text-white"
        >
          I'm Laura Garau. I am a passionate full stack developer based in Sardinia, Italy.
          Focused on building responsive web applications with
          modern technologies.
        </motion.p>
      
      <div className="flex gap-8 mt-12 text-2xl text-white">
          <a
            href="https://www.linkedin.com/in/laura-garau-3a2248194/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-400"
          >
            <BsLinkedin />
          </a>
          <a
            href="https://github.com/Lgarau"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-orange-800"
          >
            <BsGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;