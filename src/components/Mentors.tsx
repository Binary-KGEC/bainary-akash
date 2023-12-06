import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const Mentors = () => {
  return (
    <PageSection id="mentors">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem]" reveal>
          Mentors
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default Mentors;
