import Link from 'next/link'
import React from 'react'
import ArrowForLinks from './arrowForLinks'



export default function Links(props) {
  return (
    <div className={`shrink-0 ${props.d_hidden_block} md:block `}>
        <Link className='text-white p-5 block md:inline-block hover:bg-neutral-950/50 ' href={'/'}>Home</Link>
          <div className='text-white p-5 block md:inline-block relative *:hover:block hover:bg-neutral-950/50 hover:cursor-pointer'>
             Electronics
              <div className='md:absolute md:top-full bg-neutral-700 md:-right-12 md:min-w-48 hidden transition-all duration-1000' >                 
                  <div className='*:block *:py-3 w-full *:text-center'>
                    <Link className='hover:bg-neutral-950/50' href={'#'}>Mobile phones</Link>
                    <Link  className='hover:bg-neutral-950/50' href={'#'}>Laptops $ tablets</Link>
                    <Link  className='hover:bg-neutral-950/50' href={'#'}>Headphones</Link>
                    <Link  className='hover:bg-neutral-950/50' href={'#'}>TV & Audio</Link>
                  </div>
              </div>
          
          </div>
        <div className='text-white p-5 block md:inline-block relative *:hover:block hover:bg-neutral-950/50 hover:cursor-pointer' >
            others
            <div className='md:absolute top-full bg-neutral-700 -right-12 min-w-48 hidden transition-all duration-1000'>
                <div className='*:block *:py-3 *:text-center '>
                  <Link className='hover:bg-neutral-950/50' href={'./toys'}>toys</Link>
                  <Link  className='hover:bg-neutral-950/50' href={'#'}>Health & Beauty</Link>
                  <Link  className='hover:bg-neutral-950/50' href={'#'}>Baby Products</Link>
                  <Link  className='hover:bg-neutral-950/50' href={'#'}>Sporting Goods</Link>
                </div>
            </div>
        </div>
        <Link className='text-white p-5 block md:inline-block hover:bg-neutral-950/50' href={'/contact-us'}>Contact us</Link>
    </div>
  )
}
