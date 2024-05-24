import React from "react";
import "../css/mainbottom.css";
import MainBottomList from "./MainBottomList";
import MainBottomCards from "./MainBottomCards";
const MainBottom = () => {
  return (
    <div className="main-bottom">
      <MainBottomList></MainBottomList>
      <MainBottomCards></MainBottomCards>
    </div>
  );
};

export default MainBottom;
