import PageSection from "./PageSection";
import BinaryLogo from "./BinaryLogo";
import CountdownClock from "./CountdownClock";

const Hero = () => {
  return (
    <PageSection className="flex flex-col justify-center pb-20">
      <div className="flex flex-col justify-center gap-20">
        <div className="w-full flex flex-col justify-center md:text-[1.5rem]">
          <span className="font-pixelate text-white mx-auto mb-4">Binary Hackathon starts in</span>
          <div className="flex justify-center">
            <CountdownClock />
          </div>
        </div>

        <div className="w-full flex justify-center md:text-[1.5rem] text-center">
          <span className="font-pixelate text-white md:text-[1.5rem]">Until then, why don&apos;t you have a look around...</span>
        </div>
      </div>
    </PageSection>
  );
};

export default Hero;
