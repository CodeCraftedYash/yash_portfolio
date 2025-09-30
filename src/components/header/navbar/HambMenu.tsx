import React, { useState } from 'react'
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { navItems } from '../../../data/navItems';

const HambMenu: React.FC = () => {
    const [flag, setFlag] = useState(false);
    const handleClick = () => {
        setFlag(prev => !prev);
    }
    return (
        <nav className='sm:hidden relative' style={{fontSize:""}}>
            {
                flag ?
                    <MdOutlineMenu onClick={handleClick} className='hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]' style={{ fontSize: "var(--icon-size)" }} />
                    :
                    <RxCross2 onClick={handleClick} className='hover:scale-110 hover:cursor-pointer hover:text-[var(--color-highlight)]' style={{ fontSize: "var(--icon-size)" }} />
            }
            { !flag && 
                <ul className='absolute aspect-square w-32 bg-[var(--color-surface)] top-10 -right-7 p-2 flex flex-col items-left justify-between'>
                    {navItems.map((item,index)=>(
                        <a key={index} href="/"><li>{item.name}</li></a>
                    ))}
                </ul>
            }
        </nav>
    )
}

export default HambMenu