import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import styled from "styled-components";
const Item = styled.div`
  width: calc(20rem - 4rem);
  padding: 1rem 0;
  color: white;
  margin: 2rem 1rem;
  position: relative;
  width: 15rem;
transition: all 0.3s ease;
 
 
 
border-radius: 20px;
  &:hover {
    transform: scale(1);
    &:hover {
    .image-container {
      transform: translateY(-2rem) scale(1.1);
    }
  }
    
  }
`;

const ImageContainer = styled.div`
  width: 15rem;
  margin: 0 1rem;
 
  border-radius: 20px;
  position: relative;
  transition: transform 0.3s ease;
cursor:pointer;
 
`;
const MentorCard = ({
    name,
    imgUrl,
    description,
    twitterUrl,
    linkedinUrl,
  }: {
    name: string;
    imgUrl: string;
    description: string;
    twitterUrl: string;
    linkedinUrl: string;
  }) => {
    
    return (
      <Item className="w-30 md:w-64   scale-90 flex flex-col justify-between rounded-sm mx-0 md:mx-5 hover:scale-100 transition-transform duration-300 bg-green-950/40  items-center  image-container">
      
        <ImageContainer className=" py-3 md:py-7 w-[15rem] flex flex-col items-center justify-center image-container ">
      
            <Image src={imgUrl} alt="pfp" width={150} height={200} />
          </ImageContainer>
  
        <CardHeader className="w-full flex flex-col gap-2 md:gap-5 justify-center">
          <CardTitle className="mx-auto text-center text-md md:text-lg font-pixelate text-white">
            {name}
          </CardTitle>
          <div className="flex justify-center">
            <Link
              href={twitterUrl}
              className={cn(buttonVariants({ variant: "link" }), "text-white")}
            >
              <Twitter />
            </Link>
  
            <Link
              href={linkedinUrl}
              className={cn(buttonVariants({ variant: "link" }), "text-white")}
            >
              <Linkedin />
            </Link>
          </div>
        </CardHeader>
      </Item>
    );
  };
  
  export default MentorCard;