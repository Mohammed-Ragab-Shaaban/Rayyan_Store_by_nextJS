'use client'
import { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PhonesSlider1, PhonesSlider2, PhonesSlider3 } from './phonesSlider123';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(useGSAP);

export default function PhonesSlider() {

  const [activeSlide, setActiveSlide] = useState(0);

    useGSAP(()=>{
        gsap.from(".phoneSlider1", { 
            opacity:0,
            y:100,
            duration:1 });
    },[activeSlide])

    const handleSlideChange = (swiper)=>{
      setActiveSlide(swiper.realIndex);
      console.log(swiper.realIndex)
    }


  return (
    <div className='phoneSlider'>
            <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            // autoplay={{
            // delay: 3000,
            // disableOnInteraction: false,
            // }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            onSlideChange={handleSlideChange}
            >
            <SwiperSlide>
                <PhonesSlider1 />
                {/* <div className='phoneSlider1 absolute top-1/2 right-1/4 text-white '>
                  <h2>Zania Black Edition</h2>
                  <h1>Curvy Bevel Dual Audio</h1>
                  <button>BUY NOW</button>
               </div> */}
            </SwiperSlide>
            <SwiperSlide>
                <PhonesSlider2 />
            </SwiperSlide>
            <SwiperSlide>
                <PhonesSlider3 />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}








