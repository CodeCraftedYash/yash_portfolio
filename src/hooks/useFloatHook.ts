import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

export const useFloatHook = (
  element: RefObject<HTMLDivElement | null>,
  duration: number = 0.5,
  distance:number = 2,
) => {
  useGSAP(() => {
    const ctx = gsap.context(() => {
      if (!element.current) return;
      const animate = () => {
        gsap.to(element.current, {
          x: gsap.utils.random(-distance, distance),
          y: gsap.utils.random(-distance, distance),
          duration,
          ease: "sine.inOut",
          onComplete: animate,
        });
      };

      animate();
    });
    return () => {
      ctx.revert();
    };
  }, [element]);
};
