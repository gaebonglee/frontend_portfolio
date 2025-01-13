import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { CardData, CardCategory } from "data/CardsText";

gsap.registerPlugin(ScrollTrigger);

const useRotateCards = (
  containerRef: React.RefObject<HTMLElement>,
  setActiveCategory: React.Dispatch<React.SetStateAction<CardCategory>>
) => {
  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".detail-card");
    const categories = Object.keys(CardData) as CardCategory[];

    categories.forEach((category, index) => {
      const startOffset = `${index * 50}vh`; // 각 섹션 시작 지점
      const endOffset = `${(index + 1) * 50}vh`; // 각 섹션 끝 지점

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: startOffset,
        end: endOffset,
        onEnter: () => {
          // 카테고리 업데이트
          setActiveCategory(category);

          // 현재 카드를 위로 날아가게 애니메이션 실행
          gsap.to(cards[index], {
            y: "-120vh",
            rotation: -48,
            duration: 0.5,
          });
        },
        onLeaveBack: () => {
          // 이전 카테고리로 돌아갔을 때
          const prevIndex = Math.max(index - 1, 0);
          setActiveCategory(categories[prevIndex]);

          gsap.to(cards[prevIndex], {
            y: "0vh",
            rotation: 0,
            duration: 0.5,
          });
        },
      });
    });
  }, [containerRef, setActiveCategory]);
};

export default useRotateCards;
