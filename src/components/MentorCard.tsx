import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import Link from "next/link";
import { Linkedin, Twitter } from "lucide-react";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import styled from "styled-components";
import logo from "../../public/binarylogo2.png"
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
      transform: translateY(-2rem) translateX(1rem) scale(0.6);
    }
  }
    
  }
`;
const ProductCard = styled.div`

 

  .card {
    position: relative;
    width: 250px;
    height: 350px;
    background: #232323;
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
    width: 100%;
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
    
    return ( <ProductCard className="">
      <Item className="w-fit  scale-90 flex flex-col justify-between rounded-sm mx-0 md:mx-5 hover:scale-100 transition-transform duration-300   items-center  image-container">
     
      <div className="container">
        <div className="card">
        <ImageContainer className=" py-3 md:py-7 w-[8rem] flex flex-col items-center justify-center image-container ">
      
      <Image  className="rounded-full p-1 bg-neutral-800 overflow-hidden border-solid border-2 hover: border-white/90"src={imgUrl} alt="pfp" width={50} height={50} />
    </ImageContainer>
          <div className="imgBx">
         
          </div>
          <div className="contentBx">
          <CardTitle className="mx-auto text-center text-md md:text-lg font-pixelate text-white">
            {name}
          </CardTitle>
            <div className="flex flex-row mr-10 ml-10 justify-center items-center">
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
            
          </div>
          <div className="text-center relative -bottom-[180px] font-pixelate justify-center text-green-500 text-lg">
          {description}
        </div>
   
        </div>
    
       
      </div>
  
    <div className="absolute left-12 top-10"> <Image
                  className="glitch"
                  src={logo}
                  alt="Binary Hackathon"
                  width={60}
                /></div>
      
      </Item>  </ProductCard>
    );
  };
  
  export default MentorCard;