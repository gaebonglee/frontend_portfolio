import { useRef, useEffect } from "react";
import gsap from "gsap";

export function useTransitionPage(selectProject: number | null) {
  const transitionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (selectProject !== null) {
      gsap.to(transitionRef.current, {
        x: 0, // 화면에 나타남
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(transitionRef.current, {
        x: "100%", // 화면 밖으로 이동
        duration: 0.5,
        ease: "power3.in",
      });
    }
  }, [selectProject]);

  return { transitionRef };
}
