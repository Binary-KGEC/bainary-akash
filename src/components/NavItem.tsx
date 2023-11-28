"use client"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import styles from "./NavItem.module.css";
import React, { useState, useRef } from 'react';
const Headline = ({ text }: { text: string }) => {
  const letters = '010101100111101001001';
  const [headlineText, setHeadlineText] = useState<string>(text);

  const handleMouseOver = () => {
    let iteration = 0;
    let requestId: number | null = null;
    const { length } = headlineText;

    const scrambleText = () => {
      setHeadlineText(prevText => {
        const scrambledText = prevText
          .split('')
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * length)];
          })
          .join('');

        iteration += 1 / 9;

        if (iteration >= length) {
          setHeadlineText(text);
          cancelAnimationFrame(requestId!);
        }

        return scrambledText;
      });

      requestId = requestAnimationFrame(scrambleText);
    };

    requestId = requestAnimationFrame(scrambleText);
  };

  return (
    <h1 onMouseOver={handleMouseOver}>
      {headlineText}
    </h1>
  );
};
const NavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="relative h-12">
      <a
        href={link}
        className={cn(
          "underline-hover gap-5 w-[84px] text-white hover:bg-black text-md hover:text-lg font-pixelate hover:font-bold hover:text-white rounded-none flex justify-center",
          styles.underlineHover
        )}
      >
        <Headline text={name}/>
        
      </a>
      <span className=""></span>
    </div>
  );
};

export default NavItem;
