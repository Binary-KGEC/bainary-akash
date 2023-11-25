import PageSection from "./PageSection";

const Prizes = () => {
  return (
    <PageSection>
      <div
        id="prizes_section"
        className="flex flex-col mb-20 my-5 sm:mb-20 justify-center items-center text-white"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl text-center font-bold my-16 sm:mt-24 mb-8">
            Prizes
          </h2>
          <div className="m-5 lg:mx-64 p-3">
            <p>Coming Soon...</p>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Prizes;
