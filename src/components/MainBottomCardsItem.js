import { useEffect } from "react";

const MainBottomCardsItem = ({ link, imgpath, cardname, cardno }) => {
  const styleCard = {
    background: `url('./images/${imgpath}') no-repeat center`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <div className="swiper-slide">
      <a href={link} className="card-link br-20" style={styleCard}>
        <div className="card-txt">
          <h3 className="card-title">{cardname}</h3>
          <span className="card-count">{cardno}</span>
        </div>
      </a>
    </div>
  );
};

export default MainBottomCardsItem;
