import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import styles from "./BannerFT.module.css";
import "./BannerFT.css";
import Banner1 from "../../img/banner/Slide-1.jpg";
import Banner2 from "../../img/banner/Slide-2.jpg";
import Banner3 from "../../img/banner/Slide-3.jpg";


const Swipe = () => {
  return (
    <>
    <Swiper
      className={styles}
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      effect="fade"
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log("slide change")}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false
      }}
      loop
      
    >
      <SwiperSlide>
        <div className={styles.Textbox} ><h2>Textbox</h2></div>
        <img src={Banner1} alt="의자1" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.Textbox} ><h2>Textbox</h2></div>
        <img src={Banner2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <div className={styles.Textbox} ><h2>Textbox</h2></div>
        <img src={Banner3} alt="의자1" />
      </SwiperSlide>
    </Swiper>
    </>
  );
};
export default Swipe;
