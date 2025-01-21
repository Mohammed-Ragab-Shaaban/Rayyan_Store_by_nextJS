'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react'


gsap.registerPlugin(useGSAP);

export  function PhonesSlider1Gsap() {

    // useGSAP(()=>{
    //     gsap.from(".phoneSlider1", { 
    //         opacity:0,
    //         y:100,
    //         duration:1 });
    // },[active])

  return (
    <span></span>
    // <div className='phoneSlider1 absolute top-1/2 right-1/4 text-white '>
    //     <h2>Zania Black Edition</h2>
    //     <h1>Curvy Bevel Dual Audio</h1>
    //     <button>BUY NOW</button>
    // </div>
  )
}

export  function PhonesSlider2Gsap() {
    return (
      <div>phonesSlider123Gsap</div>
    )
  }

  export  function PhonesSlider3Gsap() {
    return (
      <div> 
        <h2>4K Resolution</h2>
        <h1>Exclusive Steel Frame</h1>
        <button>BUY NOW</button>
      </div>
    )
  }
