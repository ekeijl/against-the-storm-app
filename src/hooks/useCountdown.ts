import { useEffect, useState } from "react";

export const useCountdown = (time: number) => {
  const [count, setCount] = useState(time);
  const [paused, setPaused] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (paused) {
      return;
    }

    const interval = setInterval(() => {
      setCount((prev) => prev - 1);
    }, 1000);

    if (count <= 0) {
      setIsDone(true);
      clearInterval(interval);
      return;
    }

    return () => clearInterval(interval);
  }, [count, time, paused]);

  return {
    current: count,
    isPaused: paused,
    isDone,
    pause: () => setPaused(true),
    start: () => setPaused(false),
    reset: () => {
      setIsDone(false);
      setCount(time);
    },
    togglePause: () => {
      setPaused(!paused);
    },
  };
};
