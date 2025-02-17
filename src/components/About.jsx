import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { fadeIn, textVariant } from "../utils/motion";
import { services } from "../constants/index";
import { SectionWrapper } from "../hoc";
import useThemeStore from "./theme"; 

const ServiceCard = ({ index, icon, title }) => {
  const { theme } = useThemeStore(); // Get theme from Zustand

  return (
    <Tilt className="xs:w-[15.625rem] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className={`w-full p-[1px] rounded-[1.25rem] shadow-card transition-all duration-300 ${
          theme === "dark" ? "bg-gradient-to-r from-gray-700 to-gray-900" : "green-pink-gradient"
        }`}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className={`rounded-[1.25rem] py-5 px-12 min-h-[17.5rem] flex justify-evenly items-center flex-col transition-colors duration-300 ${
            theme === "dark" ? "bg-gray-800" : "bg-gray-300"
          }`}
        >
          <img src={icon} alt={title} className="w-20 h-20 object-contain" />
          <h3
            className={`text-[1.1rem] font-bold text-center transition-colors duration-300 text-black dark:text-white`}
          >
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  const { theme } = useThemeStore();

  return (
    <>
      <motion.div variants={textVariant()}>
        <p
          className={`transition-colors duration-300 ${
            theme === "dark" ? styles.sectionSubText : styles.darksectionSubText
          }`}
        >
          Intro
        </p>
        <h2
          className={`transition-colors duration-300 ${
            theme === "dark" ? styles.sectionHeadText: styles.darksectionHeadText
          }`}
        >
          Overview.
        </h2>
      </motion.div>

        <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className={`mt-4 text-[1rem] max-w-3xl leading-[1.875rem] transition-colors duration-300 ${
              theme === "dark" ? "text-gray-300" : "text-gray-900"
            }`}
          >
            <ul className="list-disc pl-5">
              <li>
                I am a <strong>Full-Stack Developer, Cloud Engineer, and DevSecOps Specialist</strong> with a passion for building 
                scalable, secure, and high-performance applications.
              </li>
              <li>
                I have expertise in <strong>Cloud Computing, Kubernetes, Docker, CI/CD, DevSecOps, and AI-powered solutions</strong>, 
                thriving at the intersection of development, security, and automation.
              </li>
              <li>
                I specialize in:
                <ul className="list-disc pl-5">
                  <li>Orchestrating microservices with <strong>Kubernetes</strong></li>
                  <li>Implementing <strong>security-focused CI/CD pipelines</strong></li>
                  <li>Integrating <strong>AI solutions using Large Language Models (LLMs)</strong> to enhance automation and decision-making</li>
                </ul>
              </li>
              <li>
                Whether it's <strong>hardening infrastructure, optimizing cloud-native architectures, or leveraging AI for intelligent automation</strong>, I am always at the forefront of innovation.
              </li>
              <li>
                Driven by a relentless curiosity for emerging technologies, I continuously learn and evolve to build 
                <strong>next-generation, AI-powered, cloud-native solutions</strong>.
              </li>
            </ul>
        </motion.p>


      <div className="flex gap-10 flex-wrap mt-20">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
