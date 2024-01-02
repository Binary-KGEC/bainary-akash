import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import Image from "next/image";
import { useGlitch } from 'react-powerglitch'
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { ParticleOptions, Vector, forces, ParticleForce } from "react-particle-image";
import logo from "../../public/binarylogo2.png"

const particleOptions: ParticleOptions = {
  filter: ({ x, y, image }) => {
    const pixel = image.get(x, y);
    return pixel.b > 50;
  },
  color: ({ x, y, image }) => "#fff",
  radius: () => Math.random() * 0.5 + 0.5,
  mass: () => 40,
  friction: () => 0.15,
  initialPosition: ({ canvasDimensions }) => {
    return new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2);
  }
};

const motionForce = (x: number, y: number): ParticleForce => {
  return forces.disturbance(x, y, 5);
};

const About = () => {
  const { innerWidth, innerHeight } = useWindowSize();
  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

 

  return (
    <PageSection id="about">
      
      <main className="  ">
        <div className="mt-[96px] md:mt-[116px] ">
          <div
            className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold my-2 mb-8  "
          
          >
         <div className="text-white text-shadow-lg sm:hidden text-center shad index-z skew-x-6 mb-20 shadow-md bg-gradient-to-br from-green-950/40 to-green-700/40 shadow-green-700  " >About Binary</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      01.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
      About Binary
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
            
          </div>
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-16">
            <div className="md:col-span-5 flex flex-col items-start justify-start order-2 md:order-1 ">
              <h2 className="mb-4  text-3xl uppercase text-green-400 font-pixelate font-bold"> hi everyone</h2>
              <p className="font-bold text-white font-pixelate">
                {/* about binary content */}
                Binary is the annual hackathon of Kalyani Government Engineering College. It aims to be a stage for college students to showcase their creativity and resolve societal issues using technology. We hope to employ the current generation of innovators to think out of the box and bring transformative solutions to the forefront.
              </p>
              <p className=" mb-4 my-5 text-green-400 font-pixelate font-bold">
                {/* about content */}
                We intend to host about 300 students with expertise in diverse domains of computer science. The BINARY will take place in the first half of March at the Kalyani Government Engineering College.
              </p>
            </div>
            <div className="md:col-span-3 flex h-max opacity-70 gap-4 order-1 md:order-2 items-center justify-center ">
            <Image width={100} className="lg:hidden w-[60%] items-center justify-center" src={logo} alt="Binary Hackathon" />
              <ParticleImage
                className="w-full md:w-[70%] hidden lg:block"
                src={"./binarylogo2.png"}
                width={300}
                scale={0.70}
                entropy={20}
                maxParticles={4000}
                particleOptions={particleOptions}
                mouseMoveForce={motionForce}
                touchMoveForce={motionForce}
                backgroundColor="transparent"
              />
            </div>
          </div>
        </div>
      </main>
    </PageSection>
  );
};

export default About;