'use client'
import React from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
// import { ScrollTrigger } from 'gsap/all'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStarHalfStroke,faTruckFast,faShieldHalved } from '@fortawesome/free-solid-svg-icons';
import Features from './features';



// gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(ScrollTrigger);

export function FeaturesGSAPh1(props) {
   useGSAP(()=>{
        gsap.to(".head",{
            scrollTrigger:{
                trigger:".head",
                start:"top 90%",
                end:"top 70%",
                scrub:true
                      },
            opacity:1,
            duration:3
             })
   })
  return (
        <h1 className='text-2xl font-bold inline-block opacity-0 head' >{props.content}</h1>
  )
}



export function FeaturesGSAP4Div(props) {
    useGSAP(()=>{
        
        let mm = gsap.matchMedia();

        mm.add({
            isMobile : "(max-width: 640px)",
            isTablet :"(max-width: 768px)",
            isDesktop : "(min-width: 769px)"
        },(context)=>{
            let {isMobile , isTablet ,isDesktop } = context.conditions;
            const features = gsap.utils.toArray(".features");
            features.forEach(feat =>{
                  gsap.to(".features",{
                      scrollTrigger:{
                          trigger:".features",
                          start: isMobile ? "top 70%" : isTablet ? "top 90%" : isDesktop ? "top 90%" : "top 90%",
                          end: isMobile ? "top 30%" : isTablet ? "top 50%" :  isDesktop ? "top 50%" : "top 50%",
                          scrub:true,
                                },
                      y:0,
                      duration:3,
                      opacity:1,
                      stagger:0.5
                       })
                })
        })
        
    })
   return (
         <div className='features translate-y-20 opacity-0 p-4 text-center rounded-md bg-gray-100 flex flex-col gap-2'> 
               <div><FontAwesomeIcon icon={props.icon} className='size-10'/></div>
                    <h4 className='font-bold'>{props.h4}</h4>
                    <p>{props.p}</p>
         </div>
   )
 }






