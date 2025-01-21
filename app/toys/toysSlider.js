'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ToysSlider1, ToysSlider2, ToysSlider3 } from './toysSlider123';

export function ToysSlider() {

  return (
    <div>
        <Swiper 
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
            delay: 2500,
            disableOnInteraction: false,
            }}
            pagination={{
            clickable: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            
            >
            <SwiperSlide>
                <ToysSlider1 />
            </SwiperSlide>
            <SwiperSlide>
                <ToysSlider2 />
            </SwiperSlide>
            <SwiperSlide>
                <ToysSlider3 />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}




