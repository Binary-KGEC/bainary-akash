import PageSection from "./PageSection";
import BinaryText from "./BinaryText";
import Image from "next/image";
import Link from "next/link";
import { sponsorItems } from "@/lib/config";
import useTextScramble from "./text";

const Sponsors = () => {
 
  return (
    <PageSection>
      <div
        id="sponsors"
        className="flex flex-col mb-10 sm:mb-10 text-white font-pixelate"
      >
        <div>
          <div className="mt-[96px] md:mt-[116px] mb-20">
            <BinaryText
              className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold"
              reveal
            > 
         <div className="text-white text-shadow-lg sm:hidden text-center shad index-z skew-x-6 mb-20 shadow-md bg-gradient-to-br from-green-950/40 to-green-700/40 shadow-green-700  " >Sponsors</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      07.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
      Sponsors
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
            </BinaryText>
          </div>

          {sponsorItems.map((sponsorItem) => {
            return (
              <div
                className="flex items-center justify-center flex-col m-16"
                key={sponsorItem.title}
              >
                <h2 className="text-[1.5em] md:text-[2rem] text-center font-bold mb-8">
                  {sponsorItem.title}
                </h2>
                <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-green-700 shadow-md shadow-green-700/80">
                  {sponsorItem.sponsors.length == 0 ? (
                    sponsorItem.sponsors.map((sponsor) => (
                      <div className="text-center" key={sponsor.link}>
                        <Link href={sponsor.link}>
                          <Image
                            src={sponsor.logo}
                            width={300}
                            height={300}
                            alt={sponsor.alt}
                          />
                        </Link>
                      </div>
                    ))
                  ) : (
                    <div className="text-center" key="default">
                      Coming Soon...
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageSection>
  );
};

export default Sponsors;
