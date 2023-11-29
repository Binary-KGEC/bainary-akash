import BinaryText from "./BinaryText";
import PageSection from "./PageSection";

const Tracks = () => {
  return (
    <PageSection>
      <div className="mt-7">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
          Tracks
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default Tracks;
