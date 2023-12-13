"use client"
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import dynamic from 'next/dynamic';
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
    <>
      {typeof window !== 'undefined' && <Navbar heroTopInView={heroTopInView} />}
      <MaxWidthWrapper>
        <Hero heroTopRef={heroTopRef} />
        <About />
        <Timeline2/>
        <Tracks />
        <Prizes />
        <Mentors />
        <Sponsors />
        <FAQs />
      </MaxWidthWrapper>
    </>
  );
};

export default Landing;
