import { useEffect, useRef, useState } from "react";

function useScrollState<T extends string>(itemKeys: T[]) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollState, setScrollState] = useState<T>(itemKeys[0]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollTop = window.scrollY;
      const containerOffsetTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollPosition = scrollTop - containerOffsetTop;

      const sectionHeight = containerHeight / itemKeys.length;

      const itemIndex = Math.min(
        Math.floor(scrollPosition / sectionHeight),
        itemKeys.length - 1
      );

      setScrollState(itemKeys[itemIndex]);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [itemKeys]);

  return { containerRef, scrollState };
}

export default useScrollState;
