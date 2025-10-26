import React, { useRef } from "react";
import HeaderLayout from "../layout/header/HeaderLayout";
import HomeLayout from "../layout/home/HomeLayout";
import FooterLayout from "../layout/footer/FooterLayout";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger, ScrollSmoother);

const HomePage: React.FC = () => {
  const main = useRef(null);
  const smoother = useRef<ScrollSmoother | null>(null);

  useGSAP(
    () => {
      smoother.current = ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 2,
        effects: true,
      });
      return () => {
        smoother.current?.kill();
      };
    },
    { scope: main }
  );
  return (
    <div id="smooth-wrapper" ref={main}>
      <div
        className="flex flex-col  bg-[var(--color-background)]"
        id="smooth-content"
      >
        <HeaderLayout />
        <HomeLayout />
        <FooterLayout />
      </div>
    </div>
  );
};

export default HomePage;
