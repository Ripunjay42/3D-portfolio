import React, { useEffect, useState } from 'react'
import { technologies } from '../constants'
import { SectionWrapper } from '../hoc'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { textVariant, fadeIn } from '../utils/motion'

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)')
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }
    
    window.addEventListener("change", handleMediaQueryChange)

    return () => {
      window.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
    isMobile ? null : 
    <>
      <motion.div variants={textVariant()}>
        <h5 className={`${styles.sectionHeadText}`}>
          Tech Stack.
        </h5>
      </motion.div>
      
      <motion.div className='mt-12 flex flex-col items-center' variants={fadeIn('', '',0.01, 1)}>
        <div className='flex flex-row flex-wrap justify-center gap-10'>
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="relative group w-25 h-25 flex items-center justify-center p-4 rounded-lg transition-transform duration-300 hover:scale-110"
              style={{
                background: 'transparent',
                backgroundClip: 'padding-box',
                border: '1px solid #915EFF',
                // boxShadow: '0 0 5px rgba(138, 43, 226, 0.5)', // Faint glow by default
              }}
            >
              <div
                className="absolute inset-0 rounded-lg"
                style={{
                  background: 'transparent',
                  content: '""',
                  zIndex: -1,
                  margin: '-2px',
                }}
              />
              <img src={tech.icon} alt={tech.name} className="w-16 h-16" />
              <div className="absolute bottom-full mb-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-[-10px] transition-all duration-300 ease-out">
                <div className="bg-transparent font-extrabold text-[#4dffff] text-center px-3 py-1 rounded-lg shadow-lg italic font-cursive">
                  {tech.name}
                </div>
              </div>

              <style jsx>{`
                .group:hover {
                  box-shadow: 0 0px 7px #915EFF;
                }
              `}</style>
            </div>
          ))}
        </div>
      </motion.div>
    </>
  )
}

export default SectionWrapper(Tech, "tech")
