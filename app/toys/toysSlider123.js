import React from 'react'
import slide1 from '../../assets/images/toys/slider1.webp'
import slide2 from '../../assets/images/toys/slider2.webp'
import slide3 from '../../assets/images/toys/slider3.webp'
import Image from 'next/image'
import { Mouse_Memoirs } from '@next/font/google'


const mouseFont = Mouse_Memoirs({
    subsets:['latin'],
    weight: ['400'],
})

export function ToysSlider1() {
  return (
    <div className='relative'>
        <div className='w-full ' style={{height:"70vh"}}>
            <Image src={slide1} alt='toys' className='w-full h-full'/>
        </div>
        <div className='absolute top-1/4 sm:top-1/3 md:top-1/3 left-8 w-1/2'>
            <div className='*:my-2'>
                <h2 className={`${mouseFont.className} text-2xl sm:text-4xl`}>Fun Has Unlimited Opportunities With Toys Galore!</h2>
                <p>A large selection of safe fulfilled toys for both boys and girls.</p>
                <button className='border border-black py-2 px-4 rounded hover:bg-white transition-colors duration-500'>Shop Today</button>
            </div>
        </div>
    </div>
  )
}


export function ToysSlider2() {
    return (
      <div className='relative'>
          <div className='w-full ' style={{height:"70vh"}}>
              <Image src={slide2} alt='toys' className='w-full h-full'/>
          </div>
          <div className='absolute top-1/4 sm:top-1/3 md:top-1/3 left-8 w-1/2'>
              <div className='*:my-2'>
                  <h2 className={`${mouseFont.className} text-2xl sm:text-4xl`}> Playtime Perfection: Unleash Your Inner Child .</h2>
                  <p>An ideal playing companion for children of all ages.</p>
                  <button className='border border-black py-2 px-4 rounded hover:bg-white transition-colors duration-500'>Shop Today</button>
              </div>
          </div>
      </div>
    )
  }


  export function ToysSlider3() {
    return (
      <div className='relative'>
          <div className='w-full ' style={{height:"70vh"}}>
              <Image src={slide3} alt='toys' className='w-full h-full'/>
          </div>
          <div className='absolute top-1/4 sm:top-1/3 md:top-1/3 left-8 w-1/2'>
              <div className='*:my-2'>
                  <h2 className={`${mouseFont.className} text-2xl sm:text-4xl`}>  A World of Wonder Awaits: Explore Our Toy Wonderland!</h2>
                  <p>Incredible toys that will astonish and delight children of every age.</p>
                  <button className='border border-black py-2 px-4 rounded hover:bg-white transition-colors duration-500'>Shop Today</button>
              </div>
          </div>
      </div>
    )
  }
  