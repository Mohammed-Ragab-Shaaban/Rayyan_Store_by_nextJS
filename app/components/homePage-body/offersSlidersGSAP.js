'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import React from 'react'
import offer1 from '../../../assets/images/Home page discount 1.jpg'
import offer2 from '../../../assets/images/Home page discount 2.jpg'
import offer3 from '../../../assets/images/Home page discount 3.jpg'
import Image from 'next/image'




gsap.registerPlugin(ScrollTrigger);

export default function OffersSlidersGSAP({children}) {

    useGSAP(()=>{
        console.log(gsap.utils.toArray(".discounts"));

        const tl = gsap.timeline();
        tl.from(".offer2",{xPercent: 110})
          .from(".offer3",{xPercent:-110})

          ScrollTrigger.create({
           animation:tl,
           trigger:".discountsUp",
           start: "top top",
           end:"+=4000",
           pin:true,
          
           scrub:true,
           anticipatePin:1, 
          })
        // gsap.utils.toArray(".discounts").forEach((discount,i) =>{
        // })
    })

  return (
    <div className='discountsUp relative *:sm:h-screen overflow-hidden *:overflow-hidden'>
  
      <div className='w-full'>
          <Image src={offer1} alt='discount' className=' w-full h-full'/>
      </div >
      <div className='offer2 absolute top-0 left-0 w-full'>
          <Image src={offer2} alt='discount' className='w-full h-full'/>
      </div>
      <div className='offer3 absolute top-0 right-0 w-full'>
          <Image src={offer3} alt='discount' className='w-full h-full'/>
      </div>
        {/* {children} */}
    </div>
  )
}
