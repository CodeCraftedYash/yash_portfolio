import React, { useState, useRef, type RefObject } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { navItems } from "../../../data/navItems";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HambMenu: React.FC = () => {
  const [flag, setFlag] = useState(false); 
  const menuRef: RefObject<HTMLUListElement|null> = useRef(null);
  const tl = useRef<GSAPTimeline|null>(null);
  useGSAP(()=>{
    if(!menuRef.current) return;
    tl.current = gsap.timeline({paused:true})
     .fromTo(
        menuRef.current,
        { x: 100, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.3, ease: "power3.out" }
      );
  }, []);

    const handleClick = () => {
      if(!tl.current) return;
      if(flag){
        tl.current.reverse();
      }
      else{
        tl.current.play();
      }
        setFlag(prev=>!prev);
  }
  
  return (
    <nav className="sm:hidden relative text-[var(color-text-primary)]">
      {flag ? (
        <RxCross2
          onClick={handleClick}
          className="hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]"
          style={{ fontSize: "var(--font-size-icon)" }}
        />
      ) : (
        <MdOutlineMenu
          onClick={handleClick}
          className="hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]"
          style={{ fontSize: "var(--font-size-icon)" }}
        />
      )}

        <ul
          ref={menuRef}
          className="absolute aspect-square min-w-32 rounded-xl bg-[var(--color-surface)]/80 top-10 -right-7 p-2 flex flex-col items-left justify-between border-2"
        >
          {navItems.map((item, index) => (
            <a key={index} href={item.to}>
              <li className="flex flex-row-reverse flex-nowrap items-center justify-end py-1 gap-2 my-0.5" style={{fontSize:"var(--font-size-md)"}} >{item.name} <item.icon /></li>
            </a>
          ))}
        </ul>
    </nav>
  );
};

export default HambMenu;
