import React from 'react'

const BackgroundVideo:React.FC = () => {
  return (
    <video src="https://assets.mixkit.co/videos/110/110-720.mp4" poster="https://assets.mixkit.co/videos/110/110-thumb-720-0.jpg" muted autoPlay loop className='absolute -z-20 w-full h-[90%] aspect-video object-cover '> </video>
  )
}

export default BackgroundVideo