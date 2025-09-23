import React from 'react'
import AboutMe from './AboutMe'
import Interests from './Interests'
import ContactMe from './ContactMe'

const Footer: React.FC = () => {
  const baseContainerClass = 'flex flex-col gap-2 md:w-1/3'
  return (
    <footer className='flex flex-col '>
      <div className='flex flex-col md:flex-row gap-8'>
        <div className={baseContainerClass}>
          <AboutMe />
        </div>
        <div className={baseContainerClass}>
          <h2>Interests</h2>
          <Interests />
        </div>
        <div className={baseContainerClass}>
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