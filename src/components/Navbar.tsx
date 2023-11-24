import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";
import Image from "next/image";
import NavItem from "./NavItem";


const Navbar = () => {
  return (
    <div className="bg-black/0 py-7 sticky">
      <header>
        <MaxWidthWrapper>
          <div className="flex justify-between ">
            <div className="relative w-[150px] h-[60px]">
              <Image src="/thumbnail.png" alt="Binary Hackathon" fill />
            </div>
            <div className="flex justify-between gap-10 items-center">
              {items.map((item) => {
                return (
                  <NavItem name={item.name} link={item.link} />
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
