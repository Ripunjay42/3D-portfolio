import React, { createContext, useState, useEffect, useRef } from 'react';
import backgroundMusic from './assets/tone/start.mp3'; // Adjust the path as needed

export const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [canAutoplay, setCanAutoplay] = useState(false);
  const audioRef = useRef(new Audio(backgroundMusic));

  useEffect(() => {
    const audio = audioRef.current;

    // Enable looping
    audio.loop = true;

    const initializeAudio = async () => {
      try {
        await audio.play();
        setCanAutoplay(true);
        setIsPlaying(true);
        audio.pause(); // Pause immediately to avoid unwanted playback
      } catch (error) {
        console.error("Audio autoplay failed:", error);
        setCanAutoplay(false);
      }
    };

    initializeAudio();

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      try {
        await audio.play();
        setCanAutoplay(true);
      } catch (error) {
        console.error("Audio playback failed:", error);
        setCanAutoplay(false);
      }
    }

    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <AudioContext.Provider 
      value={{
        isPlaying,
        isMuted,
        canAutoplay,
        togglePlay,
        toggleMute,
        setIsPlaying,
        setIsMuted,
        setCanAutoplay
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};
