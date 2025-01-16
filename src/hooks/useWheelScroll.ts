import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Flip from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, Flip);

export const useWheelScroll = () => {
  const wheelRef = useRef<HTMLDivElement | null>(null);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const lastClickedCardRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!wheelRef.current) return;

    const wheel = wheelRef.current;
    const images = gsap.utils.toArray<HTMLElement>(".wheel__card");

    const setup = () => {
      let radius = wheel.offsetWidth / 2;
      let center = wheel.offsetWidth / 2;
      let total = images.length;
      let slice = (2 * Math.PI) / total;

      images.forEach((item, i) => {
        let angle = i * slice;

        let x = center + radius * Math.sin(angle);
        let y = center - radius * Math.cos(angle);

        gsap.set(item, {
          rotation: `${angle}_rad`,
          xPercent: -50,
          yPercent: -50,
          x: x,
          y: y,
        });
      });
    };

    setup();
    window.addEventListener("resize", setup);

    gsap.to(".wheel", {
      rotate: -360,
      ease: "none",
      duration: images.length,
      scrollTrigger: {
        start: 0,
        end: "max",
        scrub: 1,
        snap: 1 / images.length,
        invalidateOnRefresh: true,
      },
    });

    const flip = (e: any) => {
      const card = e.currentTarget;
      const image = card.querySelector("img");

      const state = Flip.getState(image);
      if (headerRef.current) {
        headerRef.current.appendChild(image);
      }

      Flip.from(state, {
        duration: 0.6,
        ease: "sine.out",
        absolute: true,
      });

      lastClickedCardRef.current = card;
    };

    const putBack = () => {
      if (!lastClickedCardRef.current || !headerRef.current) return;

      const image = headerRef.current.querySelector("img");
      if (!image) return;

      const state = Flip.getState(image);
      lastClickedCardRef.current.appendChild(image);

      Flip.from(state, {
        duration: 0.6,
        ease: "sine.out",
        absolute: true,
      });

      lastClickedCardRef.current = null;
    };

    images.forEach((card) => {
      card.addEventListener("click", flip);
    });

    if (headerRef.current) {
      headerRef.current.addEventListener("click", putBack);
    }

    return () => {
      window.removeEventListener("resize", setup);
      images.forEach((card) => {
        card.removeEventListener("click", flip);
      });

      if (headerRef.current) {
        headerRef.current.removeEventListener("click", putBack);
      }
    };
  }, []);

  return { wheelRef, headerRef };
};
