import React from 'react'
import  {Agbalumo}  from '@next/font/google'


const agbalumo = Agbalumo({
  subsets:['latin'],
  weight:['400'],

})

export default function Logo() {

  // const styleLogo = {
  //   color:"white",
  // }

  return (
    <div className={`${agbalumo.className} text-white p-5 `} >
        <h1 className='size-6'>Rayyan</h1> 
    </div>
  )
}
