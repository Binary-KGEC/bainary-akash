import Link from "next/link";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";


const Navbar = () => {
  return (
    <div className="bg-black py-2">
      <header>
        <MaxWidthWrapper>
          <div className="flex justify-between ">
            <div className="w-[64px] h-[64px] rounded-full bg-blue-600"></div>
            <div className="flex justify-between gap-4 items-center">
              {items.map((item) => {
                return (
                  <Button key={item.name} className={cn("bg-black text-white hover:bg-[#16783C] font-pixelate hover:font-bold hover:text-white rounded-none w-[96px] flex justify-center")}>
                    {item.name}
                  </Button>
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
