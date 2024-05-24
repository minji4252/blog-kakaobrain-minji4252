import { useEffect } from "react";

const MainBottomListItem = ({
  link,
  imgpath,
  icon,
  category,
  txtcolor,
  title,
  day,
}) => {
  // hook 자리
  // css 자리
  const styleImg = {
    background: `url('./images/${imgpath}') no-repeat center`,
    backgroundSize: "cover",
  };
  const styleCate = {
    color: txtcolor,
  };
  // 아이콘
  const iconUrl = `./images/icon/${icon}`;

  useEffect(() => {
    return () => {};
  }, []);
  return (
    <a href={link} className="list-box">
      <div className="list-box-img br-20" style={styleImg}></div>
      <div className="list-box-cate">
        <img src={iconUrl} alt={category} />
        <span style={styleCate}>{category}</span>
      </div>
      <p className="list-box-title">{title}</p>
      <span className="list-box-day">{day}</span>
    </a>
  );
};

export default MainBottomListItem;
