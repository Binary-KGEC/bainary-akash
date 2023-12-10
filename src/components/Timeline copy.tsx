import BinaryText from "./BinaryText";
import PageSection from "./PageSection";
import { timelineItems } from "@/lib/config";
import useTextScramble from "./text";
import { useScroll,motion } from "framer-motion";
import { useRef } from "react";
import Icon from "./Icon";
interface DataProps {
  head: string;
  date: string;
  des: string;
  links: string;
  add: string;
}

const Data: React.FC<DataProps> = ({ head, date, des, links, add }: DataProps) => {
  const ref = useRef(null)
  return (
    <li ref={ref} className="my-8 first:mt-0 w-[60%] mx-auto flex flex-col items-center justify-between mx:w-[80%]  ">
     
      <Icon refrence={ref}/> 
      <motion.div initial={{y:50,x:150,opacity:0,scale:0.5}} className="backdrop-opacity-10 bg-green-900 bg-opacity-10 rounded-lg  backdrop-blur-3xl w-full"
      whileInView={{y:0,x:0,opacity:1,scale:1}}
      transition={{duration:0.5,type:"spring"}}>
        <h3 className="capitalize font-bold text-1.5xl font-pixelate text-green-600 sm:text-xl xs:text-lg mx-3 my-3 ">
          {head}; </h3> <a className="capitalize font-small text-0.5xl font-pixelate text-green-100 mx-3 my-3" href={links}></a>
       
        <span className="capitalize font-thin text-1.1xl  sm:text-xl xs:text-lg text-white xs:text-sm mx-3 my-3 ">
          {date} | {add}
        </span>
        <p className="font-thin text-0.4xl  text-white sm:text-xl xs:text-lg w-full mx:text-sm mx-3 my-3 ">
        {des}
        </p>
      </motion.div>
    </li>
  );
};
const Timeline2 = () => {
  const phrases = [
    " Timeline"
   ];
   
   const textRef = useTextScramble(phrases);
   const ref = useRef(null)
   const {scrollYProgress} =useScroll(
    {
      target: ref,
      offset: ["start end","center start"] 
    }
   )
  return (
   
    <PageSection id="timeline">
    <div className="my-0 overflow-hidden">
      <BinaryText
        className="text-white font-pixelate text-[2rem] mx:text-[3rem] font-bold mb-30"
        reveal
      ><div className="text-white" ref={textRef}></div>
       
      </BinaryText>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] mx:w-full">
<motion.div style={{scaleY:scrollYProgress}} className="absolute left-9 top-0 w-[4px] h-full bg-green-600 origin-top mx:w-[3px] lg:w-[4px] xs:w-[2px] mx:left-[30px]   lg:left-9 xs:left-[20px]"/>
<ul className="w-full flex flex-col items-start justify-between ml-4  xs:ml-2">
<Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://Akash.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
            <Data
              head="Resistration to"
              date="2023-01-01"
              des="Boost your career without disturbing your daily work schedule. "
              links="https://binary.com"
              add="binary Address"
            />
</ul>
      </div></div>
  </PageSection>
 
  );
};

export default Timeline2;
