import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection id="about">
      <div className="mt-7">
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
