import { MutableRefObject, useLayoutEffect, useRef, useState } from "react";

const useElementHeight = (content: any, isSelected: any) => {
  const [contentHeight, setContentHeight] = useState<number | null>(null);

  const ref = useRef<MutableRefObject<HTMLDivElement>>(null);

  useLayoutEffect(() => {
    const measureHeight = () => {
      if (ref.current) {
        //@ts-ignore
        setContentHeight(ref.current?.offsetHeight);
      }
    };

    // Ensure content is ready before measuring
    if (ref.current) {
      measureHeight();
    } else {
      // If content is dynamic or loaded asynchronously, you might need to adjust this logic
      const observer = new ResizeObserver(measureHeight);
      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => {
        observer.disconnect();
      };
    }
  }, [content, isSelected]);
  return { ref, contentHeight };
};

export default useElementHeight;
