import { useEffect, useRef, useState } from "react";
import MainBottomCardsItem from "./MainBottomCardsItem";
import { getCards, getNews } from "../apis/api";
// Swiper 활용
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
// Swiper 를 실시간으로 생성, 삭제하는 경우 활용
import SwiperInit from "swiper";

const MainBottomCards = () => {
  // swiper 를 보관해 두고 화면 사이즈에 따라서 만들고, 지우고
  const cardSlide = useRef(null);
  const [cardList, setCardList] = useState([]);
  // swiper 옵션
  const swiperOption = {
    spaceBetween: 20,
    slidesPerView: 4,
    loop: true,
    onInit: swiper => {
      cardSlide.current = swiper;
    },
  };

  const makeCardSlide = () => {
    const wWidth = window.innerWidth;
    if (wWidth > 1024) {
      // swiper 를 제거
      if (cardSlide.current) {
        // swiper 를 제거하는 코드
        cardSlide.current.destroy();
        // useState 는 함수가 종료되어야 화면에 반영된다.
        // setCardSlide(null);
      }
    } else {
      // swiper 를 생성한다.
      // swiper 작동시키기(모바일에서만 작동해야함)
      // 리액트 swiper 에서는 destroyed 속성이 있어요. (깨졌는지 안깨졌는지 확인)
      if (cardSlide.current?.destroyed) {
        //Swiper를 실시간 만들기
        cardSlide.current = new SwiperInit(".cardslide", swiperOption);

        // 즉시 갱신이 안되고 있다. (useEffect 에서 체크하도록 적용)
        // useState 는 함수가 종료되어야 화면에 반영된다.
        // setCardSlide(tempSlide);
      }
    }
  };

  // 화면의 리사이즈에 따른 슬라이드 변경 코드
  // cardSlide 상태가 바뀜을 체크한다.
  useEffect(() => {
    window.addEventListener("resize", makeCardSlide);
    return () => {
      window.removeEventListener("resize", makeCardSlide);
    };
  }, [cardSlide]);

  const getCardsCall = async () => {
    const result = await getCards();
    setCardList(result);
    makeCardSlide();
  };
  useEffect(() => {
    // axiso 호출 조심하자. await 필요
    getCardsCall();

    return () => {};
  }, []);

  return (
    <div className="main-bottom-cards">
      <h2>폴더 📁</h2>
      {/* <!-- 카드 슬라이드 --> */}
      <div className="main-bottom-cards-slide">
        <Swiper className="cardslide" {...swiperOption}>
          {cardList.map((item, index) => (
            <SwiperSlide key={index}>
              <MainBottomCardsItem
                link={item.link}
                imgpath={item.imgpath}
                cardname={item.cardname}
                cardno={item.cardno}
              ></MainBottomCardsItem>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="bt-wrap">
        <a href="#" className="bt-more">
          전체보기
        </a>
      </div>
    </div>
  );
};

export default MainBottomCards;
