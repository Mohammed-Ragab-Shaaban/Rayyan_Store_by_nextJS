import React from 'react'
import slide1 from './../../assets/images/phones/Home Page Phones/slide1.webp'
import slide2 from './../../assets/images/phones/Home Page Phones/slide2.webp'
import slide3 from './../../assets/images/phones/Home Page Phones/slide3.webp'
import Image from 'next/image'
import { PhonesSlider1Gsap, PhonesSlider2Gsap, PhonesSlider3Gsap } from './phonesSlider123Gsap'

export  function PhonesSlider1() {
  return (
    <div>
        <div className='w-full relative'>
             <Image src={slide1} alt='phones' className='w-full h-full'/>
             <PhonesSlider1Gsap />
            
        </div>
    </div>
  )
}


export  function PhonesSlider2() {
    return (
        <div>
        <div className='w-full relative'>
             <Image src={slide2} alt='toys' className='w-full h-full'/>
            <PhonesSlider2Gsap />
        </div>
    </div>
    )
  }

  
  export  function PhonesSlider3() {
    return (
        <div>
        <div className='w-full relative' >
             <Image src={slide3} alt='toys' className='w-full h-full'/>
            <PhonesSlider3Gsap />
        </div>
    </div>
    )
  }
  