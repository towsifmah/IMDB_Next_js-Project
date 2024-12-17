"use client"

import React, { useEffect } from 'react'

export default function error({ error , reset}) {
    useEffect(()=>{
        reset()
        console.log(error);
        
    },[error])
  return (
    <div className='text-center mt-10'>
        <h3>Something is wrong. Please try again later.</h3>
        <button onClick={()=>reset()} className='hover:text-amber-600'>Try Again</button>
    </div>
  )
}
