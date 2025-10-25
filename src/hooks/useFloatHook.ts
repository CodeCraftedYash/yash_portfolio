import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import type { RefObject } from "react";

type Target = RefObject<HTMLElement | null> | RefObject<HTMLElement | null>[];

export const useFloatHook = (
  targets: Target,
  duration: number = 0.5,
  distance: number = 2
) => {
  useGSAP(() => {
    const elements = Array.isArray(targets)
      ? targets.map(ref => ref.current).filter(Boolean)
      : [targets.current].filter(Boolean);

    if (!elements.length) return;

    const animate = (el: HTMLElement) => {
      gsap.to(el, {
        x: gsap.utils.random(-distance, distance),
        y: gsap.utils.random(-distance, distance),
        duration,
        ease: "sine.inOut",
        onComplete: () => animate(el),
      });
    };

    const ctx = gsap.context(() => {
      elements.forEach((el) => animate(el!));
    });

    return () => ctx.revert();
  }, [targets, duration, distance]);
};
