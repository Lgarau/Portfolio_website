import { BiLogoJavascript, BiLogoMongodb, BiLogoNodejs, BiLogoReact } from "react-icons/bi";
import { motion } from "framer-motion";

const Tech = () => {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div id="tech" className="flex flex-col items-center justify-center w-full min-h-screen bg-gradient-to-br from-stone-900 to-gray-800 py-16">
      <motion.h1
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="text-6xl font-semibold text-white py-16"
      >
        Technologies
      </motion.h1>

      <motion.div
        variants={variants}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 0.5 }}
        className="flex flex-wrap items-center justify-center gap-20 mt-9"
      >
        {[
          { icon: <BiLogoJavascript />, color: "text-yellow-500" },
          { icon: <BiLogoReact />, color: "text-sky-500" },
          { icon: <BiLogoNodejs />, color: "text-green-500" },
          { icon: <BiLogoMongodb />, color: "text-green-500" },
        ].map(({ icon, color }, idx) => (
          <motion.div
            key={idx}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 0.5 }}
            className="transition-transform duration-300 hover:scale-110"
          >
            <div className={`cursor-pointer text-7xl ${color} transition-all duration-300 hover:scale-110`}>
              {icon}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Tech;