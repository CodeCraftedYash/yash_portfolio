import React from "react";
import BackgroundVideo
from "../background/BackgroundVideo";
const Background:React.FC = () => {
  return (
    <div>
      <svg width="0" height="0" style={{ position: "absolute" }}>
        <defs>
          <clipPath id="curved-mask" clipPathUnits="objectBoundingBox">
            <path d="M0 0 H1 V0.82 C1 0.82 0.72 1 0.486 1 C0.252 1 0 0.82 0 0.82 V0 Z" />
          </clipPath>
        </defs>
      </svg>

      <div
        className="relative w-full h-[43vh] xl:h-[55vh] overflow-hidden"
        style={{
          clipPath: "url(#curved-mask)",
          WebkitClipPath: "url(#curved-mask)",
        }}
      >
        <BackgroundVideo />
      </div>
    </div>
  );
};

export default Background;
