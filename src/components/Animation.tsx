

import react from "react"
import {motion} from "framer-motion"
import PixelBackground from "./centered";
const Transition = () => {
  return (
   <>{/*<motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-green-950'
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{duration:0.8,ease:"easeInOut"}} />
<motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-green-800'
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{duration:0.2,ease:"easeInOut"}} />
   <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-green-700'
   initial={{x:"100%",width:"100%"}}
   animate={{x:"0%",width:"0%"}}
   transition={{duration:0.4,ease:"easeInOut"}} />*/}
   <PixelBackground/>
   </>
  );
}

export default Transition;
