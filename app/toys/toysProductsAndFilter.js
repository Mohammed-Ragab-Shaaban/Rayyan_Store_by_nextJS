import React from 'react'
import ToysProducts from './toysProducts'
import Image from 'next/image'

export default function ToysProductsAndFilter() {

    // const xx =["Ali","Mohammed","Ali","Mohammed"]

  return (
    <div>
        <div className='manualContainer'>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 md:col-span-3 bg-yellow-300'>Filter
                     {/* <Image src="http://localhost:1337/uploads/d1_392d34f524.webp" alt="product-Image" style={{maxWidth:"50px"}}/> */}
                </div>
                <div className='col-span-12 md:col-span-9'>
                    <ToysProducts />
                </div>
            </div>
        </div>
    </div>
  )
}
