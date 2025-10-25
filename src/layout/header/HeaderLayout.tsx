import React from 'react'
import Logo from '../../components/header/logo/Logo'
import Navbar from '../../components/header/navbar/Navbar'
import Other from '../../components/header/other/Other'
import HambMenu from '../../components/header/navbar/HambMenu'

const HeaderLayout:React.FC = () => {
  return (
    <div className='h-[4rem] flex px-2 pt-1 items-center fixed top-0 w-full border-b-2 z-50' style={{backdropFilter:"blur(10px)"}}>
        <Logo />
        <Navbar />
        <Other />
        <div><HambMenu /></div>
    </div>
  )
}

export default HeaderLayout