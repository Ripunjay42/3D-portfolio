import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const SpeakerWave = ({ isPlaying, isMuted }) => {
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 768);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const waveVariants = {
    playing: (index) => ({
      scale: [1, 1.5, 1],
      opacity: [0.3, 0.7, 0.3],
      transition: {
        repeat: Infinity,
        repeatType: 'reverse',
        duration: 1.5 + index * 0.2,
        ease: 'easeInOut',
      },
    }),
    paused: {
      scale: 1,
      opacity: 0.3,
    },
  };

  const getColor = (index) => {
    const hue = (index * 60) % 360;
    return `hsl(${hue}, 80%, 50%)`;
  };

  const getSizeForScreen = (baseSize, index) => {
    if (windowWidth >= 768) {
      return baseSize + index * 15;
    } else if (windowWidth >= 640) {
      return baseSize + index * 12;
    } else {
      return baseSize + index * 9;
    }
  };

  return (
    <div className="relative flex items-center justify-center h-40">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          custom={index}
          variants={waveVariants}
          animate={isPlaying && !isMuted ? 'playing' : 'paused'}
          style={{
            width: `${getSizeForScreen(20, index)}px`,
            height: `${getSizeForScreen(20, index)}px`,
            border: `2px solid ${getColor(index)}`,
            boxShadow: `0 0 10px ${getColor(index)}`,
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
      ))}
    </div>
  );
};

export default SpeakerWave;