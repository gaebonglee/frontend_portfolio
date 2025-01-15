import { useRef, useCallback } from "react";
import gsap from "gsap";

export function useTransitionPage() {
  const transitionRef = useRef<HTMLDivElement | null>(null);

  const showTransition = useCallback((onComplete?: () => void) => {
    gsap.to(transitionRef.current, {
      opacity: 1,
      duration: 0.6,
      ease: "power4.in",
      onComplete,
    });
  }, []);

  const hideTransition = useCallback((onComplete?: () => void) => {
    gsap.to(transitionRef.current, {
      opacity: 0,
      duration: 0.6,
      ease: "power4.out",
      onComplete,
    });
  }, []);

  return { transitionRef, showTransition, hideTransition };
}
