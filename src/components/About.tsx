import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
import Image from "next/image";
import { useGlitch } from 'react-powerglitch'
import useWindowSize from "@rooks/use-window-size";
import ParticleImage, { ParticleOptions, Vector, forces, ParticleForce } from "react-particle-image";

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

  const phrases = [" About our Binary"];
  const textRef = useTextScramble(phrases);

  return (
    <PageSection id="about">
      <main className="flex w-full flex-col items-center justify-center">
        <div className="mt-[96px] md:mt-[116px]">
          <BinaryText
            className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold my-2"
            reveal
          >
            <div className="text-white text-center" ref={textRef}></div>
          </BinaryText>
          <div className="grid w-full grid-cols-1 md:grid-cols-8 gap-16">
            <div className="md:col-span-5 flex flex-col items-start justify-start order-2 md:order-1">
              <h2 className="mb-4 text-lg font-bold uppercase text-green-400"> hi everyone</h2>
              <p className="font-medium text-white">
                {/* about binary content */}
                What started with three enthusiastic people in the year 2021, is now a community of over 1500 developers. Hack4Bengal has been growing from strength to strength and our aim is to go beyond the horizons and impact millions of tech talents by providing them with a platform to enhance their skills, collaborate and create. This time Hack4Bengal is back to leverage your expertise in the offline mode. See you there!
              </p>
              <p className="font-medium mb-4 my-5 text-green-400">
                {/* about kgec content */}
                Hack4Bengal believes in building for the future, empowering people irrespective of their fields, to showcase their skills and creativity for solving real-life problems.
              </p>
            </div>
            <div className="md:col-span-3 relative h-max opacity-70 gap-4 order-1 md:order-2">
              <ParticleImage
                className="w-full md:w-[70%]"
                src={"/binarylogo2.png"}
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
