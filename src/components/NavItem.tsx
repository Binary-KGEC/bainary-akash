import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import styles from "./NavItem.module.css";

const NavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="relative h-12">
      <Button
        className={cn(
          "underline-hover bg-black text-white hover:bg-black text-md hover:text-lg font-pixelate hover:font-bold hover:text-white rounded-none w-[96px] flex justify-center",
          styles.underlineHover
        )}
      >
        {name}
      </Button>
      <span className=""></span>
    </div>
  );
};

export default NavItem;
