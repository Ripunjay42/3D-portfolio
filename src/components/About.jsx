import React from 'react'
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { about } from '../constants'

import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'
import { SectionWrapper } from '../hoc'


const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="w-[140px] md:w-[180px] lg:w-[190px] ">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75, )}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div 
        options = {{
          max: 12, 
          scale: 1,
          speed: 250
        }}
        className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[200px] h-[200px] md:h-[230px] lg:h-[250px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-36 h-30 object-contain pointer-events-none"/>
          <h3 className="text-white text-[15px] md:text-[17px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  )
}

const About = () => {
  return (
    <>
      <motion.div
        variants={textVariant(0.1)}
      >
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.05, 1)}
        className="mt-4 text-secondary lg:text-[17px] md:text-[16px] text-[14px] max-w-3xl leading-[30px]"
      >
          {about}
        
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>

    </>
  )
}

export default SectionWrapper(About, "about")