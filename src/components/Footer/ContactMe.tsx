import React from 'react'
import { contactMe } from '../../data/contactMe'

const ContactMe: React.FC = () => {
  return (
    <div className='flex flex-col gap-2'>
      <h2 className='underline underline-offset-4'>Contact Me</h2>
      {
        contactMe.map((item, index) => (
          <div key={index} className='flex flex-col gap-1'>
            <h2>{item.name}</h2>
            <p>{item.url}</p>
          </div>
        ))
      }
    </div>
  )
}

export default ContactMe