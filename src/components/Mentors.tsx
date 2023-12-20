import Image from "next/image";
import React from "react";
import BinaryText from "./BinaryText";
import MentorCard from "./MentorCard";
import PageSection from "./PageSection";
import Marquee from "react-fast-marquee";
import demoProfileImg from "../../public/demoprofile.png";
import demoProfileImg2 from "../../public/demoprofile.png";

const MENTOR_INFO = [
  {
    name: "Demo Profile 1",
    description: "something...",
    imgUrl: demoProfileImg.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 2",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 3",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 4",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 5",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 6",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 7",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Demo Profile 8",
    description: "something...",
    imgUrl: demoProfileImg2.src, // Convert StaticImageData to string using .src
    twitterUrl: "#",
    linkedinUrl: "#",
  },
];

const Mentors = () => {
  return (
    <PageSection id="mentors">
      <div className="mt-[96px] md:mt-[116px]">
        <BinaryText
          className="text-white font-pixelate text-[2rem] md:text-[3rem] text-center"
          reveal
        >
          Mentors
        </BinaryText>

        <span className="font-pixelate text-white md:text-[1.5rem]">
          Meet our amazing mentors
        </span>

        <div className="mt-10">
          <div className="flex items-center">
            <Marquee gradient={false} pauseOnHover={true} direction="left" speed={70}>
              {MENTOR_INFO.map((mentor) => (
                <MentorCard key={mentor.name} {...mentor} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </PageSection>
  );
};

export default Mentors;
