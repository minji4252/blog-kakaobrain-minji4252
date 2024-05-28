import { useEffect, useRef, useState } from "react";
import MainBottomListItem from "./MainBottomListItem";
import { getCrew, getNews } from "../apis/api";

const MainBottomList = () => {
  // use 의 hook 자리
  const news = useRef(null);
  // 데이터
  const [newsList, setNewsList] = useState([]);
  const [crewList, setCrewList] = useState([]);

  const getNewsCall = async () => {
    const result = await getNews();
    setNewsList(result);
  };
  useEffect(() => {
    getNewsCall();
    return () => {};
  }, []);

  const getCrewCall = async () => {
    const result = await getCrew();
    setCrewList(result);
  };
  useEffect(() => {
    getCrewCall();
    return () => {};
  }, []);

  return (
    <div className="main-bottom-list">
      {/* <!-- 새글 리스트 --> */}
      <div className="main-bottom-list-news">
        <h2>NEW. 따끈따끈 새로 나온 글 🔥</h2>
        <div className="list-wrap" id="news" ref={news}>
          {/* <!-- 데이터 연동 --> */}
          {newsList.map((item, index) => (
            <MainBottomListItem
              key={index}
              link={item.link}
              imgpath={item.imgpath}
              icon={item.icon}
              category={item.category}
              txtcolor={item.txtcolor}
              title={item.title}
              day={item.day}
            ></MainBottomListItem>
          ))}
        </div>
      </div>
      {/* <!-- 배너 --> */}
      <div className="main-bottom-list-banner br-20">
        <a href="#" className="list-banner-link"></a>
      </div>
      {/* <!-- 추천글 리스트 --> */}
      <div className="main-bottom-list-picks">
        <h2>Editor’s Pick 🏃🏻‍♀️🏃‍♂️🏃🏽</h2>
        <div className="list-wrap" id="crew">
          {/* <!-- 외부 데이터 연동 --> */}
          {crewList.map((item, index) => (
            <MainBottomListItem
              key={index}
              link={item.link}
              imgpath={item.imgpath}
              icon={item.icon}
              category={item.category}
              txtcolor={item.txtcolor}
              title={item.title}
              day={item.day}
            ></MainBottomListItem>
          ))}
        </div>
        <div className="bt-wrap">
          <a href="#" className="bt-more">
            더보기
          </a>
        </div>
      </div>
    </div>
  );
};

export default MainBottomList;
