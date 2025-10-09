import React, { useRef } from "react";
import { techStack } from "../../data/techStack";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const TechCarousel: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const track1 = useRef<HTMLDivElement>(null);
  const track2 = useRef<HTMLDivElement>(null);

  useGSAP(() => {
   const marqueeTL = gsap.timeline({ repeat: -1, defaults: { ease: "none" } });
    const track1Width = track1.current?.scrollWidth || 0;
    console.log("track width", track1Width);

    marqueeTL.set(track2.current, {x: track1Width})
    .to(track1.current, { x: -track1Width,duration:20})
    .to(track2.current, {x: 0,duration:20},"<")
    .set(track1.current, {x: track1Width})
    .set(track2.current, {x: track1Width})
}, { scope: containerRef });

  const elements = techStack.map((element, index) => (
    <div key={index} className="shrink-0">
      <img
        className="w-12 aspect-square object-contain bg-white rounded-xl p-0.5"
        loading="lazy"
        src={element.icon}
        alt={element.name}
      />
    </div>
  ));

  return (
    <div
      ref={containerRef}
      className="w-full h-20 overflow-hidden relative flex items-center rounded-xl"
    >
      <div className="absolute w-16 h-full z-40 bg-gradient-to-r from-[var(--color-background)] to-transparent"></div>
      <div
        ref={track1}
        className="flex gap-5 px-10 py-4 items-center flex-nowrap absolute left-0"
      >
        {elements}
      </div>
      <div
        ref={track2}
        className="flex gap-5 px-10 py-4 items-center flex-nowrap absolute left-0"
      >
        {elements}
      </div>

      <div className="absolute right-0 w-16 h-full z-40 bg-gradient-to-l from-[var(--color-background)] to-transparent"></div>
    </div>
  );
};

export default TechCarousel;
