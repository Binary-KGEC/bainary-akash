
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import styled from "styled-components";
import * as demoProfileImg from "../../public/demoprofile.png";
import * as demoProfileImg2 from "../../public/demoprofile.png";
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
  position?: string;
  linkedinUrl: string;
  twitterUrl:string;
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
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
    .image-container {
      transform: translateY(-2rem) scale(1.1);
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
const MemberComponent: React.FC<MemberComponentProps> = ({ imgurl,imgurl2, name = "", position = " " ,linkedinUrl="",twitterUrl=""}) => {
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
    transition={{ velocity: 0 }}>
   <Item className="bg-green-950/40 flex flex-col items-center justify-center image-container">
            <ImageContainer className="w-[15rem] flex flex-col items-center justify-center image-container bg">
              <Image
                className="w-[130px] h-[130px] flex flex-col items-center justify-center"
                src={imgurl.src} // Use the imported image URL here
                alt={name}
                width={imgurl.width} // Specify the width
                height={imgurl.height} // Specify the height
              />
            </ImageContainer>
            <div className="capitalize font-bold text-1.5xl font-pixelate text-green-600 sm:text-xl xs:text-lg mt-4 text-center ">
              {name}
            </div>
            <div className="text-white/50 font-thin text-0.4xl font-pixelate sm:text-xl xs:text-lg w-full mt-3 mb-3 mx:text-sm text-center">
              {position}
            </div>
            <div className="flex justify-center">
            <Link
              href={twitterUrl}
              className={cn(buttonVariants({ variant: "link" }), "text-white  hover:text-green-600")}
            >
              <Twitter />
            </Link>
  
            <Link
              href={linkedinUrl}
              className={cn(buttonVariants({ variant: "link" }), "text-white hover:text-green-600")}
            >
              <Linkedin />
            </Link>
          </div>
          </Item>

          <Image
                className="w-[70px] -top-[0px] absolute flex flex-col items-center justify-center"
                src={imgurl2.src} // Use the imported image URL here
                alt={name}
                width={imgurl2.width} // Specify the width
                height={imgurl2.height} // Specify the height
              />
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
      <div className="text-white text-shadow-lg sm:hidden text-center shad index-z skew-x-6 mb-20 shadow-md bg-gradient-to-br from-green-950/40 to-green-700/40 shadow-green-700  " >Prizes</div>
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
      
        <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 100, height: 100 }} name="Demo Profile 1 " position="" twitterUrl="" linkedinUrl="" imgurl2={{ src: position1.default.src, width: 10, height: 10 }}/>
        <div className=" ">
        <MemberComponent imgurl={{ src: demoProfileImg2.default.src, width: 100, height: 100 }} name="Demo Profile 2" position="" twitterUrl="" linkedinUrl=""imgurl2={{ src: position2.default.src, width: 10, height: 10}} /></div>
        <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 100, height: 100 }} name="Demo Profile 3" position="" twitterUrl="" linkedinUrl="" imgurl2={{ src: position3.default.src, width: 10, height: 10 }}/>
        {/* ... other MemberComponent instances */}
      </ResponsiveCardContainer>
    </div></Section>
  </PageSection>
);
};

export default Team;
