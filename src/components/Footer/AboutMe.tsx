import React from 'react'
import { aboutMe } from '../../data/aboutMe'
import { socialMediaLinks } from '../../data/socialMediaLinks'

const AboutMe: React.FC = () => {
    return (
        <div className='gap-2 flex flex-col items-center'>
            <h2 className='underline underline-offset-4'>{aboutMe.name}</h2>
            <p className='text-center'>{aboutMe.description}</p>
            <div className='flex space-x-2 mt-2 gap-4'>
                {
                    socialMediaLinks.map((item) => (
                        <a key={item.name} href={item.url} target='_blank' rel='noopener noreferrer' className='hover:scale-110 hover:text-[var(--color-highlight)] transition-all duration-200 ease-in-out'>
                            <item.icon style={{
                                fontSize: "var(--font-size-lg)",
                            }} />
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default AboutMe