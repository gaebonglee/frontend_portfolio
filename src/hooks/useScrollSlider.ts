import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useScrollSlider = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sliderRef.current || !wrapperRef.current) return;

    const slides = Array.from(wrapperRef.current.children) as HTMLElement[];
    const slideWidth = slides[0].offsetWidth;
    const totalWidth = slideWidth * slides.length;

    wrapperRef.current.style.width = `${totalWidth}px`;

    gsap.to(wrapperRef.current, {
      x: -totalWidth + slideWidth,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: sliderRef.current,
        start: "top top",
        end: `+=${totalWidth - window.innerWidth}`,
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return { sliderRef, wrapperRef };
};

export default useScrollSlider;
