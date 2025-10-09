import React, { useState, useRef, type RefObject } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../../data/navItems";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { slideIn } from "../../../constants/slideIn";

const HambMenu: React.FC = () => {
  const [flag, setFlag] = useState(false); 
  const [view, setView] = useState(false); 
  const menuRef: RefObject<HTMLUListElement|null> = useRef(null);

  const handleClick = () => {
    if (flag && menuRef.current && view) {
      
      gsap.to(menuRef.current, {
        ...slideIn("right", 0.6),
        onComplete: () => setView(false), 
      });
    } else {
      setView(true); 
    }
    setFlag((prev) => !prev);
  };

  useGSAP(
    () => {
      if (view && menuRef.current) {
        gsap.from(menuRef.current, slideIn("right", 0.6));
      }
    },
    { dependencies: [view], scope: menuRef }
  );

  return (
    <nav className="sm:hidden relative">
      {flag ? (
        <RxCross2
          onClick={handleClick}
          className="hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]"
          style={{ fontSize: "var(--icon-size)" }}
        />
      ) : (
        <MdOutlineMenu
          onClick={handleClick}
          className="hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]"
          style={{ fontSize: "var(--icon-size)" }}
        />
      )}

      {view && (
        <ul
          ref={menuRef}
          className="absolute aspect-square w-32 bg-[var(--color-surface)] border-2 top-10 -right-7 p-2 flex flex-col items-left justify-between border-[var(--color-highlight)]"
        >
          {navItems.map((item, index) => (
            <a key={index} href="/">
              <li className="flex flex-row-reverse flex-nowrap items-center justify-end py-1" style={{fontSize:"var(--font-size-base)"}}>{item.name} <item.icon className="w-6 " /></li>
            </a>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default HambMenu;
