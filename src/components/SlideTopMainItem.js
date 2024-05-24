import { useEffect } from "react";

const SlideTopMainItem = ({ url, pic, title }) => {
  const styleObj = {
    background: `url('./images/${pic}') no-repeat center`,
    backgroundSize: "cover",
  };

  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div className="swiper-slide">
      <a href={url} style={styleObj}>
        <p
          className="slide-title"
          dangerouslySetInnerHTML={{ __html: title }}
        ></p>
      </a>
    </div>
  );
};

export default SlideTopMainItem;
