import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import { timelineItems } from "@/lib/config";
import useTextScramble from "./text";
const Timeline = () => {
  const phrases = [
    " Timeline"
   ];
   
   const textRef = useTextScramble(phrases);
  return (
    <PageSection id="timeline">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText
          className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold"
          reveal
        ><div className="text-white" ref={textRef}></div>
         
        </BinaryText>
        <div className="flex flex-col my-5 sm:my-0 md:h-[calc(50vh)] justify-center items-center text-white">
          <ol className="items-center sm:flex">
            {timelineItems.map((timeline) => {
              return (
                <li
                  key={timeline.title}
                  className="relative mb-6 pb-1 md:w-[calc(14vw)] md:h-[calc(20vh)] sm:mb-0 backdrop-blur-sm bg-black/50 rounded-md md:rounded-none"
                >
                  <div className="flex items-center">
                    <div className="z-10 flex items-center justify-center w-5 h-5 md:w-6 md:h-6 rounded-full ring-1 shadow-green-700 md:ring-4 ring-green-900 shrink-0">
                      <svg
                        className="w-2.5 h-2.5 shadow-green-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                      </svg>
                    </div>
                    <div className="hidden sm:flex w-full h-0.5 bg-green-700"></div>
                  </div>
                  <div className="mt-1 md:mt-3 mx-2">
                    <h3 className="text-md font-semibold text-white">
                      {timeline.title}
                    </h3>
                    <time className="block mb-2 text-sm font-normal leading-none text-gray-500">
                      {timeline.date}
                    </time>
                    <p className="text-base font-normal text-green-700 mt-6 ml-2 mb-2">
                      {timeline.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </PageSection>
  );
};

export default Timeline;
