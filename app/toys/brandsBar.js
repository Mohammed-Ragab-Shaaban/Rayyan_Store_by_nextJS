import React from 'react'
import brand1 from '../../assets/images/toys/brand1.webp'
import brand2 from '../../assets/images/toys/brand2.avif'
import brand3 from '../../assets/images/toys/brand3.avif'
import brand4 from '../../assets/images/toys/brand4.webp'
import brand5 from '../../assets/images/toys/brand5.avif'
import Image from 'next/image'
import './toys.css'


export default function BrandsBar() {

const sty ={
    width:"250px",
    display:"flex",
    justifyContent:"center",
    alignItems: "center",
}

  return (
    <div>
        <div className='slider grid m-auto justify-center overflow-hidden h-36 bg-orange-100'>
            <div className='slider-track flex gap-8 *:cursor-pointer' >
                <div className='slide' style={sty}>
                    <Image src={brand1} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand2} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand3} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand4} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand5} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>


                <div className='slide' style={sty}>
                    <Image src={brand1} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand2} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand3} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand4} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand5} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div> 

                
                <div className='slide' style={sty}>
                    <Image src={brand1} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand2} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand3} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand4} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
                <div className='slide' style={sty}>
                    <Image src={brand5} alt='toys brands' className='w-full hover:scale-125 transition-transform duration-500' />
                </div>
            </div>
        </div>
    </div>
  )
}
