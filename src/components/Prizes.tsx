import PageSection from "./PageSection";
import BinaryText from "./BinaryText";

const Prizes = () => {
  return (
    <PageSection>
      <div
        id="prizes"
        className="flex flex-col text-white"
      >
        <div className="mt-[96px] md:mt-[116px]">
          <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
            Prizes
          </BinaryText>
        </div>
        <div className="my-5 mx-auto font-pixelate">
          <p className="text-[1rem] md:text-[1.5rem]">Coming Soon...</p>
        </div>
      </div>
    </PageSection>
  );
};

export default Prizes;
