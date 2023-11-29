import PageSection from "./PageSection";
import BinaryText from "./BinaryText";
import Image from "next/image";
import Link from "next/link";

const Sponsors = () => {
  return (
    <PageSection>
      <div
        id="sponsors_section"
        className="flex flex-col mb-20 my-5 sm:mb-20 text-white font-pixelate"
      >
        <div>
          <BinaryText className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold" reveal>
            Sponsors
          </BinaryText>


          <div className="flex items-center justify-center flex-col">
            <h2 className="text-[2rem] md:text-[3rem] text-center font-bold my-8">
              Tera Sponsor
            </h2>
            <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#1C1,0_0_15px_#0A0,0_0_30px_#060]">
              <div className="text-center">
                {/* <Link href="/">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </Link> */}
                Coming Soon...
              </div>
              {/* <div className="">
                <Link href="/">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </Link>
              </div> */}
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl text-center font-bold my-8">
              Gega Sponsor
            </h2>
            <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#1C1,0_0_15px_#0A0,0_0_30px_#060]">
              <div className="text-center">
                {/* <Link href="/">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </Link> */}
                Coming Soon...
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl text-center font-bold my-8">
              Mega Sponsor
            </h2>
            <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#1C1,0_0_15px_#0A0,0_0_30px_#060]">
              <div className="text-center">
                {/* <Link href="/">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </Link> */}
                Coming Soon...
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center flex-col">
            <h2 className="text-4xl text-center font-bold my-8">
              Kilo Sponsor
            </h2>
            <div className="w-[calc(80vw)] md:w-[calc(60vw)] backdrop-blur-sm bg-black/5 p-5 grid grid-cols-1 gap-4 border-2 rounded-lg border-sky-200 shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#1C1,0_0_15px_#0A0,0_0_30px_#060]">
              <div className="text-center">
                {/* <Link href="/">
                  <Image
                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
                    width={300}
                    height={300}
                    alt="Picture of the author"
                  />
                </Link> */}
                Coming Soon...
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Sponsors;
