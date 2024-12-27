
'use client'
import  {Swiper, SwiperSlide } from 'swiper/react'
import brand1 from '../../../assets/images/Home Page Brnds/1.jpg'
import brand2 from '../../../assets/images/Home Page Brnds/2.jpg'
import brand3 from '../../../assets/images/Home Page Brnds/3.jpg'
import brand4 from '../../../assets/images/Home Page Brnds/4.jpg'
import brand5 from '../../../assets/images/Home Page Brnds/5.jpg'
import brand6 from '../../../assets/images/Home Page Brnds/6.jpg'
import brand7 from '../../../assets/images/Home Page Brnds/7.jpg'
import brand8 from '../../../assets/images/Home Page Brnds/8.jpg'
import Image from 'next/image'
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { register } from 'swiper/element/bundle';
// import './styles.css';


register();
export default function BrandsSlider() {

    const brandImages = [
        {source:brand1 , alt:"brands"},
        {source:brand2 , alt:"brands"},
        {source:brand3 , alt:"brands"},
        {source:brand4 , alt:"brands"},
        {source:brand5 , alt:"brands"},
        {source:brand6 , alt:"brands"},
        {source:brand7 , alt:"brands"},
        {source:brand8 , alt:"brands"}
    ]
  return (
    <div className='my-12'>
        <div className='manualContainer'>
            <div className='text-center text-3xl font-bold p-8'><h1>Our Brands</h1></div>
            <Swiper 
                    navigation={true} 
                    modules={[Navigation]} 
                    className="mySwiper"
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                          },
                          768: {
                            slidesPerView: 4,
                            spaceBetween: 40,
                          },
                          1024: {
                            slidesPerView: 5,
                            spaceBetween: 50,
                          },
                    }}
                   
                    >
                    
                {
                    brandImages.map((el,index)=>{
                        return(
                            <SwiperSlide key={index} className='hhhhhhh' style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                                <Image src={el.source} alt={el.alt} />
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </div>
    </div>
  )
}
