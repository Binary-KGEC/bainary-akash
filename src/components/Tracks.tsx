import { TypeAnimation } from "react-type-animation";
import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import useTextScramble from "./text";

const Tracks = () => {
  return (
    <div id="tracks" className="mt-[96px] md:mt-[116px] flex justify-center items-center">
      <div className="mt-20 text-center">
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
          <div className="text-white">Tracks</div>
        </BinaryText>
        <div className="flex text-center justify-center mt-10 items-center font-pixelate font-bold text-3xl text-green-500">
          <TypeAnimation sequence={[500, `Coming Soon...`]} speed={80} />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
