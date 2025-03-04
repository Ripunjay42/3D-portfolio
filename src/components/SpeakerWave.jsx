import React from 'react';
import { motion } from 'framer-motion';
import { FaMusic } from 'react-icons/fa';

const SpeakerWave = ({ isPlaying, isMuted }) => {
  const noteVariants = {
    playing: (i) => ({
      rotate: [0, 360],
      x: [0, Math.cos(i * (Math.PI / 3)) * 50],
      y: [0, Math.sin(i * (Math.PI / 3)) * 50],
      opacity: [0, 1, 0],
      transition: {
        repeat: Infinity,
        duration: 2 + i * 0.3,
        ease: 'easeInOut',
        delay: i * 0.2,
      },
    }),
    paused: {
      opacity: 0,
    },
  };

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#915EFF'];

  return (
    <div className="relative flex items-center justify-center h-40 w-40">
      {/* Floating Music Notes */}
      {isPlaying && !isMuted && [...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          custom={i}
          variants={noteVariants}
          animate="playing"
          initial="paused"
          className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            color: colors[i],
            fontSize: `${20 - i * 1}px`,
          }}
        >
          <FaMusic />
        </motion.div>
      ))}
    </div>
  );
};

export default SpeakerWave;