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
            > <div className="text-white text-center" >Sponsors</div>
             
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
                <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-green-700 shadow-md shadow-green-700/65">
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
