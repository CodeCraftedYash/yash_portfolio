import React from 'react'
import { navItems } from '../../../data/navItems'

const Navbar:React.FC = () => {
  return (
    <nav className='w-full hidden sm:block'>
      <ul className='flex w-fit mx-auto '>
        {navItems.map((item, index) => {
          return (
            <li key={index} className='tracking-wide mx-4 hover:scale-110 hover:text-[var(--color-highlight)] transition-all duration-200 ease-in-out hover:cursor-pointer'>
              <a><h3>{item.name}</h3></a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default Navbar