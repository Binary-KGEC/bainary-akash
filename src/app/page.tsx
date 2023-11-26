'use client';
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import About from "@/components/About";
import FAQs from "@/components/FAQs";
import Hero from "@/components/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import Mentors from "@/components/Mentors";
import Prizes from "@/components/Prizes";
import Sponsors from "@/components/Sponsors";
import Timeline from "@/components/Timeline";
import Tracks from "@/components/Tracks";
import { useRouter } from 'next/navigation';
import BinaryLogo from "@/components/BinaryLogo";



import { useState } from 'react';
import { Button } from "@/components/ui/button";
import BinaryLogo2 from '@/components/BinaryLogo copy';

export default function Home() {
  const [showFunction1, setShowFunction1] = useState(true);
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
    return <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6 ">
    <BinaryLogo/></div>;
  };

  const function3 = () => {
    // Logic for the third function
    return <div className="container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-6 ">
    <BinaryLogo2/></div>;
  };

  const function4 = () => {
    setIsNavigating(true);

   
    setTimeout(() => {
      router.push('/Landing');
    }, 3000); 
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



  return (
    <>
     <div className=" bg-transparent " >
     <div className='container mx-auto flex flex-col pb-10 md:pb-40 items-center justify-center h-screen px-10' >
     <div className=' absolute inset-y-0 flex flex-col '>
     {showFunction1 ? function2() : function3()}
     </div>
     <div className='absolute inset-x-0 bottom-10 flex flex-col my-100 mx-auto flex flex-col   items-center justify-center'>
      <Button variant={"enter"}  onClick={handleClick} disabled={isNavigating} ref={glitch.ref} className="glitch">Get Started</Button>
    </div></div></div>
    </>
  );
}
