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
    <div className={`${agbalumo.className} p-4 `} >
        <h1 className='text-2xl'>Rayyan</h1> 
    </div>
  )
}
