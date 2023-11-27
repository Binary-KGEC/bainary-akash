import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const About = () => {
  return (
    <PageSection>
      <div className="mt-7">
				<BinaryText className="text-white font-pixelate text-[4rem]" reveal>
					What is BINARY?
				</BinaryText>
			</div>
    </PageSection>
  );
};

export default About;
