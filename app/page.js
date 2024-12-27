import Image from "next/image";
import VideoSlider from "./components/header/Videos/VideoSlider";
import Features from "./components/homePage-body/features";
import ComingSlide from "./components/homePage-body/comingSlide";
import OffersSliders from "./components/homePage-body/offersSliders";
import BrandsSlider from "./components/homePage-body/brandsSlider";


export default function Home() {
  return (
    <div>
      <main>
        <VideoSlider />
        <Features />
        <ComingSlide />
        <OffersSliders />
        <BrandsSlider />

      </main>
    </div>
  );
}





//npm i @next/font
// tailwind
//font awesome for icon
// slide swiper
// sweet alert

