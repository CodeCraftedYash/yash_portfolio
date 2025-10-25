import React from 'react'
import HeroSection from '../../sections/Hero/HeroSection'
import AboutSection from '../../sections/About/AboutSection'
import ProjectsSection from '../../sections/Projects/ProjectsSection'

const HomeLayout:React.FC = () => {
  return (
    <div className='min-h-screen text-[var(--color-text-primary)]'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
    </div>
  )
}

export default HomeLayout