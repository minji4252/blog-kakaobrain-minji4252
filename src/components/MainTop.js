import React from "react";
import "../css/maintop.css";
import SlideTopMain from "./SlideTopMain";
import SlideTopBanner from "./SlideTopBanner";
const MainTop = () => {
  return (
    <div className="main-top">
      <SlideTopMain></SlideTopMain>
      <SlideTopBanner></SlideTopBanner>
    </div>
  );
};

export default MainTop;
