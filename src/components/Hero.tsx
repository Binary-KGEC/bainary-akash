import PageSection from "./PageSection";
import BinaryLogo from "./BinaryLogo";
import CountdownClock from "./CountdownClock";
import useTextScramble from "./text";
import Image from "next/image";
import logo from "../../public/herologo.png";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import TypeAnimation2 from "./Textanimation";
import { TypeAnimation } from "react-type-animation";

const Hero = ({ heroTopRef }: { heroTopRef: (node?: Element | null | undefined) => void }) => {
  return (
    <PageSection className="flex flex-col justify-center items-center h-screen">
      <div id="hero" ref={heroTopRef} className="flex flex-col justify-center gap-8">
        <div className="w-full flex flex-col justify-center md:text-[1.5rem] items-center mt-16 md:mt-0">
          <motion.div
            className="flex flex-col w-full items-center justify-center lg:mt-[10%] mt-[15%]"
            initial={{ opacity: 1, scale: 0 }}
            animate={{ opacity: 1, scale: 0.8 }}
            transition={{
              duration: 0.3,
              ease: [0, 0.71, 0.2, 1.01],
              scale: {
                type: "spring",
                damping: 5,
                stiffness: 100,
                restDelta: 0.001,
              },
            }}
          >
            <Image width={500} className="glitch opacity-[200]" src={logo} alt="Binary Hackathon" />
          </motion.div>

         {/* <h1 className="text-green-500 text-center mt-3 font-pixelate font-bold">
            <TypeAnimation2 text="Binary Hackathon starts in" />
          </h1>
          <div className="flex justify-center w-[60%]">
            <CountdownClock />
          </div>*/}
        </div>

        <div className="w-full flex justify-center md:text-[1.5rem] text-center mt-2 md:mt-0">
          <span className="font-pixelate text-green-500 md:text-[1.5rem] font-bold">
            <TypeAnimation sequence={[500, `Until then, why don't you have a look around...`]} speed={80} />
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-8 mx-auto mt-16 md:mt-0 ">
          <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
            <div className="b animate-bounce md:animate-none mx-auto md:h-[50px] h-10 w-64 flex justify-center items-center">
              <div className="i md:h-[50px] h-10 w-64 bg-gradient-to-br from-green-950/40 to-green-700/40 backdrop-filter backdrop-blur-sm bg-opacity-50 items-center rounded-xl shadow-md hover:bg-green-950 cursor-pointer absolute overflow-hidden transform hover:scale-x-105 shadow-green-700 hover:scale-y-105 transition duration-300 ease-out">
              </div>
              <a className="text-center font-pixelate text-white font-md z-10 pointer-events-none flex justify-content items-center">
                <span className="mr-4">
                <svg className="w-7 h-7 fill-white " aria-hidden="true" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                </span>
                Discord Link
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <div className="b relative mx-auto md:h-[50px] h-10 w-64 flex justify-center items-center">
              <div className="i md:h-[50px] h-10 w-64 bg-transparent border-2 border-green-700 shadow-md shadow-green-700 items-center rounded-xl cursor-pointer absolute overflow-hidden transform hover:scale-x-105 hover:scale-y-105 transition duration-300 ease-out hover:bg-green-950">
              </div>
              <a className="text-center text-white font-pixelate font-md z-10 pointer-events-none">pre-registration</a>
              
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
