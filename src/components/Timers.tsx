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
  pauseTimer: (id: number) => void;
  key: any;
};

const TimerModal = ({
  timer,
  setTime,
  pauseTimer,
  onRemoveTimer,
}: TimerModalProps) => {
  const draggableRef = useRef<HTMLDivElement>(null);

  const [x, y] = useDraggable(draggableRef);

  const style = { transform: `translate3d(${x}px, ${y}px, 0)` };

  // Count down
  useEffect(() => {
    const timeout = setTimeout(() => {
      setTime(timer.id, timer.time - (timer.paused ? 0 : 1));
    }, 1000);

    return () => clearTimeout(timeout);
  }, [timer, setTime]);

  // Beep
  useEffect(() => {
    if (timer.time <= 0 && !timer.paused) {
      beep(200, 350, 5);
    }
  }, [timer]);

  const value = getTime(timer.time);
  const isDone = timer.time <= 0 && !timer.paused;

  return (
    <div
      className={`timer ${isDone ? "done" : ""}`}
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
      <input type="time" value={value} />

      <div className="timer-buttons">
        <button onClick={() => pauseTimer(timer.id)}>
          {timer.paused ? "⏵" : "⏸"}
        </button>
        <button onClick={() => setTime(timer.id, timer.time + 1)}>+1s</button>
        <button onClick={() => setTime(timer.id, timer.time + 5)}>+5s</button>
        <button onClick={() => setTime(timer.id, timer.time + 60)}>+1m</button>
        <button onClick={() => setTime(timer.id, timer.time + 300)}>+5s</button>
      </div>
    </div>
  );
};

type TimersProps = {
  timers: Timer[];
  setTimers: (timers: Timer[]) => void;
};

export const Timers = ({ timers, setTimers }: TimersProps): JSX.Element => {
  const updateTimer = (id: number, time: number) => {
    setTimers(timers.map((t) => (t.id === id ? { ...t, time } : t)));
  };

  const removeTimer = (id: number) =>
    setTimers(timers.filter((t) => t.id !== id));

  const pauseTimer = (id: number) => {
    setTimers(
      timers.map((t) => (t.id === id ? { ...t, paused: !t.paused } : t))
    );
  };

  return (
    <>
      {timers.map((timer) => (
        <TimerModal
          timer={timer}
          key={timer.id}
          setTime={updateTimer}
          pauseTimer={pauseTimer}
          onRemoveTimer={removeTimer}
        />
      ))}
    </>
  );
};
