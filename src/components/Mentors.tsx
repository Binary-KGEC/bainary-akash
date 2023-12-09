import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";

const Mentors = () => {
  const phrases = [
    " Mentors"
   ];
   
   const textRef = useTextScramble(phrases);
  return (
    <PageSection id="mentors">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem]" reveal>
        <div className="text-white" ref={textRef}></div>
          
        </BinaryText>
      </div>
    </PageSection>
  );
};

export default Mentors;
