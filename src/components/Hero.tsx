import PageSection from "./PageSection";
import BinaryLogo from "./BinaryLogo";
import CountdownClock from "./CountdownClock";
import useTextScramble from "./text";
import Image from "next/image";
import logo from "../../public/herologo.png";
import { Button } from "./ui/button";

const Hero = ({ heroTopRef }: { heroTopRef: (node?: Element | null | undefined) => void }) => {
  const phrases = ["Binary Hackathon starts in"];

  const textRef = useTextScramble(phrases);

  return (
    <PageSection className="flex flex-col justify-center ">
      <div id="hero" ref={heroTopRef} className="flex flex-col justify-center gap-8">
        <div className="w-full flex flex-col justify-center md:text-[1.5rem]">
          <div className="flex flex-col w-full items-center justify-center lg:mt-[10%] mt-[15%]">
            <Image width={500} className="glitch" src={logo} alt="Binary Hackathon" />
          </div>
          <div className="text-white text-center mt-3" ref={textRef}></div>
          <div className="flex justify-center">
            <CountdownClock />
          </div>
        </div>

        <div className="w-full flex justify-center md:text-[1.5rem] text-center ">
          <span className="font-pixelate text-white md:text-[1.5rem]">
            Until then, why don&apos;t you have a look around...
          </span>
        </div>

        <div className="flex flex-col md:flex-row gap-4 mx-auto">
          <div className="w-full md:w-1/2">
            <Button variant={"trapbutton2"}>
              <h1 className="pr-[56px] pl-[56px]">Discord Link</h1>
            </Button>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0">
            <Button variant={"trapbutton2"}>
              <h1 className="pr-10 pl-10">Pre-Register Now</h1>
            </Button>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
