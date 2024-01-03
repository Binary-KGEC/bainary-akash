"use client";
import React, { useState } from "react";
import PageSection from "./PageSection";
import { faqItems } from "@/lib/config";
import { TypeAnimation } from "react-type-animation";
import BinaryText from "./BinaryText";
import useTextScramble from "./text";
const FAQs = () => {
 
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null
  );

  return (
    <PageSection>
      <div id="faqs" className="  mb-20 sm:mb-20 text-white">
        <div>
          <div className="mt-[96px] md:mt-[116px]">
            <BinaryText
              className="text-white font-pixelate text-[2rem] md:text-[3rem] font-bold"
              reveal
            ><div className="text-white text-center"></div>
                <div className="overflow-x-hidden w-full pt-5 sm:hidden text-xl shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 uppercase md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-1">
      07.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-2">
    Have a question?
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full  transform h-[4px] w-[70vh] bg-green-500 mt-[10px] ml-4"></div></div>
  </h2>
</div>
          <div className="overflow-x-hidden w-full pt-5 sm:block hidden shad relative">
  <h2 className=" flex flex-row max-w-sm md:max-w-max mx-0  font-pixelate  text-left font-bold mb-10 pt-4 md:pt-0 md:w-max relative">
  <span className="flex-none text-green-500 opacity-85 font-bold tracking-wider pl-4">
      07.
    </span>
    <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider pl-4">
    Have a question?
    </span>
    
    <div className="flex flex-col item-center justify-center ">
    
    <div className="right-full top-[55%] transform h-[4px] w-[70vh] bg-green-500 mt-[25px] ml-4"></div></div>
  </h2>
</div>
    
            </BinaryText>
          </div>
          <div className="max-w-3xl mx-auto md:w-[calc(50vw)] mt-8 space-y-4 md:mt-16 font-pixelate font-[1rem] md:font-[2rem]">
            <ul className="max-w-2xl mx-auto mt-20 divide-y backdrop-blur-sm bg-black/30 shadow-md border-green-700/80 border-2 shadow-green-700/80 rounded-xl">
              {faqItems.map((faq, index) => {
                return (
                  <li key={index} className="group">
                    <div
                      onClick={() => {
                        setExpandedItemIndex((prevIndex) =>
                          prevIndex === index ? null : index
                        );
                      }}
                      className="flex items-center justify-between gap-3 font-bold px-4 py-3 shad marker:content-none hover:cursor-pointer shadow-green-700"
                    >
                      <span className="text-lg text-white/85">{faq.question}</span>

                      <svg
                        className={`w-5 h-5 text-gray-400 transition group-hover:text-gray-300 group-active:text-gray-200 ${
                          expandedItemIndex === index ? "rotate-90" : ""
                        }`}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"
                        ></path>
                      </svg>
                    </div>

                    {expandedItemIndex === index && (
                      <div className="text-base pb-4 bg-gr0">
                        {/* <div className="w-100 bg-gray-900 h-4 p-0.5 flex items-center">
                          <div className="w-2.5 h-2.5 bg-green-500 rounded-full mx-1"></div>
                          <div className="w-2.5 h-2.5 bg-yellow-500 rounded-full mx-1"></div>
                          <div className="w-2.5 h-2.5 bg-red-500 rounded-full mx-1"></div>
                        </div> */}
                        <p className="px-4 text-white/85">
                          <TypeAnimation
                            sequence={[50, `${faq.answer}`]}
                            speed={80}
                          />
                        </p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default FAQs;
