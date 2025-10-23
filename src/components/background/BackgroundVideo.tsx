import React from 'react'

const BackgroundVideo:React.FC = () => {

  const videoLink2 = "https://cdn.pixabay.com/video/2022/10/24/136329-764387844_large.mp4"
  return (
    <video src={videoLink2} poster="https://scontent.cdninstagram.com/v/t51.82787-15/539862873_18023601908724545_8566729885903021023_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&ig_cache_key=MzcwOTYzNjU1MTc5NTQ0Nzk2Nw%3D%3D.3-ccb1-7&ccb=1-7&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6InhwaWRzLjEwMjR4MTAyNC5zZHIuQzMifQ%3D%3D&_nc_ohc=VW0wd1dhd8MQ7kNvwH9tbiB&_nc_oc=AdmDY9Gn9EqfrM-vcT2sLolDwt9Zxs6eGwlel3LB-o_ECaRHMQkNfWDftGnZt10qeGD4KfKhCquxu9bzsm_sHTjM&_nc_ad=z-m&_nc_cid=2034&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_gid=bqrhU2R-XpZiuHjjelsWDw&oh=00_AffoiAY2P5h2BfuHtBNQtbtHqNhMc45Ldd_UY1x__XhqYg&oe=69002765" muted autoPlay loop className='absolute z-10 w-full h-full aspect-video object-cover'
    > </video>
  )
}

export default BackgroundVideo