import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";
const Tracks = () => {
 
  return (
    <PageSection id="tracks">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
        <div className="text-white" >Tracks</div>
          
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default Tracks;
