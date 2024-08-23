import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { styles } from '../styles';
import { ComputersCanvas } from './canvas';
import wavingImage from '../assets/avatar.png';
import { FaLaptopCode, FaLightbulb, FaTools } from 'react-icons/fa';
import SpeakerWave from './SpeakerWave';
import { AudioContext } from '../AudioContext.jsx';

const Hero = () => {
  const roles = [
    { text: "Tech Enthusiast", icon: <FaLightbulb className="inline-block text-[#5eff6c] mr-2" /> },
    { text: "Problem Solver", icon: <FaTools className="inline-block text-[#5eff6c] mr-2" /> },
    { text: "Fullstack Developer", icon: <FaLaptopCode className="inline-block text-[#5eff6c] mr-2" /> },
  ];

  const [currentRole, setCurrentRole] = useState(0);
  const { isPlaying, isMuted } = useContext(AudioContext);

  const handleType = () => {
    setCurrentRole((prevRole) => (prevRole + 1) % roles.length);
  };

  return (
    <section className="relative mx-auto h-screen w-full">
      <div
        className={`absolute inset-0 top-[120px] mx-auto max-w-7xl ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="mt-5 flex flex-col items-center justify-center">
          <div className="h-5 w-5 rounded-full bg-[#915EFF]" />
          <div className="violet-gradient h-40 w-1 sm:h-80" />
        </div>

        <div className="flex items-center">
          <div className="mr-2 flex flex-col lg:flex-row lg:items-left">
            <div>
              <h1 className={`${styles.heroHeadText} text-white`}>
                Hi, I'm <span className="animate-rainbowText">Ripunjay</span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-[#45e0e6] flex items-center`}>
                {roles[currentRole].icon}
                <Typewriter
                  words={roles.map((role) => role.text)}
                  loop={true}
                  cursor
                  cursorStyle="|"
                  typeSpeed={80}
                  deleteSpeed={40}
                  delaySpeed={1000}
                  onDelete={handleType}
                />
              </p>
            </div>
            <div className="flex items-center gap-3 md:ml-4">
              <img
                src={wavingImage}
                alt="Waving Avatar"
                className="h-20 w-20 sm:h-28 sm:w-28 mt-2" // Adjust `mt-2` to control spacing
              />
              <div className="relative " style={{ top: '-20px' }}>
                <SpeakerWave isPlaying={isPlaying} isMuted={isMuted} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="xs:bottom-10 absolute bottom-32 flex w-full items-center justify-center">
        <a href="#about">
          <div className="border-secondary flex h-[64px] w-[35px] items-start justify-center rounded-3xl border-4 p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="bg-secondary mb-1 h-3 w-3 rounded-full"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
