"use client"

import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";

const BinaryText = ({
  className,
  text,
}: {
  className?: string;
  text: string;
}) => {
  const letters = "01010110111101001001";
  const [headlineText, setHeadlineText] = useState<string>(text);

  const handleMouseOver = () => {
    let iteration = 0;
    let requestId: number | null = null;
    const { length } = headlineText;

    const scrambleText = () => {
      setHeadlineText((prevText) => {
        const scrambledText = prevText
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * length)];
          })
          .join("");

        iteration += 1 / text.length;

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
    <span onMouseOver={handleMouseOver} className={cn("font-pixelate", className)}>
      {headlineText}
    </span>
  );
};

export default BinaryText;