import Slider from "react-slick";
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import styled from "styled-components";
import * as demoProfileImg from "../../public/demoprofile.png";
import * as demoProfileImg2 from "../../public/demoprofile.png";
import Image from "next/image";
import React, { Component } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import logo from "../../public/binarylogo2.png"
import { TypeAnimation } from "react-type-animation";


  // Custom arrow component for previous
  const CustomPrevArrow: React.FC = ({ onClick }: any) => (
    <div className="custom-arrow absolute -left-[35px] top-1/2 transform -translate-y-1/2" onClick={onClick}>
      <FaChevronLeft size={50} color="#fff" />
    </div>
  );
  
  const CustomNextArrow: React.FC = ({ onClick }: any) => (
    <div
      className="custom-arrow absolute -right-[35px] top-1/2 transform -translate-y-1/2"
      onClick={onClick}
    >
      <FaChevronRight size={50} color="#fff" />
    </div>
  );
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
const Item = styled.div`
  width: calc(20rem - 4rem);

  color: white;

  position: relative;
  width: 15rem;
transition: all 0.3s ease;
 
 
 
border-radius: 20px;
  &:hover {
    transform: scale(0.95);
    @media (max-width: 768px) {
    
    transform:  scale(0.8);

}
    &:hover {
    .image-container {
      transform: translateY(-2rem) translateX(1rem) scale(0.6);
      @media (max-width: 768px) {
    
        transform: translateY(-1.4rem) translateX(1rem) scale(0.8);
    
  }
    }
  }

  }
`;
const ProductCard = styled.div`

.container{
  margin: 0 auto;
} 

.card {
    position: relative;
    margin: 0 auto;
    width: fit-content;
    height: 350px;
 
    border-radius: 20px;
    overflow: hidden;
    
  }
  .card:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(20 83 45);
    clip-path: circle(120px at 80% 20%);
    transition: 0.5s ease-in-out;
  }

  .card:hover:before {
    clip-path: circle(320px at 80% -20%);
  }

  .card:after {

  }
  .card .contentBx {
    position: absolute;
    bottom: 0;
    width: fit-content;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 10;
  }

  .card:hover .contentBx {
    height: 210px;
  }

  .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
    margin: 0;
  }

  .card .contentBx .size,
  .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: 0.5s;
    opacity: 0;
    visibility: hidden;
    padding-top: 0;
    padding-bottom: 0;
  }

  .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.5s;
  }

  .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: 0.6s;
  }

  .container .card .contentBx {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100px;
    text-align: center;
    transition: 1s;
    z-index: 90;
}

.container .card:hover .contentBx {
    height: 210px;
}

.container .card .contentBx h2 {
    position: relative;
    font-weight: 600;
    letter-spacing: 1px;
    color: #fff;
}

.container .card .contentBx .size,
.container .card .contentBx .color {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 8px 20px;
    transition: .5s;
    opacity: 0;
    visibility: hidden;
}

.container .card:hover .contentBx .size {
    opacity: 1;
    visibility: visible;
    transition-delay: .5s;
}

.container .card:hover .contentBx .color {
    opacity: 1;
    visibility: visible;
    transition-delay: .6s;
}

.container .card .contentBx .size h3,
.container .card .contentBx .color h3 {
    color: white;
    font-weight: 300;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    margin-right: 10px;
}




.container .card .contentBx a {
    display: inline-block;
    padding: 10px 20px;
    background: transparent;
    border-radius: 4px;
    margin-top: 4px;
    text-decoration: none;
    font-weight: 600;
    color: #fff;
    opacity: 0;
    transform: translateY(50px);
    transition: .5s;
}

.container .card:hover .contentBx a {
    opacity: 1;
    transform: translateY(0px);
    transition-delay: .7s;
}   

.container .card {
    margin: 0 auto; // Center the card within the container
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 auto;
 scale: 2.7;
  border-radius: 20px;
  position: relative;
  top: 100px;
  transition: transform 0.7s ease;
cursor:pointer;
 
`;

// MemberComponent component definition
const MemberComponent: React.FC<MemberComponentProps> = ({ imgurl, name = "", position = " " ,linkedinUrl="",twitterUrl=""}) => {
 
  return (<><div className="flex justify-center  items-center">
  <Item className=" w-fit rounded-sm transition-transform duration-300 flex justify-center flex-col  items-center  image-container md:scale-[0.9] scale-75   ">
  <ProductCard className="flex justify-center items-center w-fit">
  <div className="container w-fit">
    <div className="card w-fit bg-neutral-800/60 shadow-md  shadow-green-700/75">
    <ImageContainer className=" py-3 md:py-7 w-[8rem] flex flex-col items-center justify-center image-container ">
  
    <Image
                className="rounded-full p-1 bg-neutral-800 overflow-hidden border-solid border-2 hover: border-white/90"
                src={imgurl.src} // Use the imported image URL here
                alt={name}
                width={imgurl.width} // Specify the width
                height={imgurl.height} // Specify the height
              />
</ImageContainer>
      <div className="imgBx">
     
      </div>
      <div className="contentBx">
      <div className="mx-auto text-center text-md md:text-lg font-pixelate text-white">
      {name}
      </div>
        <div className="flex flex-row mr-10 ml-10 justify-center items-center">
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
        
      </div>
      <div className="text-center relative md:-bottom-[180px] -bottom-[210px]  font-pixelate justify-center text-green-500 text-lg ">
      {position}
    </div>

    </div>

   
  </div>

<div className="absolute left-2 top-6"> <Image
              className="glitch"
              src={logo}
              alt="Binary Hackathon"
              width={60}
            /></div>
  
  </ProductCard></Item></div> </>
  );
};

// Mentors component definition
const Mentors: React.FC = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
   
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow/>,
    
    responsive: [
      {
        breakpoint: 2224,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 680,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };



  return (
<PageSection id="team">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
        <div className="overflow-x-hidden w-full pt-5 sm:hidden text-xl shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 uppercase md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-1">
      06.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-2">
   Team
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full  transform h-[4px] w-[70vh] bg-green-500 mt-[10px] ml-4"></div></div>
  </h2>
</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      06.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
      Team
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
          
        </BinaryText>
        <div className="font-pixelate text-green-500 md:text-[1.5rem] font-bold mt-7 text-center">
          {/*<TypeAnimation sequence={[500, `Meet our amazing mentors`]} speed={80} />*/}
        </div>
        <div className="mt-20 md:mt-10 mx-auto">
        <Slider {...sliderSettings} className="lg:mr-[4%] mr-8 ml-8 flex justify-center items-center lg:ml-[4%]">
          <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 1" position="Position" twitterUrl="" linkedinUrl="" />
          <MemberComponent imgurl={{ src: demoProfileImg2.default.src, width: 50, height: 50 }} name="Demo Profile 2" position="Position" twitterUrl="" linkedinUrl="" />
         <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 3" position="Position"  twitterUrl="" linkedinUrl=""/>
         <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 4" position="Position"  twitterUrl="" linkedinUrl=""/>
     <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 5" position="Position"  twitterUrl="" linkedinUrl=""/>
         <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 6" position="Position"  twitterUrl="" linkedinUrl=""/>
          <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 7" position="Position"  twitterUrl="" linkedinUrl=""/>
           <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 8" position="Position"  twitterUrl="" linkedinUrl=""/>
           <MemberComponent imgurl={{ src: demoProfileImg.default.src, width: 50, height: 50 }} name="Demo Profile 9" position="Position"  twitterUrl="" linkedinUrl=""/>

          {/* ... other MemberComponent instances */}
        </Slider></div>
      </div>
    </PageSection>
  );
};

export default Mentors;
