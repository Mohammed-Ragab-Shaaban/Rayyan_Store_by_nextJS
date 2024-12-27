import React from 'react'
import delivery from '../../../assets/images/delivery.jpg'
import Image from 'next/image'
import { ImageGSAP, TextBesideImage } from './comingSlideGSAP'

export default function ComingSlide() {
  return (
    <div className='my-8'>
        <div className='manualContainer'>
            <div className='text-center text-3xl font-bold py-4'><h2>We are coming....</h2></div>
            <div className='flex flex-col md:flex-row *:flex-1'>
                <ImageGSAP>
                    <Image src={delivery} alt='delivery' className='w-full'/>
                </ImageGSAP>

                <TextBesideImage>
                    <h3>
                        We will come to you wherever you are..... <br />
                        We offer the best offers and discounts....
                    </h3>
                    <button className='btn border py-2 px-4 rounded-md hover:bg-black transition-colors duration-500'>Shop Now</button>
                </TextBesideImage>
            </div>
        </div>
    </div>
  )
}
