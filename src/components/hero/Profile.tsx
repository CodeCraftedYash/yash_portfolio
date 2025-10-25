import React, { useRef } from 'react';
import myImage from '../../assets/yash.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Profile: React.FC = () => {
    const ShineRef = useRef(null);
    useGSAP(
        () => {
            if (ShineRef.current) {
                gsap.fromTo(ShineRef.current,
                    { xPercent: -60 },
                    { xPercent: 80, duration: 4, repeat: -1, ease:'circ.in' }
                )
            }
        },
        { scope: ShineRef }
    )
    return (
        <div className='relative w-full'>
            <div className='relative rounded-[100%] overflow-hidden border-4 border-[var(--color-text-secondary)]'>
                <img src={myImage} alt="yash mishra" className='scale-105' />
                <div ref={ShineRef} className='absolute w-full h-full bg-gradient-to-l from-transparent from-45% via-50% to-60% via-white/70 to-transparent top-0 z-10 -skew-x-12 mix-blend-overlay'></div>
            </div>
        </div>
    )
}

export default Profile