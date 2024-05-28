import { useEffect } from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";

const SlideTopBannerItem = ({ url, pic, title }) => {
  const styleObj = {
    background: `url('./images/${pic}') no-repeat center`,
    backgroundSize: "cover",
  };
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <a href={url} style={{ styleObj }}>
      <p className="slide-title">{title}</p>
    </a>
  );
};

export default SlideTopBannerItem;
