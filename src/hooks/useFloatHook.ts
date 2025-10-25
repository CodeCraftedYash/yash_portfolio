import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

export const useFloatHook = (
  ref: RefObject<HTMLElement | null>,
  duration: number = 0.8,
  distance: number = 3
) => {
  useGSAP(() => {
    if (!ref.current) return;

    const target = ref.current;
    const children = Array.from(target.children) as HTMLElement[];

    const animateElement = (el: HTMLElement) => {
      const animate = () => {
        gsap.to(el, {
          x: gsap.utils.random(-distance, distance),
          y: gsap.utils.random(-distance, distance),
          duration,
          ease: "sine.inOut",
          onComplete: animate,
        });
      };
      animate();
    };

    const ctx = gsap.context(() => {
      if (children.length > 0) {
        children.forEach((child) => animateElement(child));
      } else {
        animateElement(target);
      }
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};
