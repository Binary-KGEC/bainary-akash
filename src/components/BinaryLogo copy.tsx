"use client";
import logo1 from "./logo.svg"
import React from "react";
import { motion } from "framer-motion";
import "./logo.css";
import { useGlitch, GlitchHandle } from 'react-powerglitch';
import Image from "next/image";
const BinaryLogo2 = () => {
  const glitch = useGlitch({
    "playMode": "always",
    "createContainers": true,
    "hideOverflow": true,
    "timing": {
      "duration": 650
    },
    "glitchTimeSpan": {
      "start": 0.5,
      "end": 0.7
    },
    "shake": {
      "velocity": 15,
      "amplitudeX": 0.2,
      "amplitudeY": 0.2
    },
    "slice": {
      "count": 6,
      "velocity": 15,
      "minHeight": 0.02,
      "maxHeight": 0.15,
      "hueRotate": true
    },
    "pulse": false
  });

  return (
    <div className="bg-transparent "  id="home">
          <img src="/thumbnail.png" ref={glitch.ref} />
      
    </div>
  );
};

export default BinaryLogo2;
