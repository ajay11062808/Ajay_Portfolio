"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant, fadeIn } from "../utils/motion"

const TechCard = ({ index, icon, name, description, category }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.15, 0.75)} className="relative">
      {/* Interactive Card */}
      <motion.div
        onClick={() => setIsSelected(!isSelected)}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="w-32 h-32 cursor-pointer relative"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            setIsSelected(!isSelected)
          }
        }}
      >
        {/* Gradient Border */}
        <div className="absolute inset-0 green-pink-gradient rounded-xl blur-sm opacity-75" />
        {/* Card Content */}
        <div className="relative bg-gray-100 dark:bg-tertiary rounded-xl w-full h-full p-4 flex flex-col justify-center items-center gap-2 transition-all duration-300">
          {/* Icon with hover animation */}
          <motion.div
            animate={{
              rotate: isHovered ? 360 : 0,
            }}
            transition={{
              duration: 0.8,
              ease: "easeInOut",
            }}
            className="w-16 h-16 flex justify-center items-center"
          >
            <img src={icon || "/placeholder.svg"} alt="" className="w-3/4 h-3/4 object-contain" />
          </motion.div>

          {/* Technology Name */}
          <p className="text-[14px] text-black dark:text-white text-center font-medium">{name}</p>

          {/* Category Badge
          <span className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-white/10 text-white/80">
            {category}
          </span> */}
        </div>
      </motion.div>

      {/* Tooltip on Hover
      <AnimatePresence>
        {isHovered && !isSelected && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -top-16 left-1/2 -translate-x-1/2 z-10 w-48 p-2 rounded-lg bg-black/90 text-white text-sm text-center"
          >
            Click to learn more
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-8 border-transparent border-t-black/90" />
          </motion.div>
        )}
      </AnimatePresence>

      // {/* Detailed Modal on Click
      // <AnimatePresence>
      //   {isSelected && (
      //     <motion.div
      //       initial={{ opacity: 0, scale: 0.8 }}
      //       animate={{ opacity: 1, scale: 1 }}
      //       exit={{ opacity: 0, scale: 0.8 }}
      //       className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      //       onClick={(e) => {
      //         if (e.target === e.currentTarget) setIsSelected(false)
      //       }}
      //     >
      //       <motion.div className="bg-tertiary p-6 rounded-2xl max-w-md w-full relative" layoutId={`tech-card-${name}`}>
      //         {/* Close Button
      //         <button
      //           onClick={() => setIsSelected(false)}
      //           className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
      //           aria-label="Close details"
      //         >
      //           ×
      //         </button>

      //         <div className="flex items-start gap-4">
      //           <div className="w-16 h-16 shrink-0">
      //             <img src={icon || "/placeholder.svg"} alt="" className="w-full h-full object-contain" />
      //           </div>
      //           <div>
      //             <h3 className="text-xl font-bold">{name}</h3>
      //             <p className="text-white/60 text-sm mt-1">{category}</p>
      //           </div>
      //         </div>

      //         <p className="mt-4 text-sm leading-relaxed text-white/80">{description}</p>

      //         {/* Experience Level Indicator
      //         <div className="mt-6">
      //           <p className="text-sm text-white/60 mb-2">Experience Level</p>
      //           <div className="h-2 bg-white/10 rounded-full overflow-hidden">
      //             <motion.div
      //               initial={{ width: 0 }}
      //               animate={{ width: "85%" }}
      //               transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      //               className="h-full green-pink-gradient"
      //             />
      //           </div>
      //         </div>
      //       </motion.div>
      //     </motion.div>
      //   )}
      // </AnimatePresence> */}
    </motion.div>
  )
}

const Tech = () => {
  const [filter, setFilter] = useState("all")
  const categories = ["all", ...new Set(technologies.map((tech) => tech.category))]

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.darksectionSubText} dark:${styles.sectionSubText}`}>My Technical Expertise</p>
        <h2 className={`${styles.darksectionHeadText} dark:${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      {/* Category Filter */}
      {/* <div className="mt-8 flex flex-wrap gap-2">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all ${
              filter === category ? "bg-white/20 text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
            }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div> */}

      <div className="mt-20 flex flex-row flex-wrap gap-10 justify-center">
        {technologies
          .filter((tech) => filter === "all" || tech.category === filter)
          .map((technology, index) => (
            <TechCard key={technology.name} index={index} {...technology} />
          ))}
      </div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")

