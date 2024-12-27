'use client'
import gsap from 'gsap'
import React from 'react'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from '@gsap/react';


gsap.registerPlugin(ScrollTrigger)

export function ImageGSAP({children}) {
    useGSAP(()=>{
        gsap.to(".delivery",{
            scrollTrigger:{
                trigger:".deliveryContainer",
                start:"top 85%",
                end:"top 50%",
                scrub:true
                      },
            scale:1,
        })
    })
  return (
    <div className='deliveryContainer'>
        <div className='delivery scale-0'>
            {children}
        </div> 
    </div>
  )
}

export function TextBesideImage ({children}){
    useGSAP(()=>{
        gsap.to(".TextBesideImage",{
            scrollTrigger:{
                trigger:".TextBesideImage",
                start:"top 65%",
                end:"top 40%",
                scrub:true
                      },
            scaleX:1,
        })
    })
    return(
        <div className='TextBesideImage p-4 scale-x-0 origin-left bg-neutral-500 flex flex-col justify-center items-center gap-5 text-white text-xl'>
            {children}
        </div>
    )
}

