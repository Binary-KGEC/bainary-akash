'use client';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import { useRouter } from 'next/navigation';
import BinaryLogo from "@/components/BinaryLogo";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import useTextScramble from "@/components/text";
import "./globals.css";
import { useState, useCallback, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import BinaryLogo2 from '@/components/BinaryLogo copy';
import TextScramble from "@/components/text"
import { motion } from 'framer-motion';
import Transition from '@/components/Animation';
import styled from 'styled-components';
import PixelBackground from "../../src/components/centered";

const Section = styled.section<{ theme: { body: string } }>`
  min-height: full;
  width: full;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const DelayedComponent = () => {
  const phrases1 = [
    "By"
  ];
  const phrases2 = [
    "DEV-Community-KGEC"
  ];
  const textRef = useTextScramble(phrases1);
  const textRef2 = useTextScramble(phrases2);

  return (
    <Section>
      <div>
        <div className=''>
          <div className="font-pixelate font-bold opacity-100 text-white text-lg sm:text-xl md:text-0.5xl lg:text-1.3xl xl:text-1.7xl text-center uppercase shad" ref={textRef}></div>
        </div>
        <div className=''>
          <div className="font-pixelate font-bold opacity-100 shad text-white text-lg sm:text-xl md:text-1xl lg:text-2xl xl:text-3xl text-center uppercase mt-2" ref={textRef2}></div>
        </div>
      </div>
    </Section>
  );
};

const Home: React.FC = () => {
  const [isAnimationActive, setIsAnimationActive] = useState(false);
  const [showDelayedComponent, setShowDelayedComponent] = useState(false);
  const [showFunction1, setShowFunction1] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isNavigating, setIsNavigating] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setIsNavigating(true);
    function1();
    function2();
    function3();
    function4();
    setTimeout(() => {
      setIsAnimationActive(true);
    }, 3400);
  };

  const function1 = () => {
    setShowFunction1(!showFunction1);
  };

  const function2 = () => {
    return <div className=""><BinaryLogo2/></div>;
  };

  const function3 = () => {
    return <div className=" "><BinaryLogo/></div>;
  };

  const function4 = () => {
    setIsNavigating(true);
    setTimeout(() => {
      router.push('/home');
    }, 5000);
  };

  const handleEnterKeyPress = useCallback(
    (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if (event.key === 'Enter') {
        event.preventDefault();
        handleClick();
      }
    },
    [handleClick]
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowDelayedComponent(true);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setShowButton(true);
    }, 5000);
    return () => clearTimeout(timeout2);
  }, []);

  return (
    <>
      <PixelBackground active={isAnimationActive} />
      <Section className=" w-full">
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
                onKeyDown={handleEnterKeyPress}
                disabled={isNavigating}
                className="glitch font-SFPixelate mt-2 "
                tabIndex={0}
              >
                <div className='lg:ml-[150px] ml-[100px] mr-[100px] lg:mr-[150px]'>Enter</div>
              </Button>
            )}
          </motion.div>
        </div>
      </Section>
    </>
  );
}
export default Home;