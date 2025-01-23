'use client'
import { useContext, useRef, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { PhonesSlider1, PhonesSlider2, PhonesSlider3 } from './phonesSlider123';
import { globalContext } from '../components/context';


export default function PhonesSlider() {

  // const [activeSlide, setActiveSlide] = useState(0);
  const {activeSlide, setActiveSlide} = useContext(globalContext);

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








