
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import styled from "styled-components";
import * as demoProfileImg from "../../public/demoprofile.png";
import * as demoProfileImg2 from "../../public/demoprofile.png";
import Image from "next/image";
import React, { useState, useRef, useEffect } from "react"
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
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
  name: string;
  position?: string;
  linkedinUrl: string;
  twitterUrl:string;
}

// Styled component for the section
const Section = styled.section<{ theme: { body: string } }>`
  min-height: 10vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;

const ResponsiveCardContainer = styled.div`
  width: fit-content;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center; /* Center text within each card */
  }
`;

const Item = styled.div`
  width: 15rem;
  padding: 1rem 0;
  color: white;
  margin: 2rem 1rem;
  position: relative;
  transition: all 0.3s ease;
  border-radius: 20px;

  &:hover {
    transform: scale(1.1);
    .image-container {
      transform: translateY(-2rem) scale(1.3);
    }
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;
const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
 
  border-radius: 20px;
  position: relative;
  transition: transform 0.3s ease;
cursor:pointer;
 
`;

// MemberComponent component definition
const MemberComponent: React.FC<MemberComponentProps> = ({ imgurl, name = "", position = " " ,linkedinUrl="",twitterUrl=""}) => {
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
   <Item className="bg-green-950/40 flex flex-col items-center justify-center image-container w-[13rem]">
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
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

// Team component definition
const Team: React.FC = () => {
  return (
    <PageSection id="team">
    <div className="mt-[96px] md:mt-[116px]">
      <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
        <div className="text-white text-center">Team</div>
      </BinaryText>
      <ResponsiveCardContainer className="flex justify-center items-center">
        {/* Use the extracted src property for the imgurl prop */}
        <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 100, height: 100 }} name="Demo Profile 1" position="Position" twitterUrl="" linkedinUrl="" />
          <MemberComponent imgurl={{ src: demoProfileImg2.default.src, width: 100, height: 100 }} name="Demo Profile 2" position="Position" twitterUrl="" linkedinUrl="" />
          <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 100, height: 100 }} name="Demo Profile 3" position="Position"  twitterUrl="" linkedinUrl=""/>
        {/* ... other MemberComponent instances */}
      </ResponsiveCardContainer>
    </div>
  </PageSection>
  );
};

export default Team;
