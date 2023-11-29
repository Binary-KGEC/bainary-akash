import PageSection from "./PageSection";
import BinaryText from "./BinaryText";

const Prizes = () => {
  return (
    <PageSection>
      <div
        id="prizes_section"
        className="flex flex-col my-7 text-white"
      >
        <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem]" reveal>
          Prizes
        </BinaryText>
        <div className="my-5 font-pixelate">
          <p className="">Coming Soon...</p>
        </div>
      </div>
    </PageSection>
  );
};

export default Prizes;
