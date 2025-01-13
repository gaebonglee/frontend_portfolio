import { useEffect } from "react";
import gsap from "gsap";

const useRotateCards = (
  containerRef: React.RefObject<HTMLElement>,
  activeIndex: number
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".detail-card");

    gsap.to(cards, {
      duration: 0.5,
      stagger: 0.1,
      onUpdate: () => {
        cards.forEach((card, index) => {
          if (index === activeIndex) {
            gsap.to(card, {
              y: "-120vh",
              rotation: -48,
              duration: 0.5,
            });
          } else {
            gsap.to(card, {
              rotation: -index * 10,
              zIndex: `${cards.length - index}`,
              duration: 0.5,
            });
          }
        });
      },
    });
  }, [containerRef, activeIndex]);
};

export default useRotateCards;
