import React from "react";
import "../css/maintop.css";
const MainTop = () => {
  return (
    <div className="main-top">
      <div className="main-top-slide br-20">
        {/* <!-- Start 상단 슬라이드 --> */}
        <div className="swiper topslide">
          <div className="swiper-wrapper">{/* 데이터연동 */}</div>
          <div className="swiper-pagination"></div>
        </div>
        {/* <!-- End 상단 슬라이드 --> */}
      </div>
      <div className="main-top-banner br-20">
        {/* <!-- Start 타이틀 배너 --> */}
        <div className="swiper bannerslide">
          <div className="swiper-wrapper">
            {/* <!-- 외부 데이터 연동 --> */}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        {/* <!-- End 타이틀 배너 --> */}
      </div>
    </div>
  );
};

export default MainTop;
