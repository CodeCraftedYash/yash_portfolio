import React from 'react'
import { interests } from '../../data/interests'

const Interests:React.FC = () => {
  return (
    <div className='flex flex-col gap-2'>
    {
      interests.map((item,index)=>(
       <h3 key={index}>
        {item}
       </h3> 
      ))
    }
    </div>
  )
}

export default Interests