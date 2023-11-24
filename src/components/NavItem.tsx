import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import styles from "./NavItem.module.css";

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
        {name}
      </a>
      <span className=""></span>
    </div>
  );
};

export default NavItem;
