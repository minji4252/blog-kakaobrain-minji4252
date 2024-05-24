import React, { useEffect, useRef, useState } from "react";

const SlideLogo = ({ isOver }) => {
  const [logoSlide, setLogoSlide] = useState(null);
  // js 코드 자리
  //   const headerLogoLink = useRef(null);

  useEffect(() => {
    const slide = new Swiper(".swlogo", {
      effect: "fade",
      speed: 500,
      autoplay: {
        delay: 1000,
        disableOnInteraction: false,
      },
    });

    slide.autoplay.stop();

    setLogoSlide(slide);

    // const headerLogoLink = document.querySelector(".header-logo-link");
    // headerLogoLink.addEventListener("mouseenter", function () {
    //   logoSlide.autoplay.start();
    // });
    // headerLogoLink.addEventListener("mouseleave", function () {
    //   logoSlide.autoplay.stop();
    //   logoSlide.slideTo(0);
    // });

    return () => {};
  }, []);

  useEffect(() => {
    if (logoSlide) {
      if (isOver) {
        logoSlide.autoplay.start();
      } else {
        logoSlide.autoplay.stop();
        logoSlide.slideTo(0);
      }
    }
    return () => {};
  }, [isOver]);

  return (
    <div className="header-logo-slide" id="logo-slide">
      <div className="swiper swlogo">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog01.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog02.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog03.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog04.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog05.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog06.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog07.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog08.png" alt="카카오브레인 블로그" />
          </div>
          <div className="swiper-slide">
            <img src="./images/etc/logo-blog09.png" alt="카카오브레인 블로그" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideLogo;
