import React from 'react'
import { Tilt } from 'react-tilt'
import { styles } from '../styles'
import { motion } from 'framer-motion'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { github, opn } from '../assets'
import { textVariant, fadeIn } from '../utils/motion'

const ProjectCard = ({ index, tags, image, source_code_link, name, description, app_link }) => {
  return(
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450,
      }}
      className='bg-gray-100 dark:bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className='w-full h-full rounded-2xl object-cover'/>

          <div className="absolute inset-0 flex gap-2 justify-end m-2 card-img-hover">
            <div onClick={() => window.open(source_code_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={github} alt='github' className='w-1/2 h-1/2 object-contain'/>
            </div>

            <div onClick={() => window.open(app_link, "_blank")}
              className='black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer'>
                <img src={opn} alt='link' className='w-1/2 h-1/2 object-contain'/>
            </div>
          </div>
        </div>

        <div className="mt-5">
          <div className="flex"></div>
          <h3 className='text-black dark:text-white text-[1.5rem] font-bold'>{name}</h3>

          <p className='text-[0.9rem] text-black dark:text-secondary mt-2'>{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[0.8rem] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.darksectionSubText} dark:${styles.sectionSubText}`}>My works</p>
        <h2 className={`${styles.darksectionHeadText} dark:${styles.sectionHeadText}`}>Recent projects.</h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.2, 1)}
          className='mt-3 text-black dark:text-secondary text-[1rem] max-w-3xl leading-7'>

            The following projects ... Just imagine i have written some cool ass shit here to introduce you to my projects. cool bla bla blaa ajay soo cool oohhhh myyy... hes soo coool woooowwwww... 

        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`}
            index={index}
            {...project}  
          />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper (Works, "projects")