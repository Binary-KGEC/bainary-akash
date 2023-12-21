import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";
import NavItem from "./NavItem";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button } from "./ui/button";
import logo from "../../public/thumbnail.png"
const Navbar = ({ heroTopInView }: { heroTopInView: boolean }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <div
        className={cn("py-3 md:py-4 fixed top-0 z-50 w-full", {
          "backdrop-filter backdrop-blur-md bg-opacity-50 bg-green-950/40": heroTopInView,
          "backdrop-filter backdrop-blur-md bg-opacity-50 bg-green-950/70 ": !heroTopInView,
          "backdrop-filter backdrop-blur-md bg-opacity-50 bg-green-950/70": isOpen,
        })}
      >
        <header>
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

            {/* Mobile navigation */}
            <div className="flex flex-col lg:hidden">
              <div className="flex justify-between items-center">
                <div className="relative w-[100px] h-[40px]">
                  <Image
                    className="glitch"
                    src={logo}
                    alt="Binary Hackathon"
                    
                  />
                </div>
                <Button
                  variant="default"
                  className="rounded-none bg-transparent hover:bg-green-950/25"
                  onFocus={() => setIsOpen(true)}
                  onClick={() => setIsOpen((prev) => !prev)}
                >
                  {isOpen ? <X className="text-white text-lg" /> : <Menu className="text-white text-lg" />}
                </Button>
              </div>

              {/* Mobile menu */}
              {isOpen && (
                <div
                  className={cn("absolute inset-x-0 top-full text-sm", {
                    "animate-in fade-in-10 slide-in-from-top-5": !isOpen,
                  })}
                >
                  <div className="absolute inset-0 top-1/2 shadow">
                    <ul className="relative flex flex-col items-center gap-2 justify-around bg-black">
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
                    <div className="h-[500px] bg-black"></div>
                  </div>
                </div>
              )}
            </div>
          </MaxWidthWrapper>
        </header>
      </div>
    </div>
  );
};

export default Navbar;
