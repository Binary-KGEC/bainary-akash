"use client"
import PageSection from "./PageSection";
import BinaryText from "./BinaryText";
import useTextScramble from "./text";

const Prizes = () => {

  return (
    <PageSection>
      <div
        id="prizes"
        className="flex flex-col text-white"
      >
        <div className="mt-[96px] md:mt-[116px]">
          <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
          <div className="text-white" >Prizes</div>
          </BinaryText>
        </div>
        <div className="my-5 mx-auto font-pixelate">
          <div className="text-[1rem] md:text-[1.5rem]"><div className="text-white">comming soon</div></div>
        </div>
      </div>
    </PageSection>
  );
};

export default Prizes;
