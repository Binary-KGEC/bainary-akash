"use client";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

import React, { useState, useRef, Dispatch, SetStateAction } from "react";
import { useGlitch } from "react-powerglitch";

const NavItem = ({
  name,
  link,
  isActive,
  setIsOpen,
}: {
  name: string;
  link: string;
  isActive: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
}) => {
  const glitch = useGlitch({
    playMode: "hover",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 250,
      iterations: 1,
    },
    glitchTimeSpan: {
      start: 0,
      end: 1,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

 

  return (
    <li
      ref={glitch.ref}
      className="relative flex py-2 h-12 items-center"
      onClick={() => {
        if (setIsOpen) setIsOpen(false);
      }}
    >
      <a
        href={link}
        className={cn(
          "gap-5 w-[84px] bg-black/0 text-white text-md hover:text-md font-pixelate hover:font-bold hover:text-white rounded-none flex justify-center text-sm",
          
        )}
      >
        <span>{name}</span>
      </a>
      <span className=""></span>
    </li>
  );
};

export default NavItem;
