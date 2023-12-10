import { useRef, RefObject } from "react";
import { useScroll, motion } from "framer-motion";

interface IconProps {
  refrence: RefObject<HTMLElement>;
}

const Icon: React.FC<IconProps> = ({ refrence }) => {
  const { scrollYProgress } = useScroll({
    target: refrence,
    offset: ["center end", "center center"],
  });

  return (
    <figure className="absolute left-0 stroke-green-600 ">
      <svg className="-rotate-90 mx:w-[60px] mx:h-[60px] xs:w-[60px] xs:h-[60px]" width="75" height="75" viewBox="0 0 100 100">
        <circle cx="75" cy="50" r="23" className="stroke-none  stroke-3 fill-black" />
        <motion.circle style={{pathLength: scrollYProgress}} cx="75" cy="50" r="23" className="stroke-[5px] fill-none" />
        
        
      </svg><svg className="absolute left-7 top-2 " height="19" viewBox="0 0 20 20">
        <path className="animate-pulse stroke-1 fill-green-100"viewBox="0 0 20 20"   d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" /></svg>
    </figure>
  );
};

export default Icon;
