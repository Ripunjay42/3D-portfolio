import React from 'react';
import { motion } from 'framer-motion';

const SpeakerWave = ({ isPlaying, isMuted }) => {
  const waveVariants = {
    playing: {
      opacity: [0.5, 1, 0.5],
      scale: [0.8, 1.2, 0.8],
      borderColor: [
        'rgba(255, 0, 0, 1)',
        'rgba(0, 255, 0, 1)',
        'rgba(0, 0, 255, 1)',
      ],
      boxShadow: [
        '0 0 20px rgba(255, 0, 0, 0.8)',
        '0 0 20px rgba(0, 255, 0, 0.8)',
        '0 0 20px rgba(0, 0, 255, 0.8)',
      ],
      transition: {
        repeat: Infinity,
        repeatType: 'loop',
        duration: 1.5,
        ease: 'easeInOut',
      },
    },
    paused: {
      opacity: 0.5,
      scale: 0.8,
      borderColor: 'rgba(145, 94, 255, 1)',
      boxShadow: '0 0 10px rgba(145, 94, 255, 0.5)',
    },
  };

  // Function to determine sizes based on screen width
  const getSizeForScreen = (baseSize, index) => {
    if (window.innerWidth >= 768) { // md and above
      return `${baseSize + index * 20}px`;
    } else if (window.innerWidth >= 640) { // sm screens
      return `${baseSize + index * 15}px`;
    } else { // xs and below
      return `${baseSize + index * 10}px`;
    }
  };

  return (
    <div className="relative flex items-center justify-center h-20">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          variants={waveVariants}
          animate={isPlaying && !isMuted ? 'playing' : 'paused'}
          style={{
            width: getSizeForScreen(20, index),
            height: getSizeForScreen(20, index),
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            border: '1px solid',
          }}
        />
      ))}
    </div>
  );
};

export default SpeakerWave;
