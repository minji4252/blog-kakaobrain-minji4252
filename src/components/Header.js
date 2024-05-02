import React from "react";
import "../css/header.css";
const Header = function () {
  return (
    <header className="header">
      <div className="inner">
        {/* <!-- 상단 로고 --> */}
        <div className="header-logo">
          <a href="index.html" className="header-logo-link">
            <img
              src="./images/etc/logo-kakao.png"
              alt="카카오 브레인"
              className="header-logo-img"
            />
            {/* <!-- start 로고 슬라이드 --> */}
            <div className="header-logo-slide" id="logo-slide">
              <div className="swiper swlogo">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog01.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog02.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog03.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog04.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog05.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog06.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog07.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog08.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                  <div className="swiper-slide">
                    <img
                      src="./images/etc/logo-blog09.png"
                      alt="카카오브레인 블로그"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <!-- end 로고 슬라이드 --> */}
          </a>
        </div>

        {/* <!-- 상단 메뉴 --> */}
        <nav className="header-navi">
          <ul className="navi-list">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀 & 크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
            <li className="navi-search">
              <a href="#"></a>
            </li>
            <li className="mobile-menu">
              <a href="#"></a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
export default Header;
