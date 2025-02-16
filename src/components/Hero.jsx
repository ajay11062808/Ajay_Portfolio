import { styles } from "../styles";
import { motion } from "framer-motion";
import useThemeStore from "./theme"; // Import Zustand store

const Hero = () => {
  const { theme } = useThemeStore(); // Get theme from Zustand

  return (
    <section
      className={`relative top-[-1rem] w-full h-screen bg-cover transition-all bg-white dark:bg-gray-900`}
    >
      <div className={`${styles.paddingX} absolute inset-0 top-[7.5rem] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        
        {/* Left Side - Text Content */}
        <div className="relative -top-10">
          <h1 className={`${styles.heroHeadText} transition-colors duration-300`}>
            Hi, I'm <span className="text-[#ff5733]">Ajay</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 transition-colors duration-300 ${theme === "dark" ? "text-gray-300" : "text-gray-700"}`}>
            Dedicated to Designing and <br className="sm:block hidden" /> 
            Developing Scalable Mobile & Web Apps
          </p>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg text-gray-500 dark:text-gray-400 mt-3"
          >
            Passionate about creating intuitive UI/UX experiences <br />
            and building robust full-stack applications.
          </motion.p>

          <div className="mt-6 flex gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg border-2 border-[#ff5733] text-[#ff5733] font-semibold transition-all hover:bg-[#ff5733] hover:text-white"
            >
              View My Work
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 rounded-lg border-2 border-[#ff5733] text-[#ff5733] font-semibold transition-all hover:bg-[#ff5733] hover:text-white"
            >
              Hire Me
            </motion.a>
          </div>
        </div>
      </div>

      {/* Animated Scroll Down Indicator */}
      <div className="absolute xs:bottom-10 bottom-0 w-full flex justify-center items-center">
        <a href="#about">
          <div className={`rounded-3xl w-[2.2rem] h-[4rem] border-4 flex justify-center items-start p-2 transition-all duration-300 ${
            theme === "dark" ? "border-white" : "border-secondary"
          }`}>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className={`w-3 h-3 rounded-full mb-1 transition-all ${
                theme === "dark" ? "bg-white" : "bg-secondary"
              }`}
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
