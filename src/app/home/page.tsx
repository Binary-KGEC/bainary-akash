"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";
import Team from "@/components/Team";
import { motion } from 'framer-motion';
import Transition from "@/components/Animation";
const Navbar = dynamic(() => import('@/components/Navbar'));
const MaxWidthWrapper = dynamic(() => import('@/components/MaxWidthWrapper'));
const Hero = dynamic(() => import('@/components/Hero'));
const About = dynamic(() => import('@/components/About'));
const Timeline2 = dynamic(() => import('@/components/Timeline copy'));
const Tracks = dynamic(() => import('@/components/Tracks'));
const Prizes = dynamic(() => import('@/components/Prizes'));
const Mentors = dynamic(() => import('@/components/Mentors'));
const Sponsors = dynamic(() => import('@/components/Sponsors'));
const FAQs = dynamic(() => import('@/components/FAQs'));

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
    <> <Transition/><motion.div  initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: 1.2 }}>
      {typeof window !== 'undefined' && <motion.div  initial={{ opacity: 0, y: -100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}><Navbar heroTopInView={heroTopInView} /></motion.div>}
      <MaxWidthWrapper>
        {<Hero heroTopRef={heroTopRef} />}
        <About />
        <Timeline2/>
        <Tracks />
        <Prizes />
        <Mentors />
        <Team/>
        <Sponsors />
        <FAQs />
      </MaxWidthWrapper>
      <motion.div  initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1.2 }}><Footer/></motion.div> </motion.div>
    </>
  );
};

export default Landing;
