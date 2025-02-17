"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { technologies } from "../constants"
import { textVariant, fadeIn } from "../utils/motion"


const TechCard = ({ index, icon, name, description, category }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isSelected, setIsSelected] = useState(false)

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative"
    >
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
            <img src={icon || "/close.svg"} alt={name} className="w-3/4 h-3/4 object-contain" />
          </motion.div>

          {/* Technology Name */}
          <p className="text-[14px] text-black dark:text-white text-center font-medium">{name}</p>

          {/* Category Badge */}
          <span className="absolute top-2 right-2 text-[10px] px-2 py-1 rounded-full bg-black/10 dark:bg-white/10 text-black dark:text-white/80">
            {category}
          </span>
        </div>
      </motion.div>
    </motion.div>
  )
}

const Tech = () => {
  const [filter, setFilter] = useState("all")
  const [filteredTechnologies, setFilteredTechnologies] = useState(technologies)

  // Extract unique categories
  const categories = ["all", ...new Set(technologies.map((tech) => tech.category || "Uncategorized"))]
 
  useEffect(() => {
    if (filter === "all") {
      setFilteredTechnologies(technologies)
    } else {
      const filtered = technologies.filter((tech) => tech.category === filter)
      setFilteredTechnologies(filtered)
    }
  }, [filter])

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.darksectionSubText} dark:${styles.sectionSubText}`}>My Technical Expertise</p>
        <h2 className={`${styles.darksectionHeadText} dark:${styles.sectionHeadText}`}>Technologies.</h2>
      </motion.div>

      {/* Category Filter */}
      <div className="mt-8 flex flex-wrap gap-5">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-full text-sm transition-all 
              ${
                filter === category
                  ? "bg-blue-500 text-white dark:bg-white/20 dark:text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-white/5 dark:text-white/60 dark:hover:bg-white/10"
              }`}
          >
            {category.charAt(0).toUpperCase() + category.slice(1)}
          </button>
        ))}
      </div>

      {/* Technology Cards */}
      <motion.div 
        className="mt-20 flex flex-row flex-wrap gap-10 justify-center"
        layout
      >
        <AnimatePresence>
          {filteredTechnologies.length > 0 ? (
            filteredTechnologies.map((technology, index) => (
              <TechCard key={`${technology.name}-${filter}`} index={index} {...technology} />
            ))
          ) : (
            <motion.p
              key="no-results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-white text-center text-sm"
            >
              No technologies found for "{filter}"
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "skills")