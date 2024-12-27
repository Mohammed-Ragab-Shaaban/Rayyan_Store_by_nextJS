'use client'
import { faEye, faL } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext, useState } from 'react'
import './forIconToolTips.css'
import { globalContext } from './context'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Image from 'next/image'


export function QuickViewIcon(props) {

  const {toggleShowImages , setToggleShowImages,
          quickViewImages, setQuickViewImages} = useContext(globalContext);

  const showImages = ()=>{
    setToggleShowImages(!toggleShowImages);
    setQuickViewImages(props.images);
  }

  return (
    <span onClick={showImages}  className='bg-black relative *:first:hover:opacity-100 text-white py-1 px-2'>
          <span className='quickViewIconToolTip absolute opacity-0 transition-All duration-500 -top-8 bg-black w-20 p-1 rounded text-xs text-center -left-3/4'>Quick view</span>
          <FontAwesomeIcon icon={faEye} />
      </span>
  )
}




export function QuickViewImages(){

  const {toggleShowImages , setToggleShowImages,
        quickViewImages, setQuickViewImages} = useContext(globalContext);

  const showImages = ()=>{
    setToggleShowImages(!toggleShowImages);
    console.log(quickViewImages[0].name)
  }

  return(
    <div onClick={showImages} className={`${toggleShowImages ? "block" : "hidden"} fixed top-0 flex justify-center items-center z-40 bg-stone-700/50  w-full right-0 h-screen`}>
        <div onClick={(e)=>{e.stopPropagation()}} className='w-fit h-fit bg-white flex flex-col justify-center rounded-md p-4'>
            <div className='flex flex-col sm:flex-row'>
                {
                  quickViewImages.map((el,index)=>{
                    return(
                      <div key={index}>
                        <Image src={`http://localhost:1337${el.url}`} 
                                alt='toys' 
                                width={200}
                                height={200}
                                // style={{objectFit:'contain',objectPosition:"50% 50%"}}
                                className=' transition-transform duration-500 ' />
                      </div>
                    ) 
                  })
                }

            </div>
            <button onClick={showImages}  className='py-2 px-4 bg-green-700 rounded-md  text-white'>Done</button>
        </div>
     </div>

  )
}



