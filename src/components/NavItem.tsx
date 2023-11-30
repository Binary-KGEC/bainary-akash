"use client"
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";
import styles from "./NavItem.module.css";
import React, { useState, useRef } from 'react';

const NavItem = ({ name, link }: { name: string; link: string }) => {
  return (
    <div className="relative flex py-2 h-12 items-center">
      <a
        href={link}
        className={cn(
          "underline-hover gap-5 w-[84px] text-white hover:bg-green-900 text-md hover:text-lg font-pixelate hover:font-bold hover:text-white rounded-none flex justify-center",
          styles.underlineHover
        )}
      >
        <span>{name}</span>
        
      </a>
      <span className=""></span>
    </div>
  );
};

export default NavItem;
