import { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const useScrollAnimations = (
  columnsSelector: string,
  itemsSelector: string
) => {
  useEffect(() => {

    const columns = document.querySelectorAll(columnsSelector);

    columns.forEach((column, index) => {
      gsap.to(column, {
        yPercent: -20 * index, 
        ease: "none",
        scrollTrigger: {
          trigger: column,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });


    const items = document.querySelectorAll(itemsSelector);

    items.forEach((item) => {
      gsap.fromTo(
        item,
        { y: 30 },
        {
          y: -30,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [columnsSelector, itemsSelector]);
};
