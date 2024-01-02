import { TypeAnimation } from "react-type-animation";
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";

const Tracks = () => {
  return (
    <div id="tracks" className="mt-[96px] md:mt-[116px] ">
      <div className="mt-20 text-center">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
        
        <div className="text-white text-shadow-lg sm:hidden text-center shad index-z skew-x-6 mb-20 shadow-md bg-gradient-to-br from-green-950/40 to-green-700/40 shadow-green-700  " >Tracks</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      03.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
    Tracks
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
        </BinaryText>
        <div className="flex text-center justify-center mt-10 items-center font-pixelate font-bold text-3xl text-green-500">
          <TypeAnimation sequence={[500, `Coming Soon...`]} speed={80} />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
