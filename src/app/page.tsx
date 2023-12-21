'use client';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import { useRouter } from 'next/navigation';
import BinaryLogo from "@/components/BinaryLogo";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import useTextScramble from "@/components/text";
import "./globals.css";
import { useState,useCallback,useEffect } from 'react';
import { Button } from "@/components/ui/button";
import BinaryLogo2 from '@/components/BinaryLogo copy';
import TextScramble from "@/components/text"
import { motion } from 'framer-motion';
import Transition from '@/components/Animation';
const DelayedComponent = () => {
  const phrases1 = [
    "By"
   ];
   const phrases2 = [
    "DEV-SOCITY-KGEC"
   ];
  const textRef = useTextScramble(phrases1);
  const textRef2 = useTextScramble(phrases2);
  return <div><div className=''> <div className="font-pixelate text-white text-lg sm:text-xl md:text-0.5xl lg:text-1.3xl xl:text-1.7xl text-center" ref={textRef}></div></div>
  <div className=''><div className="font-pixelate text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl text-center mt-2" ref={textRef2}></div></div></div>;
};
export default function Home() {

  const [showDelayedComponent, setShowDelayedComponent] = useState(false);
  const [showFunction1, setShowFunction1] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const handleClick = () => {
    function1();

    // Call the second function
    function2();

    // Call the third function
    function3();
    function4();
    
  };
  const function1 = () => {
    setShowFunction1(!showFunction1);
   
  };

  const function2 = () => {
    // Logic for the second function
    return <div className="">
    <BinaryLogo2/></div>;
  };

  const function3 = () => {
    // Logic for the third function
    return <div className=" ">
    <BinaryLogo/></div>;
  };

  const function4 = () => {
    setIsNavigating(true);

   
    setTimeout(() => {
      router.push('/home');
    }, 3700); 
  };
  
  const glitch: GlitchHandle = useGlitch({
    "playMode": "hover",
    "createContainers": true,
    "hideOverflow": false,
    "timing": {
      "duration": 250,
      "iterations": 1
    },
    "glitchTimeSpan": {
      "start": 0,
      "end": 1
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 6,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  });
  const router = useRouter();
  const [isNavigating, setIsNavigating] = useState(false);
  
  

  useEffect(() => {
    // Set showDelayedComponent to true after 3 seconds
    const timeout = setTimeout(() => {
      setShowDelayedComponent(true);
    }, 3000);

    // Clear the timeout to avoid memory leaks when the component unmounts
    return () => clearTimeout(timeout);
    // clearTimeout(timeout2);
  }, []); // Empty dependency array ensures the effect runs only once on mount

  const timeout2 = setTimeout(() => {
    setShowButton(true);
  }, 5000);

  return (
    <>
      <div className="bg-transparent w-full">
        <Transition/>
      <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-10 ">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="relative flex-1">
            {showFunction1 ? function2() : function3()}
          </div>
          
        </div>

        <div className="mt-5 md:mt-10">
          {showDelayedComponent && <DelayedComponent />}
        </div>

        <motion.div
          className="flex flex-col md:flex-row items-center justify-center mt-4"
          initial={{ y: "2%", scale: 0, opacity: 0 }}
          animate={{ y: "0%", scale: 1, opacity: 1 }}
          transition={{
            duration: 0.3,
            delay: 5,
            scale: {
              type: "spring",
              damping: 20,
              stiffness: 100,
              restDelta: 0.001,
            },
          }}
        >
          {showButton && (
            <Button
              variant={"trapbutton"}
              onClick={handleClick}
              disabled={isNavigating}
              ref={glitch.ref}
              className="glitch font-SFPixelate"
            >
             <h1 className='lg:ml-[150px] ml-[100px] mr-[100px] lg:mr-[150px]'>Enter</h1> 
            </Button>
          )}
        </motion.div>
      </div>
    </div>
    </>
  );
}
