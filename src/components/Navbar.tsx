'use client'
import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";
import Image from "next/image";
import NavItem from "./NavItem";
import { useGlitch, GlitchHandle } from 'react-powerglitch';


const Navbar = () => {
  const glitch = useGlitch({
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": true,
    "timing": {
      "duration": 6050
    },
    "glitchTimeSpan": {
      "start": 0.5,
      "end": 0.7
    },
    "shake": {
      "velocity": 9,
      "amplitudeX": 0.1,
      "amplitudeY": 0.1
    },
    "slice": {
      "count": 2,
      "velocity": 5,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  });
  return (
    <div className="bg-black/0 py-7 sticky top-0 z-50">
      <header>
        <MaxWidthWrapper>
          <div className="flex justify-between ">
            <div className="relative w-[150px] h-[60px]" ref={glitch.ref}>
              <Image className='glitch' src="/thumbnail.png" alt="Binary Hackathon" fill />
            </div>
            <div className="flex justify-between gap-10 items-center">
              {items.map((item) => {
                return (
                  <NavItem key={item.name} name={item.name} link={item.link} />
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>
      </header>
    </div>
  );
};

export default Navbar;
