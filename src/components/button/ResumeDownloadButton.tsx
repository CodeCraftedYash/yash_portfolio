 import React from 'react'
 import Button from '../button/Button'
 import { MdDownloadForOffline } from "react-icons/md";
 
 const ResumeDownloadButton:React.FC = () => {
   return (
     <Button cb={() => alert("hi")} text="Resume" Icon={MdDownloadForOffline} customClass='ml-auto mr-[15%] mt-16 flex flex-nowrap justify-between items-center gap-1 rounded-2xl text-white hover:cursor-pointer hover:scale-110 transition-all duration-150 ease-in-out px-2 py-3 bg-[var(--color-accent)] border-2 border-[var(--color-background)] bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-highlight)]'/>
   )
 }
 
 export default ResumeDownloadButton
 