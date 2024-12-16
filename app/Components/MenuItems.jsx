import Link from 'next/link'
import React from 'react'

export default function MenuItems({ title , address , Icon}) {
  return (
    <div>
        <Link href={address} className='hover:text-amber-500 duration-200'>
        <Icon className="text-2xl sm:hidden inline"/>
        <p className='uppercase hidden sm:inline text-sm font-medium'>{title}</p>
        </Link>
    </div>
  )
}
