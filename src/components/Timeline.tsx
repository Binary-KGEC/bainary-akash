import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const Timeline = () => {
  return (
    <PageSection id="timeline">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText
          className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold"
          reveal
        >
          Timeline
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default Timeline;
