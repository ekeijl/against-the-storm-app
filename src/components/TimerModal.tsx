import { useState, useRef, useEffect, useId } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

import type { Timer } from "../types/Timer";

type TimerModalProps = {
  show: boolean;
  onCancel: () => void;
  onOk: (id: string, name: string, time: number) => void;
  timers: Timer[];
};

export const TimerModal = ({
  show,
  onOk,
  onCancel,
  timers,
}: TimerModalProps) => {
  const id = useId();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);
  const [name, setName] = useState("Timer " + (timers.length + 1));
  const [time, setTime] = useState("05:00");

  const handleKey = (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      onSubmit();
    }
  };
  useOnClickOutside(dialogRef, onCancel);
  useEventListener("keypress", handleKey);

  const onSubmit = () => {
    const [m, s] = time.split(":");

    if (m && s) {
      const time = Number(m) * 60 + Number(s);
      onOk(id, name, time);
    }
  };

  useEffect(() => {
    const dialog = dialogRef.current as any;
    if (show) {
      dialog.showModal();
      timeRef?.current?.focus();
    } else {
      dialog.close();
    }
    return () => dialog.close();
  }, [show]);

  return (
    <dialog id="add-timer" ref={dialogRef} className={show ? "" : "hidden"}>
      <h3>Add timer</h3>
      <input
        name="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        name="time"
        ref={timeRef}
        type="time"
        value={time}
        min="00:00"
        onChange={(e) => setTime(e.target.value)}
      />
      <div className="footer">
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="submit" className="confirm" onClick={() => onSubmit()}>
          OK
        </button>
      </div>
    </dialog>
  );
};
