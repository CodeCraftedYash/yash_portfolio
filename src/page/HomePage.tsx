import React from 'react'
import HeaderLayout from '../layout/header/HeaderLayout'
import HomeLayout from '../layout/home/HomeLayout'
import FooterLayout from '../layout/footer/FooterLayout'

const HomePage:React.FC = () => {
  return (
    <div className=' flex flex-col '>
    <HeaderLayout />
    <HomeLayout />
    <FooterLayout />
    </div>
  )
}

export default HomePage