"use client"
import PageSection from "./PageSection";
import BinaryText from "./BinaryText";
import useTextScramble from "./text";

const Prizes = () => {
  const phrases = [
   "comming soon"
  ];
  const phrases2 = [
    "Prizes"
   ];
  const textRef = useTextScramble(phrases);
  const textRef2 = useTextScramble(phrases2);
  return (
    <PageSection>
      <div
        id="prizes"
        className="flex flex-col text-white"
      >
        <div className="mt-[96px] md:mt-[116px]">
          <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
          <div className="text-white" ref={textRef2}></div>
          </BinaryText>
        </div>
        <div className="my-5 mx-auto font-pixelate">
          <div className="text-[1rem] md:text-[1.5rem]"><div className="text-white" ref={textRef}></div></div>
        </div>
      </div>
    </PageSection>
  );
};

export default Prizes;
