import PageSection from "./PageSection";
import BinaryLogo from "./BinaryLogo";
import CountdownClock from "./CountdownClock";

const Hero = () => {
  return (
    <PageSection className="flex flex-col">
      <div className="">
        <BinaryLogo />
      </div>
      <div className="h-[40%]" />
      <div className="">
        <CountdownClock />
      </div>
    </PageSection>
  );
};

export default Hero;
