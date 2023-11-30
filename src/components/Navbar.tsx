"use client";
import Link from "next/link";

import MaxWidthWrapper from "./MaxWidthWrapper";
import { Button, buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";
import { items } from "@/lib/config";
import Image from "next/image";
import NavItem from "./NavItem";
import { useGlitch, GlitchHandle } from "react-powerglitch";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="bg-green-900 py-3 md:py-4 sticky top-0 z-50">
      <header>
        <MaxWidthWrapper>
          <div className="hidden md:flex justify-between ">
            <div className="relative w-[150px] h-[60px]">
              <Image
                className="glitch"
                src="/thumbnail.png"
                alt="Binary Hackathon"
                fill
              />
            </div>

            <div className="flex justify-between gap-10 items-center">
              {items.map((item) => {
                return (
                  <NavItem key={item.name} name={item.name} link={item.link} />
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>

        <div className="flex flex-col md:hidden">
          <MaxWidthWrapper>
            <div className="flex justify-between">
              <div className="relative w-[100px] h-[40px]">
                <Image
                  className="glitch"
                  src="/thumbnail.png"
                  alt="Binary Hackathon"
                  fill
                />
              </div>
              <Button
                variant="default"
                className="rounded-none bg-green-500 hover:bg-green-600"
                onFocus={() => {
                  setIsOpen(true);
                }}
                onClick={() => {
                  setIsOpen((prev) => !prev);
                }}
              >
                {isOpen ? <X className="text-black" /> : <Menu className="text-black" />}
              </Button>
            </div>
          </MaxWidthWrapper>

          {/* TODO: prevent scrolling while menu is open */}
          {isOpen && (
            <div
              className={cn("absolute inset-x-0 top-full text-sm", {
                "animate-in fade-in-10 slide-in-from-top-5": !isOpen,
              })}
            >
              <div className="absolute inset-0 top-1/2 shadow">
                <div
                  className="relative flex flex-col items-center gap-2 justify-around bg-black"
                >
                  {items.map((item) => {
                    return (
                      <NavItem
                        key={item.name}
                        name={item.name}
                        link={item.link}
                      />
                    );
                  })}
                </div>
                <div className="h-[500px] bg-black"></div>
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
};

export default Navbar;
