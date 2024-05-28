import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

const SlideLogo = ({ isOver }) => {
  // Swiper 를 저장한다.
  // html 의 swiper 를 모듈로 삽입하면 최종적으로 html 생성됨
  const swLogoSlide = useRef(null);
  // 이미지 리스트
  const imgArr = [
    "logo-blog01.png",
    "logo-blog02.png",
    "logo-blog03.png",
    "logo-blog04.png",
    "logo-blog05.png",
    "logo-blog06.png",
    "logo-blog07.png",
    "logo-blog08.png",
    "logo-blog09.png",
  ];

  // Swiper의 옵션은 별도로 변수에 담아서 관리 추천
  const swiperOption = {
    speed: 500,
    effect: "fade",
    autoplay: { delay: 1000, disableOnInteraction: false },
    modules: [EffectFade, Autoplay],
    onInit: swiper => {
      // 매개변수 swiper 는 현재 생성된 슬라이드를 말함.
      swiper.autoplay.stop();
      swLogoSlide.current = swiper;
    },
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div
      className="header-logo-slide"
      id="logo-slide"
      onMouseEnter={() => {
        swLogoSlide.current?.autoplay.start();
      }}
      onMouseLeave={() => {
        swLogoSlide.current?.autoplay.stop();
        swLogoSlide.current?.slideTo(0);
      }}
    >
      <Swiper {...swiperOption}>
        {imgArr.map((item, index) => (
          <SwiperSlide key={index} style={{ background: "#fff" }}>
            <img src={`./images/etc/${item}`} alt="카카오브레인 블로그" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideLogo;
