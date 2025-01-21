'use client'
import Image from 'next/image'
import sliderImage_1 from '../../../../assets/project videos/gif 1.gif'
import sliderImage_2 from '../../../../assets/project videos/gif 2.gif'
import sliderImage_3 from '../../../../assets/project videos/gif 3.gif'
import sliderImage_4 from '../../../../assets/project videos/gif 4.gif'
import sliderImage_5 from '../../../../assets/project videos/gif 5.gif'
import React, { useState } from 'react'
// import { Swiper, SwiperSlide } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
// import './styles.css';
// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';


export default function VideoSlider() {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    
  return (
    <div className='homeSlider'>
       <div>
       <Swiper
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
        
        
      >
       
       
        <SwiperSlide>
            <Image src={sliderImage_2} alt='gif photos' className='w-full videoHomeSlider'  priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_3} alt='gif photos' className='w-full videoHomeSlider' priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_4} alt='gif photos' className='w-full videoHomeSlider' priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_1} alt='gif photos' className='w-full videoHomeSlider' priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_5} alt='gif photos' className='w-full videoHomeSlider' priority={true}/>
        </SwiperSlide>
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
        autoplay={{delay:1000,disableOnInteraction: false}}
        
      >
       
      
        <SwiperSlide>
            <Image src={sliderImage_2} alt='gif photos' style={{ maxHeight:"10vh"}} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_3} alt='gif photos' style={{ maxHeight:"10vh"}} priority={true}/>
        </SwiperSlide>
        <SwiperSlide>
            <Image src={sliderImage_4} alt='gif photos' style={{ maxHeight:"10vh"}} priority={true}/>
        </SwiperSlide>

        <SwiperSlide>
            <Image src={sliderImage_1} alt='gif photos' style={{ maxHeight:"10vh"}} priority={true}/>
        </SwiperSlide>
        
        <SwiperSlide>
            <Image src={sliderImage_5} alt='gif photos' style={{ maxHeight:"10vh"}} priority={true}/>
        </SwiperSlide>
      </Swiper>
       </div>
    </div>
  )
}
