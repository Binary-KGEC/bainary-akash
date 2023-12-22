"use client";

import React, { useState, useEffect } from "react";
import styles from "./CountdownClock.module.css";
import { cn } from "@/lib/utils";
import { useGlitch, GlitchHandle } from "react-powerglitch";
interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownClock: React.FC = () => {
  const glitch = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: true,
    timing: {
      duration: 7050,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 10,
      amplitudeX: 0.1,
      amplitudeY: 0.1,
    },
    slice: {
      count: 3,
      velocity: 5,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
    pulse: false,
  });

  const [countdownDate, setCountdownDate] = useState<number>(
    new Date("2/16/2024").getTime()
  );

  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const setNewTime = () => {
    if (countdownDate) {
      const currentTime = new Date().getTime();
      const distanceToDate = countdownDate - currentTime;

      let days = Math.floor(distanceToDate / (1000 * 60 * 60 * 24));
      let hours = Math.floor(
        (distanceToDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      let minutes = Math.floor(
        (distanceToDate % (1000 * 60 * 60)) / (1000 * 60)
      );
      let seconds = Math.floor((distanceToDate % (1000 * 60)) / 1000);

      const numbersToAddZeroTo = [1, 2, 3, 4, 5, 6, 7, 8, 9];

      days = parseInt(`${days}`);
      if (numbersToAddZeroTo.includes(hours)) {
        hours = parseInt(`0${hours}`);
      } else if (numbersToAddZeroTo.includes(minutes)) {
        minutes = parseInt(`0${minutes}`);
      } else if (numbersToAddZeroTo.includes(seconds)) {
        seconds = parseInt(`0${seconds}`);
      }

      setState({ days, hours, minutes, seconds });
    }
  };

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [setNewTime]);

  return (
    <div className="w-full mx-auto">
    <div className={cn("font-pixelate", styles.countdownWrapper)}>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">{state.days || "0"}</div>
        <small className="time-text">Days</small>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">:</div>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">{state.hours || "00"}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">:</div>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">{state.minutes || "00"}</div>
        <small className="time-text">Minutes</small>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">:</div>
      </div>
      <div className={styles.timeSection}>
        <div className="text-bold md:text-3xl">{state.seconds || "00"}</div>
        <small className="time-text">Seconds</small>
      </div>
    </div>
  </div>
  );
};

export default CountdownClock;
