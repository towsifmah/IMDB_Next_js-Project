import React from 'react'
import MenuItems from './MenuItems'
import { AiFillHome } from "react-icons/ai" 
import { BsFillInfoCircleFill } from "react-icons/bs"
import Link from 'next/link'
import DrakModeSwitch from './DrakModeSwitch'
export default function Header() {
  return (
    <div className='flex justify-between p-3 items-center max-w-6xl mx-auto'>
        <div className='flex gap-6'>
            <MenuItems title="home" address="/" Icon={AiFillHome}/>
            <MenuItems title="about" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className='flex items-center gap-4'>
            <DrakModeSwitch/>
        <Link href={"/"} className='flex gap-1 items-center'>
            <span className='text-2xl font-bold bg-amber-500 py-1 px-2 rounded-lg'>IMDB</span>
            <span className='text-xl hidden sm:inline font-medium'>Clone</span>
        </Link>
        </div>
    </div>
  )
}
