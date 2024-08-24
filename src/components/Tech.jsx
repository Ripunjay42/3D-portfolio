import React, { useEffect, useState } from 'react';
import { technologies } from '../constants';
import { SectionWrapper } from '../hoc';
import { link } from '../assets';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { textVariant, fadeIn } from '../utils/motion';
import Tilt from 'react-parallax-tilt';
import leetcodeIcon from '../assets/tech/leetcode.png';
import codechefIcon from '../assets/tech/codechef.png';

// Define the ServiceCard component
const ServiceCard = ({ index, title, icon, links }) => {
  return (
    <Tilt
      tiltMaxAngleX={15}
      tiltMaxAngleY={15}
      scale={1}
      transitionSpeed={250}
      className="w-[165px] lg:w-[200px] md:w[190px]"
    >
      <div className="green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div className="bg-tertiary py-5 px-12 rounded-[20px] min-h-[280px] flex flex-col justify-evenly items-center">
          <img src={icon} alt={title} className="w-36 h-30 object-contain" />
          <a href={links} target="_blank" rel="noopener noreferrer">
            <h3 className="text-blue-500 text-[17px] underline font-bold text-center flex items-center">
              {title}
              <span>
                <img src={link} alt="link icon" className="h-3 w-3 ml-3" />
              </span>
            </h3>
          </a>
        </div>
      </div>
    </Tilt>
  );
};

const Tech = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  return (
    <div className={isMobile ? '' : 'container mx-auto'}>
      <div variants={textVariant()}>
        <h5 className={`${styles.sectionHeadText}`}>Tech Stack.</h5>
      </div>

      <div
        className="mt-12 flex flex-col items-center"
        variants={fadeIn('', '', 0.01, 1)}
      >
        <div className="flex flex-row flex-wrap justify-center gap-8">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="relative group w-25 h-25 flex items-center justify-center p-4 rounded-lg transition-transform duration-300 hover:scale-110"
              style={{
                background: 'transparent',
                backgroundClip: 'padding-box',
                border: '1px solid #915EFF',
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
      </div>

      {/* Add LeetCode and CodeChef Cards */}
      <div className="mt-20 flex flex-wrap gap-8 justify-center">
        <ServiceCard
          index={technologies.length}
          title="LeetCode"
          icon={leetcodeIcon}
          links="https://leetcode.com/u/Ripunjay42/"
        />
        <ServiceCard
          index={technologies.length + 1}
          title="CodeChef"
          icon={codechefIcon}
          links="https://www.codechef.com/users/ripunjay42"
        />
      </div>
    </div>
  );
};

export default SectionWrapper(Tech, 'tech');
