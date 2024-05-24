import { useEffect, useRef, useState } from "react";
import SlideTopMainItem from "./SlideTopMainItem";
import { getTopSlide } from "../apis/api";

const SlideTopMain = () => {
  // hook 자리
  const whereTag = useRef(null);
  const slideArea = useRef(null);
  // 슬라이드 데이터 관리 (화면 갱신 반영)
  const [list, setList] = useState([]);

  const getTopSlideCall = async () => {
    const result = await getTopSlide();
    setList(result);
    const topSlide = new Swiper(".topslide", {
      loop: true,
      speed: 800,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    // const slideArea = document.querySelector(".topslide");
    slideArea.current.addEventListener("mouseenter", function () {
      topSlide.autoplay.stop();
    });
    slideArea.current.addEventListener("mouseleave", function () {
      topSlide.autoplay.start();
    });
  };

  useEffect(() => {
    getTopSlideCall();
    return () => {};
  }, []);

  return (
    <div className="main-top-slide br-20">
      <div className="swiper topslide" ref={slideArea}>
        <div className="swiper-wrapper" ref={whereTag}>
          {/* 아이템 배치 */}
          {list.map((item, index, arr) => (
            <SlideTopMainItem
              key={index}
              url={item.url}
              pic={item.pic}
              title={item.title}
            ></SlideTopMainItem>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
};

export default SlideTopMain;
