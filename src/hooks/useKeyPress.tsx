import { useEffect } from "react";

export function useKeyPress(
  callback: (e: KeyboardEvent) => void,
  keyCodes: string[]
): void {
  const handler = (e: KeyboardEvent) => {
    if (keyCodes.includes(e.code)) {
      callback(e);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handler);
    return () => {
      window.removeEventListener("keydown", handler);
    };
  }, []);
}
