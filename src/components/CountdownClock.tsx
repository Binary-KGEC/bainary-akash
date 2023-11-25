"use client";

import React, { useState, useEffect } from "react";
import styles from "./CountdownClock.module.css";
import { cn } from "@/lib/utils";

interface CountdownState {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const CountdownClock: React.FC = () => {
  const [countdownDate, setCountdownDate] = useState<number>(
    new Date("12/25/2025").getTime()
  );
  const [state, setState] = useState<CountdownState>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => setNewTime(), 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

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

  return (
    <div className={cn("font-pixelate", styles.countdownWrapper)}>
      <div className={styles.timeSection}>
        <div className={styles.time}>{state.days || "0"}</div>
        <small className="time-text">Days</small>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>:</div>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>{state.hours || "00"}</div>
        <small className="time-text">Hours</small>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>:</div>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>{state.minutes || "00"}</div>
        <small className="time-text">Minutes</small>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>:</div>
      </div>
      <div className={styles.timeSection}>
        <div className={styles.time}>{state.seconds || "00"}</div>
        <small className="time-text">Seconds</small>
      </div>
    </div>
  );
};

export default CountdownClock;
