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
    

    cards.forEach((card, index) => {
      gsap.set(card, {
        rotation: -12 * index,
        zIndex: categories.length - index,
        y: 0,
      });
    });

    categories.forEach((category, index) => {
      const startOffset = `${index * 100}vh`; // 각 섹션 시작 지점
      const endOffset = `${(index + 1) * 100}vh`; // 각 섹션 끝 지점

      ScrollTrigger.create({
        trigger: containerRef.current,
        start: startOffset,
        end: endOffset,
        onEnter: () => {
          setActiveCategory(category);

          // 현재 카드를 위로 날아가게 애니메이션 실행
          gsap.to(cards[index], {
            y: "-120vh",
            rotation: -48,
            duration: 1,
          });

          for (let i = index + 1; i < categories.length; i++) {
            gsap.to(cards[i], {
              rotation: -12 * (i - (index + 1)), // 새로운 각도 계산
              zIndex: categories.length - (i - index - 1), // 새로운 zIndex 계산
              duration: 0.5,
            });
          }
        },
        onLeaveBack: () => {
          // 이전 카테고리로 돌아갔을 때
          if (cards[index]) {
            gsap.to(cards[index], {
              y: 0,
              rotation: -12 * index,
              duration: 1,
              zIndex: categories.length - index,
            });
          }
          for (let i = index + 1; i < categories.length; i++) {
            gsap.to(cards[i], {
              rotation: -12 * (i - index), // 원래 각도로 복원
              zIndex: categories.length - (i - index), // 원래 zIndex 복원
              duration: 0.5,
            });
          }
        },
      });
    });
  }, [containerRef, setActiveCategory]);
};

export default useRotateCards;
