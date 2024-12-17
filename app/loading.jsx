import Image from 'next/image'
import React from 'react'
import spannier from "@/public/spannir.svg"
export default function loading() {
  return (
    <div className='flex justify-center mt-16'>
        <Image className='h-52' src={spannier} alt='Loading...'/>
    </div>
  )
}
