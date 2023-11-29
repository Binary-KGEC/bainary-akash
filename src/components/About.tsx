import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection>
      <div className="mt-7">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem]" reveal>
          About
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default About;
