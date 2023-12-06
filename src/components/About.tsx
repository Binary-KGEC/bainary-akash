import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection id="about">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText
          className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold"
          reveal
        >
          About
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default About;
