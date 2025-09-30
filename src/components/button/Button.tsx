import React from 'react'
import type { btnType } from '../../types/buttonType'

const Button:React.FC<btnType> = ({text,cb,customClass,Icon}) => {
    const baseClass = customClass? customClass : "bg-[var(--color-accent)] px-2 rounded-2xl text-white flex flex-nowrap items-center gap-1 py hover:cursor-pointer hover:scale-110 transition-all duration-175";
  return (
    <button onClick={cb} className={baseClass} style={{fontSize:"var(--font-size-base)"}}>
        <span>{text}</span>
        {
            Icon && <Icon style={{fontSize:"var(--icon-size)"}} />
        }
    </button>
  )
}

export default Button