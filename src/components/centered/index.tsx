
'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface PixelBackgroundProps {
  active: boolean;
}

const anim = {
  initial: {
    opacity: 0,
  },
  open: (i: number) => ({
    opacity: 1,
    transition: { duration: 0.05, delay: 0.05 * i },
  }),
  closed: (i: number) => ({
    opacity: 0,
    transition: { duration: 0.05, delay: 0.05 * i },
  }),
};

const PixelBackground: React.FC<PixelBackgroundProps> = ({ active }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAnimation = () => {
    setIsOpen(!isOpen);
  };

  const shuffle = (a: number[]) => {
    let j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  useEffect(() => {
    setIsOpen(active);
  }, [active]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }
  }, []);

  const getBlocks = () => {
    if (typeof window !== 'undefined') {
      const { innerWidth, innerHeight } = window;
      const blockSize = innerWidth * 0.05;
      const nbOfBlocks = Math.ceil(innerHeight / blockSize);
      const shuffledIndexes = shuffle([...Array(nbOfBlocks)].map((_, i) => i));
      return shuffledIndexes.map((randomIndex, index) => (
        <motion.div
          key={index}
          className="min-w-screen h-full md:min-h-20 min-h-[5vw] bg-green-700 border-2 border-green-700"
          variants={anim}
          initial="initial"
          animate={isOpen ? 'open' : 'closed'}
          custom={randomIndex}
        />
      ));
    } else {
      return null;
    }
  };

  return (
    <div className="flex h-screen w-screen overflow-hidden fixed z-10 pointer-events-none" onClick={toggleAnimation}>
    {[...Array(30)].map((_, index) => (
      <div key={index} className="md:min-w-20 min-w-[5vw] h-full flex flex-col">
        {getBlocks()}
      </div>
    ))}
  </div>
  );
};

export default PixelBackground;
