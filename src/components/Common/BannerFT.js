import React from "react";
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Zoom } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import styles from "./BannerFT.module.css";
import "./BannerFT.css";
import Banner1 from "../../img/banner/Slide-3.jpg";
import Banner2 from "../../img/banner/Slide-2.jpg";
import Banner3 from "../../img/banner/Slide-6.jpg";
import Banner4 from "../../img/banner/Slide-7.jpg";
import Banner5 from "../../img/banner/banner-review.jpg";
import springSale from "../../img/logo.png";
import "swiper/css/pagination";

const Swipe = () => {
  let bannerobj = [
    {
      imgUrl: Banner1,
      desc: "당신의 취향을 담은 맞춤 가구, 4niture",
    },
    {
      imgUrl: Banner2,
      desc: "지금 바로 4niture에서 당신만의 맞춤 가구를 만나보세요",
    },
    {
      imgUrl: Banner3,
      desc: "4niture의 Best Item을 소개합니다.",
    },
    {
      imgUrl: Banner4,
      desc: "이 달의 신상품",
    },
    {
      imgUrl: Banner5,
      desc: "",
    },
  ];
  return (
    <>
      <Swiper
        className={styles.Swiper}
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay, Zoom]}
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
                  {item.desc===""?(<></>):(<a href="#">Shop The Sale</a>)}

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
