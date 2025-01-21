'use client'
import { faVideo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useContext } from 'react'
import './forIconToolTips.css'
import { globalContext } from './context'
import Image from 'next/image'

export function VideoIcon(props) {

  const {toggleShowVideo,setToggleShowVideo,
    quickViewVideo, setQuickViewVideo} = useContext(globalContext);

    const showVideo = ()=>{
      setToggleShowVideo(!toggleShowVideo);
      setQuickViewVideo(props.video)
    }

  return (
          <span onClick={showVideo} className='bg-black relative *:hover:opacity-100 text-white py-1 px-2'>
            <span className='videoIconToolTip opacity-0 absolute transition-opacity duration-500 -top-8 bg-black w-20 p-1 rounded text-xs text-center right-0'>Quick video</span>
             <FontAwesomeIcon icon={faVideo} />
           </span>
  )
}


export function VideoView() {
  
  const {toggleShowVideo,setToggleShowVideo,
         quickViewVideo, setQuickViewVideo} = useContext(globalContext);

  const showVideo = ()=>{
    setToggleShowVideo(!toggleShowVideo);
  }

  return (
            <div onClick={showVideo} className={`${toggleShowVideo ? "block" : "hidden"} fixed top-0 flex justify-center items-center z-40 bg-stone-700/50  w-full right-0 h-screen`}>
                 <div onClick={(e)=>{e.stopPropagation()}} className='w-3/4 bg-white flex flex-col justify-center rounded-md p-4'>
                     <div className='flex flex-col sm:flex-row'>
                         {
                         quickViewVideo == null ? <div>Sorry there is no video for this product</div> : quickViewVideo.map((el,index)=>{
                             return(
                               <div key={index} className='p-2'>
                                 {/* <Image src={`http://localhost:1337${el.url}`}  */}
                                    <video controls autoPlay loop>
                                        <source src={`http://localhost:1337${el.url}`} type='video/mp4' />
                                        <track  src={`http://localhost:1337${el.url}`}
                                                kind="subtitles"
                                                srcLang="en"
                                                label="English" />
                                                Your browser does not support the video tag.
                                    </video> 
                               </div>
                             ) 
                           })
                         }
         
                     </div>
                     <button onClick={showVideo}  className='py-2 px-4 bg-green-700 rounded-md  text-white'>Done</button>
                 </div>
              </div>
  )
}


