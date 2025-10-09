import React from 'react'

const BackgroundVideo:React.FC = () => {
  const videoLink1 = "https://videos.pexels.com/video-files/11331032/11331032-hd_1920_1080_24fps.mp4"
  
  return (
    <video src={videoLink1} poster="" muted autoPlay loop className='absolute -z-20 w-full h-full aspect-video object-cover scale-105'
    > </video>
  )
}

export default BackgroundVideo