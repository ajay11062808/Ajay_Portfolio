import React from 'react'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

import 'react-vertical-timeline-component/style.min.css'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import { motion } from 'framer-motion'

const ExperienceCard = ({ experience }) => (
  <VerticalTimelineElement
    contentStyle={{
      background: 'var(--timeline-bg)',
      color: 'var(--timeline-text)',
    }}
    contentArrowStyle={{
      borderRight: '7px solid var(--timeline-arrow)',
    }}
    date={experience.date}
    iconStyle={{ background: experience.iconBg }}
    icon={
      <div className="flex justify-center items-center w-full h-full">
        <img
          src={experience.icon}
          alt={experience.company_name}
          className="w-[60%] h-[60%] object-contain"
        />
      </div>
    }
  >
    <div>
      <h3 className="text-[1.5rem] font-bold dark:text-white text-gray-900">{experience.title}</h3>
      <p className="text-secondary text-[1rem] font-semibold" style={{ margin: 0 }}>
        {experience.company_name}
      </p>
    </div>
    <ul className="list-disc space-y-2 ml-5 mt-5">
      {experience.points.map((point, index) => (
        <li key={`experience-point-${index}`} className="text-[14px] pl-1 tracking-wider dark:text-gray-300 text-gray-700">
          {point}
        </li>
      ))}
    </ul>
  </VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.darksectionSubText} dark:${styles.sectionSubText}`}>The road here</p>
        <h2 className={`${styles.darksectionHeadText} dark:${styles.sectionHeadText}`}>Work Experience</h2>
      </motion.div>

      <div className="flex flex-col mt-20">
        <VerticalTimeline className="dark:before:bg-gray-700 before:bg-gray-300">
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")
