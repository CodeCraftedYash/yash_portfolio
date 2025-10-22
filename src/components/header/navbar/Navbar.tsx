import React from 'react'
import { navItems } from '../../../data/navItems'

const Navbar:React.FC = () => {
  return (
    <nav className='w-full hidden sm:block text-[var(--color-text-primary)]' style={{fontSize:"var(--font-size-large)"}}>
      <ul className='flex w-fit mx-auto '>
        {navItems.map((item, index) => {
          return (
            <li key={index} className='tracking-wide mx-4 hover:scale-110 hover:text-[var(--color-highlight)] transition-all duration-200 ease-in-out hover:cursor-pointer'>
              <a><h3 className='flex flex-nowrap whitespace-nowrap items-center gap-1'>{item.name} <item.icon /></h3></a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar