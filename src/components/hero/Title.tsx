import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useRef } from 'react'

const Title:React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  useGSAP(()=>{
    if(!containerRef.current)
      return;

    const tl = gsap.timeline();
    const children = containerRef.current.children;
    const childrenArray = Array.from(children) as HTMLElement[]

   tl.from(childrenArray,{
        autoAlpha:0,
        y:20,
        duration:0.4,
        ease:"power2.out",
        stagger:0.2
      })
    })
  return (
    <div className='text-white px-2' ref={containerRef}>
        <h1 className='outlined-text text-[1.6rem] sm:text-[2rem] xl:text-[3rem]'>Frontend Developer</h1>
        <div className='w-fit '>
        <h3 className='bg-gray-700/30 w-fit px-1 rounded-xl mb-1'>skilled in <span className='text-blue-200 '>React</span>, <span className='text-green-300'>TypeScript</span> & <span className='text-red-300'>Modern Web UI</span></h3>
        <h3 className='text-white/90 bg-gray-700/30 w-fit px-1 rounded-xl'>Currently pursuing BSc IT in India and developing real-world projects while preparing for a full-stack role.</h3>
        </div>
    </div>
  )
}

export default Title