import { useRef, useCallback, useEffect, useState } from "react";
import gsap from "gsap";

export function useTransitionPage() {
  const [selectProject, setSelectProject] = useState<number | null>(null);
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
