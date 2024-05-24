import React, { useEffect, useRef, useState } from "react";
import SlideTopBannerItem from "./SlideTopBannerItem";
import { getBanner, getNews, getTopSlide } from "../apis/api";

const SlideTopBanner = () => {
  // js 코드 자리
  const whereTag = useRef(null);
  // 데이터
  const [topBannerData, setTopBannerData] = useState([]);

  // axios 를 연동하는 경우는 2가지 경우가 많다.
  // 1. 초기 화면 출력용 api (로딩창 ? )
  // 2. 사용자 행동에 따른 api

  // 1번용 axios 를 위해서 useEffect 를 쓴다.
  // axios 를 컴포넌트에서 사용할때 비동기 함수로 처리함.

  const getBannerCall = async () => {
    const result = await getBanner();
    // 화면 갱신을 위해서 useState 로 담아야 한다.
    setTopBannerData(result);
    const bannerSlide = new Swiper(".bannerslide", {
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  };

  useEffect(() => {
    getBannerCall();
    return () => {};
  }, []);

  return (
    <div className="main-top-banner br-20">
      <div className="swiper bannerslide">
        <div className="swiper-wrapper" ref={whereTag}>
          {/* 데이터 출력 */}
          {topBannerData.map((item, index, arr) => (
            <SlideTopBannerItem
              key={index}
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopBannerItem>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopBanner;
