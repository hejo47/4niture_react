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
import Banner1 from "../../img/banner/SlideMDPick-1.jpg";
import Banner2 from "../../img/banner/SlideMDPick-2.jpg";
import Banner3 from "../../img/banner/SlideMDPick-3.jpg";
import Banner4 from "../../img/banner/SlideMDPick-4.jpg";
import Banner5 from "../../img/banner/SlideMDPick-5.jpg";

const Swipe = () => {
  return (
    <>
      <Swiper
        className={styles.Swiper}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        speed={200}
        effect={"fade"}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        // onSlideChange={() => console.log("slide change")}

        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        loop
      >
        <SwiperSlide>
          <div class={styles.imgbox}>
            <img src={Banner1} alt="배너1" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class={styles.imgbox}>
            <img src={Banner2} alt="배너2" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class={styles.imgbox}>
            <img src={Banner3} alt="배너3" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class={styles.imgbox}>
            <img src={Banner4} alt="배너4" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class={styles.imgbox}>
            <img src={Banner5} alt="배너5" />
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Swipe;
