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
        <div className="w-full flex flex-col justify-center md:text-[1.5rem] items-center">
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

          <h1 className="text-green-500 text-center mt-3 font-pixelate font-bold">
            <TypeAnimation2 text="Binary Hackathon starts in" />
          </h1>
          <div className="flex justify-center">
            <CountdownClock />
          </div>
        </div>

        <div className="w-full flex justify-center md:text-[1.5rem] text-center">
          <span className="font-pixelate text-white/75 md:text-[1.5rem] font-bold">
            <TypeAnimation sequence={[500, `Until then, why don't you have a look around...`]} speed={80} />
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <div className="w-full md:w-1/2 flex justify-center items-center">
            <Button variant={"trapbutton2"}>
              <h1 className="">Discord Link</h1>
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-center items-center">
            <Button variant={"trapbutton2"}>
              <h1 className="">Pre-Register Now</h1>
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
