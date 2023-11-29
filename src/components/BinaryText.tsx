"use client";

// import useIsInViewport from "@/hooks/useIsInViewport";
import { cn } from "@/lib/utils";
// import { ReactNode, useEffect, useRef, useState } from "react";

import { ReactNode, RefObject, useEffect, useMemo, useRef, useState } from "react";

// const useIsInViewport = (ref: RefObject<HTMLElement>) => {
//   const [isIntersecting, setIsIntersecting] = useState(false);

//   const observer = useMemo(
//     () =>
//       new IntersectionObserver(([entry]) =>
//         setIsIntersecting(entry.isIntersecting)
//       ),
//     []
//   );

//   useEffect(() => {
//     // if (!ref.current) return;

//     observer.observe(ref.current as Element);

//     return () => {
//       observer.disconnect();
//     };
//   }, [ref, observer]);

//   return isIntersecting;
// }


const BinaryText = ({
  className,
  children,
  reveal,
}: {
  className?: string;
  children: ReactNode;
  reveal?: boolean;
}) => {
	const text = children as string;
  const letters = "01010110111101001001";
  const [headlineText, setHeadlineText] = useState<string>(text);

  const ref = useRef<HTMLDivElement>(null);
  // const isOnScreen = useIsInViewport(ref);

  const scrambleReveal = () => {
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

  // useEffect(() => {
  //   if (isOnScreen) 
  //     scrambleReveal();
  // }, [isOnScreen]);

  return (
    <span ref={ref} className={cn("block", className)}>
      {headlineText}
    </span>
  );
};

export default BinaryText;