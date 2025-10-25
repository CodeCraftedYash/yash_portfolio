import React, { useRef } from 'react'
import { socialMediaLinks } from '../../data/socialMediaLinks'
import { useFloatHook } from '../../hooks/useFloatHook'

const FloatingIcons:React.FC = () => {
  const ref = useRef(null);
    const positions = [
      {top:0,left:-2},
      {top:0,right:-2},
      {bottom:0,left:-2},
      {bottom:0,right:-2},
    ]
    const icons = socialMediaLinks.map((el,index)=>(
        <a href={el.url} key={el.name} target="_blank" rel="noopener noreferrer" className='absolute text-black bg-white p-0.5 rounded-full hover:cursor-pointer hover:bg-[var(--color-highlight)] transition-all duration-200 ease-in-out group' style={{...positions[index],fontSize:"var(--font-size-xl)",color:el.col}} >
          <el.icon/>
          <h2 className='absolute opacity-0 -translate-x-[20%] translate-y-2 w-fit bg-white px-1 rounded-xl group-hover:opacity-100'>{el.name}</h2>
        </a>
    ))
    useFloatHook(ref,1,10)
  return (
    <div className='absoulte top-0 w-full h-full' ref={ref}>
        {icons}
    </div>
  )
}

export default FloatingIcons