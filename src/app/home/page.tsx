"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from 'next/dynamic';


import { motion } from 'framer-motion';
import Transition from "@/components/Animation";
import styled from 'styled-components';


const Navbar = dynamic(() => import('@/components/Navbar copy'));
const MaxWidthWrapper = dynamic(() => import('@/components/MaxWidthWrapper'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Timeline2 = dynamic(() => import('@/components/Timeline copy'));
const Tracks = dynamic(() => import('@/components/Tracks'));
const Prizes = dynamic(() => import('@/components/Prizes'));
const Mentor = dynamic(() => import('@/components/Team copy'));
const Team = dynamic(() => import('@/components/Team'));
const Sponsors = dynamic(() => import('@/components/Sponsors'));
const FAQs = dynamic(() => import('@/components/FAQs'));
const Footer = dynamic(() => import('@/components/Footer'));

const Section = styled.section<{ theme: { body: string } }>`
  min-height: full;
  width: full;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Landing = () => {
  const [heroTopRef, heroTopInView] = useInView({
    threshold: 0.5,
    initialInView: true,
  });

  useEffect(() => {
    if (window && performance.navigation.type === performance.navigation.TYPE_RELOAD) {
     
      window.location.href = "/";
    }
  }, []);

  return (
    <> <Section>
    <Transition/>
   
      {typeof window !== 'undefined' && <motion.div  initial={{  y: -100 }}
              animate={{  y: 0 }}
              transition={{ duration: 0.3, delay: 3 }}><Navbar /></motion.div>}
               <motion.div  initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3, delay: 3 }}>
      <MaxWidthWrapper>
        {<Hero heroTopRef={heroTopRef} />}
        <About />
        <Timeline2/>
        <Tracks />
        <Prizes />
        <Mentor/>
        <Team/>
        <Sponsors />
        <FAQs />
      </MaxWidthWrapper>
      <motion.div  initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}><Footer/></motion.div> </motion.div></Section>
    </>
  );
};

export default Landing;