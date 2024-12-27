import React from 'react'
// import {  Mouse_Memoirs } from 'next/font/google'
import {Mouse_Memoirs} from '@next/font/google'

const mouse = Mouse_Memoirs({
  subsets:['latin'],
  weight:['400'],
})



export default function HR() {

  return (
    <div className='bg-orange-100'>
      <div className='manualContainer py-20 flex gap-2 justify-center items-center'>
          <hr className='flex-grow  border-black' />
          <p className={`${mouse.className} text-5xl`}>Our popular products </p>
          <hr className='flex-grow border-black' />
      </div>
    </div>
  )
}
