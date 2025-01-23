"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import Image from "next/image";

export default function SliderForSinglePhones(props) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div>
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper2 border rounded-md mb-2"

      >
        {props.SinglePhones.images.map((el, index) => {
          return (
            <SwiperSlide key={index} className="p-2">
              <Image
                src={`http://localhost:1337${el.url}`}
                alt="toys"
                width={500}
                height={500}
                style={{ objectFit: "contain", objectPosition: "50% 50%",maxHeight:"500px" }}
                className=" transition-transform duration-500 w-full h-full"
                priority={true}

                
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      <Swiper
        loop={true}
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper h-28"
        autoplay={{ delay: 1000, disableOnInteraction: false }}
        
      >
        {props.SinglePhones.images.map((el, index) => {
          return (
            <SwiperSlide className="border rounded-md" key={index}>
              <Image
                src={`http://localhost:1337${el.url}`}
                alt="toys"
                width={500}
                height={500}
                style={{ objectFit: "contain", objectPosition: "50% 50%",maxHeight:"90px" }}
                className=" transition-transform duration-500 w-full h-full"
                priority={true}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
}
