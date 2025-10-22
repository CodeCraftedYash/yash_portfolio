import React from 'react'
import AboutMe from './AboutMe'
import Interests from './Interests'
import ContactMe from './ContactMe'

const Footer: React.FC = () => {
  return (
    <footer className='flex flex-col text-[var(--color-text-primary)]' style={{fontSize:"var(--font-size-md)"}}>
      <div className='flex flex-col md:flex-row md:px-20 gap-8 justify-between mb-2'>
        <div className="md:w-1/3 ">
          <AboutMe />
        </div>
        <div className="">
          <Interests />
        </div>
        <div className="">
          <ContactMe />
        </div>
      </div>
      <h3 className='text-center'>
        &copy; {new Date().getFullYear()} Yash Mishra. All rights reserved.
      </h3>

    </footer>
  )
}

export default Footer