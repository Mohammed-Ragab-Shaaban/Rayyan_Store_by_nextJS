
import { faCircleQuestion, faShieldHalved, faStarHalfStroke, faTruckFast } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { FeaturesGSAP4Div, FeaturesGSAPh1 } from './featuresGSAP'

// import React, { useRef } from 'react'




export default function Features() {
    
    // const head = useRef();
   

  return (
    <div className='my-4 bg-neutral-200'>
        <div className='manualContainer py-4'>
            <div>
                <FeaturesGSAPh1 content="Why shop with us?" />
                {/* <h1 className='text-2xl font-bold inline-block head' >Why shop with us?</h1> */}
            </div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-4'>
                <div className='p-4 text-center rounded-md bg-gray-100 flex flex-col gap-2'>
                    <FeaturesGSAP4Div h4="QUALITY AND SAVING" 
                                       p="Our commitment to excellence ensures you get the best value for your money without
                                         compromising on quality." 
                                        icon = {faStarHalfStroke}/>
                </div>
                <div className='p-4 text-center rounded-md bg-gray-100 flex flex-col gap-2'>
                      <FeaturesGSAP4Div h4="FAST SHIPPING" 
                                        p="Fast and convenient door to door delivery. Understanding the importance of receiving your items promptly." 
                                        icon = {faTruckFast} />
                  
                </div>
                <div className='p-4 text-center rounded-md bg-gray-100 flex flex-col gap-2'>
                         <FeaturesGSAP4Div h4="PAYMENT SECURITY" 
                                           p="More than 10 different secure payment methods. Shop with confidence knowing your payment information is protected." 
                                           icon = {faShieldHalved} />
                </div>
                <div className='p-4 text-center rounded-md bg-gray-100 flex flex-col gap-2'>
                         <FeaturesGSAP4Div h4="HAVE QUESTIONS?" 
                                           p="24/7 Customer Service - We're here and happy to help! Whether you have inquiries about products, orders, or anything else, we're just a message away." 
                                           icon = {faCircleQuestion} />
                </div>
            </div>
        </div>
    </div>
  )
}
