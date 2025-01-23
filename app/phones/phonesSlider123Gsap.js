'use client'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React, { useContext } from 'react'
import { globalContext } from '../components/context';


gsap.registerPlugin(useGSAP);

export  function PhonesSlider1Gsap() {

  const {activeSlide, setActiveSlide} = useContext(globalContext);

  useGSAP(()=>{
    gsap.from(".phoneSlider1", { 
        opacity:0,
        y:100,
        duration:1 });
},[activeSlide])
  

  return (
    <div className='phoneSlider1 absolute top-1/3 sm:top-1/4 md:top-1/2 right-8 sm:right-12 md:right-24 *:sm:my-2 text-white'>
    <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'> Black Edition</h2>
    <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Curvy Bevel Dual Audio</h1>
    <button className=' text-sm sm:text-xl md:text-2xl border py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
      BUY NOW
    </button>
</div>
    
  )
}

export  function PhonesSlider2Gsap() {

  const {activeSlide, setActiveSlide} = useContext(globalContext);
  useGSAP(()=>{
    gsap.from(".phoneSlider2", { 
        opacity:0,
        y:100,
        duration:1 });
},[activeSlide])

    return (
      <div className='phoneSlider2 absolute top-1/3 sm:top-1/4 md:top-1/2 right-8 sm:right-12 md:right-24 *:sm:my-2 text-white'>
        <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'>Delta Zertiga Processor</h2>
        <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Full Screen Display</h1>
        <button className=' text-sm sm:text-xl md:text-2xl border py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
          BUY NOW
        </button>
     </div>
    )
  }

  export  function PhonesSlider3Gsap() {
    const {activeSlide, setActiveSlide} = useContext(globalContext);
    useGSAP(()=>{
      gsap.from(".phoneSlider3", { 
          opacity:0,
          y:100,
          duration:1 });
  },[activeSlide])

    return (
      <div className='phoneSlider3 absolute top-1/3 sm:top-1/4 md:top-1/2 left-5 sm:left-12 md:left-24 *:sm:my-2'>
        <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'>4K Resolution</h2>
        <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Exclusive Steel Frame</h1>
        <button className=' text-sm sm:text-xl md:text-2xl border border-black py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
          BUY NOW
        </button>
      </div>
    )
  }
