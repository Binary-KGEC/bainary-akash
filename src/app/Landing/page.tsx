import React from 'react'
import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Mentors from "@/components/Mentors";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import Navbar from '@/components/Navbar';

const landing = () => {
  return (
    <>
      <MaxWidthWrapper>
        <Navbar/>
        <Hero />
        <About />
        <Timeline />
        <Tracks />
        <Prizes />
        <Mentors />
        <Sponsors />
        <FAQs />
      </MaxWidthWrapper>
    </>

  )
}

export default landing
