"use client";
import React, { useState } from "react";
import PageSection from "./PageSection";
import { faqItems } from "@/lib/config";
import { TypeAnimation } from "react-type-animation";

const FAQs = () => {
  const [expandedItemIndex, setExpandedItemIndex] = useState<number | null>(
    null
  );

  return (
    <PageSection>
      <div
        id="faq_section"
        className="flex flex-col mb-20 my-5 sm:mb-20 justify-center items-center text-white"
      >
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-4xl text-center font-bold my-16 sm:mt-24 mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto md:w-[calc(50vw)] mt-8 space-y-4 md:mt-16 font-pixelate">
            <ul className="max-w-2xl mx-auto mt-20 divide-y backdrop-blur-sm bg-black/50 shadow shadow-green-700 rounded-xl">
              {faqItems.map((faq, index) => {
                return (
                  <li key={index} className="group">
                    <div
                      onClick={() => {
                        setExpandedItemIndex((prevIndex) =>
                          prevIndex === index ? null : index
                        );
                      }}
                      className="flex items-center justify-between gap-3 px-4 py-3 font-medium marker:content-none hover:cursor-pointer shadow-green-700"
                    >
                      <span className="text-lg">{faq.question}</span>

                      <svg
                        className={`w-5 h-5 text-gray-500 transition group-hover:text-gray-300 group-active:text-gray-200 ${
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
                        <p className="px-4">
                          <TypeAnimation
                            sequence={[2500, `${faq.answer}`]}
                            speed={50}
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
