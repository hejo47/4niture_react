import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay,Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import styles from "./BannerFT.module.css";
import "./BannerFT.css";
import Banner1 from "../../img/banner/Slide-4.jpg";
import Banner2 from "../../img/banner/Slide-5.jpg";
import Banner3 from "../../img/banner/Slide-6.jpg";
import Banner4 from "../../img/banner/Slide-7.jpg";
import springSale from "../../img/banner/Spring-Sale.jpg";
import "swiper/css/pagination"

const Swipe = () => {
  let bannerobj = [
    {
      imgUrl: Banner1,
      desc: "Thousands of deals waiting to be discovered",
    },
    {
      imgUrl: Banner2,
      desc: "The single best-selling sofa we make, now 20% off",
    },
    {
      imgUrl: Banner3,
      desc: "Get set for summer with 20% off all-new outdoor sets",
    },
    {
      imgUrl: Banner4,
      desc: "There’s nothing like leather, especially when it’s 30% off",
    },
  ];
  return (
    <>
      <Swiper
        className={styles.Swiper} 
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay,Zoom]}
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
        zoom={true}
        
        
      >
        {bannerobj.map((item) => {
          return (
            <SwiperSlide>
              <div className={styles.imgbox} key={item.id}>
                <div className={styles.Textbox}>
                  <div className={styles.springWrap}>
                    <img src={springSale} alt="스프링세일" />
                  </div>
                  <h2>{item.desc}</h2>
                  <a href="#">Shop The Sale</a>
                </div>
                <img src={item.imgUrl} alt="배너" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};
export default Swipe;
