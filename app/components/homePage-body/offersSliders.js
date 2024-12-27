import Image from 'next/image'
import React from 'react'
import offer1 from '../../../assets/images/Home page discount 1.jpg'
import offer2 from '../../../assets/images/Home page discount 2.jpg'
import offer3 from '../../../assets/images/Home page discount 3.jpg'
import OffersSlidersGSAP from './offersSlidersGSAP'

export default function OffersSliders() {
  return (
    <div>
        <div className='manualContainer'>

            <OffersSlidersGSAP />
            
            {/* <OffersSlidersGSAP>
                <Image src={offer1} alt='discount' className='w-full'/>
            </OffersSlidersGSAP>
            <OffersSlidersGSAP>
                <Image src={offer2} alt='discount' className='w-full'/>
            </OffersSlidersGSAP>
            <OffersSlidersGSAP>
                <Image src={offer3} alt='discount' className='w-full'/>
            </OffersSlidersGSAP> */}
        </div>
    </div>
  )
}







