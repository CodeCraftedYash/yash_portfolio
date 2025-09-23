import React from 'react'
import { aboutMe } from '../../data/aboutMe'
import { socialMediaLinks } from '../../data/socialMediaLinks'

const AboutMe: React.FC = () => {
    return (
        <div className='gap-2 flex flex-col'>
            <h2>{aboutMe.name}</h2>
            <p className='md:w-[80%]'>{aboutMe.description}</p>
            <div className='flex space-x-2 mt-2'>
                {
                    socialMediaLinks.map((item) => (
                        <a key={item.name} href={item.url} target='_blank' rel='noopener noreferrer' className=''>
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