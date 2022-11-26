import { useState, RefObject } from "react";
import { useEventListener } from "usehooks-ts";

/**
 * Makes the target element draggable.
 * Returns the position of the target as [x, y] position.
 * @see https://www.kirupa.com/html5/drag.htm
 * @param {React.Ref} target
 */
function useDraggable(target: RefObject<HTMLElement>) {
  let [dragging, setDragging] = useState(false);
  let [initialPos, setInitialPos] = useState([0, 0]);
  let [position, setPosition] = useState([0, 0]);

  const handleDragStart = (startEvent: Event) => {
    startEvent.preventDefault();
    setDragging(true);

    let initialX, initialY;
    let [xOffset, yOffset] = position;

    let { clientX, clientY } = startEvent as MouseEvent;

    initialX = clientX - xOffset;
    initialY = clientY - yOffset;

    setInitialPos([initialX, initialY]);
  };

  const handleDragEnd = () => {
    setDragging(false);
    setInitialPos(position);
  };

  const handleDragMove = (e: Event) => {
    if (dragging) {
      e.stopPropagation();
      e.preventDefault();
      let [initialX, initialY] = initialPos;

      const { clientX, clientY } = e as MouseEvent;

      const currentX = clientX - initialX;
      const currentY = clientY - initialY;

      setPosition([currentX, currentY]);
    }
  };

  // Mouse
  useEventListener("mousedown", handleDragStart, target);
  useEventListener("mouseup", handleDragEnd, target);
  useEventListener("mousemove", handleDragMove, target);

  // Touch
  useEventListener("touchstart", handleDragStart, target);
  useEventListener("touchend", handleDragEnd, target);
  useEventListener("touchmove", handleDragMove, target);

  return position;
}

export default useDraggable;
