import { RefObject } from "react";

import { useEventListener } from "usehooks-ts";

type Handler = (event: MouseEvent) => void;

export function useOnClickOutside<T extends HTMLElement = HTMLElement>(
  ref: RefObject<T>,
  handler: Handler,
  mouseEvent: "mousedown" | "mouseup" = "mousedown",
): void {
  useEventListener(mouseEvent, (event) => {
    const el = ref?.current;

    if (el?.contains(event.target as Node)) {
      return;
    }

    // Check if the clicked element or any of its ancestors are a paragraph
    let clickedElement: HTMLElement | null = event.target as HTMLElement;
    while (clickedElement) {
      if (clickedElement.tagName === "P" || clickedElement.tagName === "Div") {
        // The clicked element or one of its ancestors is a paragraph or div
        return;
      }
      clickedElement = clickedElement.parentElement;
    }

    handler(event);
  });
}
