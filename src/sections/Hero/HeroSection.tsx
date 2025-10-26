import React, { useRef } from "react";
import Background from "../../components/hero/Background";
import Profile from "../../components/hero/Profile";
import Title from "../../components/hero/Title";
import FloatingIcons from "../../components/hero/FloatingIcons";
import Parallax from "../../components/hero/Parallax";

const HeroSection: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);

  return (
    <section className="min-h-[100dvh] relative">
      <Background />
      <div className="absolute top-20">
        <div className="flex justify-between relative w-[90%] mx-auto items-center">
          <div className="w-[90%] mx-auto">
            <Title />
          </div>
          <div
            ref={ref}
            className="w-[40%] sm:w-[20%] md:w-[20%] xl:w-[20%] mx-auto relative"
          >
            <Profile />
            <div className="absolute top-0 w-full h-full z-20 "><FloatingIcons /></div>
          </div>
        </div>
      </div>
      <div className="w-[60%] mx-auto h-[60vh] lg:h-[90vh] relative overflow-hidden"><Parallax /></div>
      <div className="h-[40vh]"></div>
    </section>
  );
};

export default HeroSection;
