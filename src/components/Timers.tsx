import { useEffect, useRef, useState } from "react";
import { useDraggable } from "../hooks/useDraggable";
import { useCountdown } from "../hooks/useCountdown";
import { Timer } from "../types/Timer";
import { beep } from "../util/beep";
import "./Timers.css";

function formatTime(seconds: number): string {
  const isNegative = seconds < 0;

  const absTime = Math.abs(seconds);
  const minutePart = String(Math.floor(absTime / 60)).padStart(2, "0");
  const secondPart = String(absTime % 60).padStart(2, "0");
  return `${isNegative ? "-" : ""}${minutePart}:${secondPart}`;
}

type TimerItemProps = Timer & {
  onRemoveTimer: (id: string) => void;
  timers: Timer[];
};

const HEIGHT = 120; //px

const TimerItem = ({
  id,
  name,
  time,
  onRemoveTimer,
  timers,
}: TimerItemProps) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  const initial = useRef([0, -1 * (timers.length - 1) * HEIGHT]);
  const [x, y] = useDraggable(draggableRef, initial.current);

  const style = { transform: `translate3d(${x}px, ${y}px, 0)` };

  const { current, isPaused, isDone, reset, togglePause } = useCountdown(time);

  // Beep
  useEffect(() => {
    if (isDone) {
      beep(200, 300, 3);
      const interval = setInterval(() => {
        beep(200, 300, 3);
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [isDone]);

  const value = formatTime(current);

  return (
    <div
      className={`timer ${isDone ? "done" : ""}`}
      style={style}
      ref={draggableRef}
    >
      <div className="timer-buttons">
        <button
          type="button"
          title={isPaused ? "Play" : "Pause"}
          onClick={() => togglePause()}
        >
          {isPaused ? "⏵" : "⏸"}
        </button>
        <button type="button" title="Reset" onClick={() => reset()}>
          ↺
        </button>
        <button title="Remove" onClick={() => onRemoveTimer(id)}>
          ❌
        </button>
      </div>
      <span className="title">{name}</span>
      <input type="time" readOnly value={value} />
    </div>
  );
};

type TimersProps = {
  timers: Timer[];
  setTimers: (timers: Timer[]) => void;
};

export const Timers = ({ timers, setTimers }: TimersProps) => {
  const removeTimer = (id: string) => {
    setTimers(timers.filter((t) => t.id !== id));
  };

  return (
    <>
      {timers.map((timer) => (
        <TimerItem
          key={timer.id}
          {...timer}
          onRemoveTimer={removeTimer}
          timers={timers}
        />
      ))}
    </>
  );
};
