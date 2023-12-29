import { useState, useEffect } from "react";
import Image from "next/image";
import { RiMenu4Line } from "react-icons/ri";
import { motion, useAnimation } from "framer-motion";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";
import NavItem from "./NavItem";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { AiOutlineClose } from "react-icons/ai";
import logo from "../../public/thumbnail.png";

const Navbar = ({ heroTopInView }: { heroTopInView: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const controls = useAnimation();

  useEffect(() => {
    controls.start(isOpen ? "open" : "closed");
  }, [isOpen, controls]);

  const menuVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: "-100%" },
  };

  const menuButtonVariants = {
    open: { rotate: 180 },
    closed: { rotate: 0 },
  };

  return (
    <motion.div
      className="py-3 md:py-4 fixed top-0 z-50 w-full
        backdrop-filter backdrop-blur-md bg-opacity-50 bg-green-950/70"
    >
      <MaxWidthWrapper>
         {/* Desktop and Tablet navigation */}
         <div className="hidden lg:flex justify-between items-center">
              <div className="relative w-[100px] h-[40px]">
                <Image
                  className="glitch"
                  src={logo}
                  alt="Binary Hackathon"
                  
                />
              </div>

              <ul className="flex gap-4">
                {items.map((item) => (
                  <NavItem
                    key={item.name}
                    name={item.name}
                    link={item.link}
                    isActive={false}
                  />
                ))}
              </ul>
            </div>
{/* mobile navigation */}
        <div className="flex flex-col lg:hidden">
          <div className="flex justify-between items-center">
            <div className="relative w-[100px] h-[40px]">
              <Image
                className="glitch"
                src={logo}
                alt="Binary Hackathon"
              />
            </div>
            <motion.button
              type="button"
              className="rounded-none bg-transparent overflow-hidden"
              onFocus={() => setIsOpen(true)}
              onClick={() => setIsOpen((prev) => !prev)}
              variants={menuButtonVariants}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                className="text-white text-lg "
                variants={{ open: { opacity: 1 }, closed: { opacity: 1 } }}
              >
                {isOpen ? (
                  <AiOutlineClose size={32} />
                ) : (
                  <RiMenu4Line size={32} />
                )}
              </motion.div>
            </motion.button>
          </div>

          {isOpen && (
            <motion.div
              className={cn("absolute inset-x-0 top-full text-sm", {
                "animate-in fade-in-10 slide-in-from-top-5 bg-opacity-90 backdrop-filter backdrop-blur-md": !isOpen,
              })}
              variants={menuVariants}
              transition={{ ease: "easeOut", duration: 0.3 }}
            >
              <motion.div initial={{opacity:0,x:"100%"}}
              animate={{opacity:1,x:"0%"}}  className="absolute inset-0 top-1/2 transform -translate-y-1/2 shadow bg-black bg-opacity-90 backdrop-filter backdrop-blur-md h-screen">
                <ul className="relative flex flex-col items-center gap-2 justify-around ">
                  {items.map((item) => (
                    <NavItem
                      key={item.name}
                      name={item.name}
                      link={item.link}
                      isActive={false}
                      setIsOpen={setIsOpen}
                    />
                  ))}
                </ul>
                
              </motion.div>
            </motion.div>
          )}
        </div>
      </MaxWidthWrapper>
    </motion.div>
  );
};

export default Navbar;
