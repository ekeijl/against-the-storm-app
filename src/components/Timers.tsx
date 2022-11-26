import { useEffect, useRef } from "react";
import useDraggable from "../hooks/useDraggable";
import { Timer } from "../types/Timer";
import { beep } from "../util/beep";
import "./Timers.css";

function getTime(seconds: number): string {
  const isNegative = seconds < 0;

  const absTime = Math.abs(seconds);
  const minutePart = String(Math.floor(absTime / 60)).padStart(2, "0");
  const secondPart = String(absTime % 60).padStart(2, "0");
  return `${isNegative ? "-" : ""}${minutePart}:${secondPart}`;
}

type TimerModalProps = {
  timer: Timer;
  setTime: (id: number, time: number) => void;
  onRemoveTimer: (id: number) => void;
  key: any;
};

const TimerModal = ({ timer, setTime, onRemoveTimer }: TimerModalProps) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  let [x, y] = useDraggable(draggableRef);

  let style = { transform: `translate3d(${x}px, ${y}px, 0)` };
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(timer.id, timer.time - 1);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, setTime]);

  useEffect(() => {
    if (timer.time <= 0) {
      beep(200, 350, 5);
    }
  }, [timer]);

  return (
    <div
      className={"timer" + (timer.time <= 0 ? " done" : "")}
      style={style}
      ref={draggableRef}
    >
      <span className="title">{timer.name}</span>
      <span
        className="close"
        role="img"
        title="remove"
        onClick={() => onRemoveTimer(timer.id)}
      >
        ❌
      </span>
      {getTime(timer.time)}
    </div>
  );
};

export const Timers = ({
  timers,
  setTimers,
}: {
  timers: Timer[];
  setTimers: (timers: Timer[]) => void;
}) => {
  const updateTimer = (id: number, time: number) => {
    setTimers(timers.map((t) => (t.id === id ? { ...t, time } : t)));
  };

  const removeTimer = (id: number) =>
    setTimers(timers.filter((t) => t.id !== id));

  return (
    <>
      {timers.map((timer) => (
        <TimerModal
          timer={timer}
          key={timer.id}
          setTime={updateTimer}
          onRemoveTimer={removeTimer}
        />
      ))}
    </>
  );
};
