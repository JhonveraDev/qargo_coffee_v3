import { useCallback, useRef, useState } from "react";

export const useInfoCards = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.firstElementChild as HTMLElement | null;
    if (!card) return;

    const cardWidth = card.offsetWidth;
    const gap = 16;

    const index = Math.round(
      container.scrollLeft / (cardWidth + gap)
    );

    setActiveIndex(index);
  }, []);

  return {
    containerRef,
    activeIndex,
    handleScroll,
  };
};