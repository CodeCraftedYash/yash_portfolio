export const slideIn = (
  direction: "left" | "right" | "top" | "bottom" = "left",
  duration = 0.8
): GSAPTweenVars => {
  const distance = 100; // px offset
  const positions: Record<string, Partial<GSAPTweenVars>> = {
    left: { x: -distance },
    right: { x: distance },
    top: { y: -distance },
    bottom: { y: distance },
  };

  return {
    ...positions[direction],
    opacity: 0,
    duration,
    ease: "power3.out",
  };
};
