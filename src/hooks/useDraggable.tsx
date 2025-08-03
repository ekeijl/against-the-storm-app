import { useState, RefObject } from "react";
import { useEventListener } from "usehooks-ts";

const initial = [0, 0];

/**
 * Makes the target element draggable.
 * Returns the position of the target as [x, y] position.
 * @see https://www.kirupa.com/html5/drag.htm
 * @param {React.Ref} target
 */
export function useDraggable(
  target: RefObject<HTMLElement>,
  initialPosition: number[] = initial
): [x: number, y: number] {
  const [dragging, setDragging] = useState(false);
  const [initialPos, setInitialPos] = useState(() => initialPosition);
  const [position, setPosition] = useState(() => initialPosition);

  const handleDragStart = (event: PointerEvent) => {
    event.preventDefault();
    setDragging(true);

    const [xOffset, yOffset] = position;

    const { clientX, clientY } = event;

    const initialX = clientX - xOffset;
    const initialY = clientY - yOffset;

    (event?.target as HTMLButtonElement)?.setPointerCapture(event.pointerId);
    setInitialPos([initialX, initialY]);
  };

  const handleDragEnd = (event: PointerEvent) => {
    setDragging(false);
    setInitialPos(position);

    (event?.target as HTMLButtonElement)?.releasePointerCapture(
      event.pointerId
    );
  };

  const handleDragMove = (event: PointerEvent) => {
    if (dragging) {
      event.stopPropagation();
      event.preventDefault();
      const [initialX, initialY] = initialPos;

      const { clientX, clientY } = event;

      const currentX = clientX - initialX;
      const currentY = clientY - initialY;

      setPosition([currentX, currentY]);
    }
  };

  // Register listeners
  useEventListener("pointerdown", handleDragStart, target);
  useEventListener("pointerup", handleDragEnd, target);
  useEventListener("pointermove", handleDragMove, target);

  return position as [number, number];
}
