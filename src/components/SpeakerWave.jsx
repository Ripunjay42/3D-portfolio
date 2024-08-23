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

  return (
    <div className="relative flex items-center justify-center h-20">
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full"
          variants={waveVariants}
          animate={isPlaying && !isMuted ? 'playing' : 'paused'}
          style={{
            width: `${20 + index * 20}px`,
            height: `${20 + index * 20}px`,
            borderRadius: '50%',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%)`,
            border: '2px solid',
          }}
        />
      ))}
    </div>
  );
};

export default SpeakerWave;
