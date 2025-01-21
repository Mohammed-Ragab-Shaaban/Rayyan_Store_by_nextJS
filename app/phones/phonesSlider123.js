import React from 'react'
import slide1 from './../../assets/images/phones/Home Page Phones/slide1.webp'
import slide2 from './../../assets/images/phones/Home Page Phones/slide2.webp'
import slide3 from './../../assets/images/phones/Home Page Phones/slide3.webp'
import Image from 'next/image'
import { PhonesSlider1Gsap } from './phonesSlider123Gsap'

export  function PhonesSlider1() {
  return (
    <div>
        <div className='w-full relative'>
             <Image src={slide1} alt='phones' className='w-full h-full'/>
             {/* <PhonesSlider1Gsap /> */}
             <div className='phoneSlider1 absolute top-1/3 sm:top-1/4 md:top-1/2 right-8 sm:right-12 md:right-24 *:sm:my-2 text-white'>
                <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'> Black Edition</h2>
                <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Curvy Bevel Dual Audio</h1>
                <button className=' text-sm sm:text-xl md:text-2xl border py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
                  BUY NOW
                </button>
            </div>
        </div>
    </div>
  )
}


export  function PhonesSlider2() {
    return (
        <div>
        <div className='w-full relative'>
             <Image src={slide2} alt='toys' className='w-full h-full'/>
             <div className='phoneSlider1 absolute top-1/3 sm:top-1/4 md:top-1/2 right-8 sm:right-12 md:right-24 *:sm:my-2 text-white'>
                <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'>Delta Zertiga Processor</h2>
                <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Full Screen Display</h1>
                <button className=' text-sm sm:text-xl md:text-2xl border py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
                  BUY NOW
                </button>
            </div>
        </div>
    </div>
    )
  }

  
  export  function PhonesSlider3() {
    return (
        <div>
        <div className='w-full relative' >
             <Image src={slide3} alt='toys' className='w-full h-full'/>
             <div className='phoneSlider1 absolute top-1/3 sm:top-1/4 md:top-1/2 left-5 sm:left-12 md:left-24 *:sm:my-2'>
                <h2 className='uppercase text-xs sm:text-2xl ms:text-3xl'>4K Resolution</h2>
                <h1 className='uppercase text-sm  sm:text-3xl md:text-4xl'>Exclusive Steel Frame</h1>
                <button className=' text-sm sm:text-xl md:text-2xl border border-black py-1 px-4 sm:py-2 sm:px-8 rounded-full hover:bg-red-600 hover:text-white transition-all duration-500'>
                  BUY NOW
                </button>
            </div>
        </div>
    </div>
    )
  }
  