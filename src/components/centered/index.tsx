import React, { useEffect,useState } from 'react';

import { motion } from 'framer-motion';

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

const PixelBackground: React.FC = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAnimation = () => {
    setIsOpen(!isOpen);
  };
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
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
    const timer = setTimeout(() => {
      setIsOpen(false); // Close the animation after a delay
    }, 2000); // Adjust the delay as needed

    return () => clearTimeout(timer);
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
          className="w-full md:h-20 h-[5vw] bg-green-700 border-2 border-green-700"
          variants={anim}
          initial="initial"
          animate={isOpen ? 'open' : 'closed'}
          custom={randomIndex}
        />
      ));
    } else {
      return null; // Handle the case where window is not defined (e.g., during SSR)
    }
  };

  useEffect(() => {
    const handleResize = () => {
      // Handle resize logic if needed
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex h-screen w-screen overflow-hidden fixed z-10 pointer-events-none" onClick={toggleAnimation}>
      {[...Array(20)].map((_, index) => (
        <div key={index} className="md:w-20 w-[5vw] h-full flex flex-col">
          {getBlocks()}
        </div>
      ))}
    </div>
  );
};

export default PixelBackground;
