
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import styled from "styled-components";
import * as demoProfileImg from "../../public/demoprofile.png";
import * as logo from "../../public/binarylogo2.png";
import * as position1 from "../../public/Asset 2.png";
import * as position2 from "../../public/Asset 3.png";
import * as position3 from "../../public/Asset 4.png";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import Confetticomp from "./Confeetti";
const spring = {
  type: "spring",
  stiffness: 300,
  damping: 40,
}

/**
* 3D Flip
* Created By Joshua Guo
*
* @framerSupportedLayoutWidth fixed
* @framerSupportedLayoutHeight fixed
*/

interface MemberComponentProps {
  imgurl: {
    src: string;
    width: number;
    height: number;
  };
  imgurl2: {
    src: string;
    width: number;
    height: number;
  };
  name: string;
TotalPrize:string;
 CashPrize:string;
 
}


const Section = styled.section<{ theme: { body: string } }>`
  min-height: full;
  width: full;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const ResponsiveCardContainer = styled.div`
  width:fit-content;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 1200px) {
    width: 100%;
  }

  @media (max-width: 864px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Item = styled.div`
  width: 15rem; // Adjust as needed
  padding: 1rem 0;
  color: white;
  margin: 2rem 1rem;
  position: relative;
  transition: all 0.3s ease;


  &:hover {
    transform: scale(1);
    .image-container {
      transform: translateY(-2rem) scale(1);
    }
  }
`;

const ImageContainer = styled.div`
  width: 80%;
  margin: 0 1rem;
  border-radius: 20px;
  position: relative;
  transition: transform 0.3s ease;
  cursor: pointer;
`;
// MemberComponent component definition
const MemberComponent: React.FC<MemberComponentProps> = ({ imgurl,imgurl2, name = "",  CashPrize = " " , TotalPrize=""}) => {
  const cardX = useMotionValue(0);
  const cardY = useMotionValue(0);
  const rotateX = useTransform(cardY, [-300, 300], [10, -10]); // Reversed values
  const rotateY = useTransform(cardX, [-300, 300], [-10, 10]); // Reversed values
  const cardRotateX = useTransform(cardY, [-300, 300], [25, -25]); // Adjusted rotation values
  const cardRotateY = useTransform(cardX, [-300, 300], [-25, 25]); // Adjusted rotation values

  const handleMouseMove = (event: React.MouseEvent) => {
    const offsetX = event.clientX - window.innerWidth / 2;
    const offsetY = event.clientY - window.innerHeight / 2;

    cardX.set(offsetX);
    cardY.set(offsetY);
  };

  const handleMouseLeave = () => {
    cardX.set(0);
    cardY.set(0);
  };

  return (<motion.div
  className="lg:m-4 md:m-0"
    style={{
      perspective: 800,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
     
    }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}>
      <motion.div
     style={{
      margin: "auto",
      width: "100%",
      height: "100%",
      transformStyle: "preserve-3d",
      perspective: 800,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      rotateX,
      rotateY
    }}
    transition={{ velocity: 0 }}><motion.div
    key="card"
    style={{
      boxShadow: "0px 0px 30px -7px rgba(0,0,0,0.45)",
      borderRadius: 10,

      transformStyle: "preserve-3d",
      perspective: 800, // Set perspective on the card
    }}
    transition={{ velocity: 0 }}>  <div className=" p-6 w-[100px]  absolute top-16 right-2 ">
            
    <Image
          className=" w-40 justify-center flex"
          src={imgurl2.src} // Use the imported image URL here
          alt={name}
          width={imgurl2.width} // Specify the width
          height={imgurl2.height} // Specify the height
        /></div>
        <div className="capitalize font-bold text-1.5xl font-pixelate text-white shad ml-20 mr-4 sm:text-xl xs:text-lg  text-center mt-2 bg-green-700 -skew-x-12 shadow-md shadow-green-700 ">
              {name}
            </div>
   <Item className=" flex flex-col items-center justify-center image-container bg-transparent border-2 border-green-700 rounded-b-lg">
           
           
            <div className="flex flex-col gap-6 mt-6">
            <div className="flex flex-col mt-10 ">
            <h1 className="text-green-500 font-semibold text-md font-pixelate  w-[90%]  mx:text-sm text-start ml-4">TotalPrize</h1><p className="text-white font-thin text-sm font-pixelate  w-[90%]  mx:text-sm text-start ml-4">{CashPrize}</p>
            </div>
            <div className="flex flex-col  ">
            <h1 className="text-green-500 font-semibold text-md font-pixelate  w-[90%]  mx:text-sm text-start ml-4">CashPrize</h1><p className="mb-10 text-white font-thin text-sm font-pixelate  w-[90%]  mx:text-sm text-start ml-4">{TotalPrize}</p>
            </div></div>
          </Item>
         
          <div className=" p-6 w-[100px] bg-black overflow-hidden border-solid border-2 hover: border-green-700 absolute -top-0 -left-2 ">
            
          <Image
                className=" w-40 justify-center flex"
                src={imgurl.src} // Use the imported image URL here
                alt={name}
                width={imgurl.width} // Specify the width
                height={imgurl.height} // Specify the height
              /></div>
         
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Team component definition
const Team: React.FC = () => {
  return (
    <PageSection id="prizes">
      <Section>
      {/*<Confetticomp/>*/}
    <div className="mt-[96px] md:mt-[116px]">
      <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
      <div className="overflow-x-hidden w-full pt-5 sm:hidden text-xl shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 uppercase md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-1">
      04.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-2">
    Prizes
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full  transform h-[4px] w-[70vh] bg-green-500 mt-[10px] ml-4"></div></div>
  </h2>
</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      04.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
      Prizes
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
      </BinaryText>

      <ResponsiveCardContainer className="w-fit">
      <div className="lg:order-1 lg:mb-20">
        <MemberComponent imgurl={{ src: position1.default.src, width: 10, height: 10 }} name="1st Prize " CashPrize="Total Prize of Worth $" TotalPrize="Total Prize of Worth $"  imgurl2={{ src: logo.default.src, width: 10, height: 10 }}/></div>
        <div className="lg:mt-0 mt-20 mb-20 lg:mb-0 lg:order-2 ">
        <MemberComponent imgurl={{ src: position2.default.src, width: 10, height: 10 }} name="2nd Prize" CashPrize="Total Prize of Worth $"  TotalPrize="Total Prize of Worth $" imgurl2={{ src: logo.default.src, width: 10, height: 10}} /></div>
        <MemberComponent imgurl={{ src: position3.default.src, width: 10, height: 10 }} name="3rd Prize" CashPrize="Total Prize of Worth $"  TotalPrize="Total Prize of Worth $"  imgurl2={{ src: logo.default.src, width: 10, height: 10 }}/>
        {/* ... other MemberComponent instances */}
      </ResponsiveCardContainer>
    </div></Section>
  </PageSection>
);
};

export default Team;
