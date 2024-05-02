import React from "react";

const MbHeader = () => {
  return (
    <>
      <div className="mb-header-bg">모바일 메뉴 작업</div>
      <div className="mb-header-menu">
        <div className="inner">
          <ul className="mb-nav">
            <li>
              <a href="#">소식</a>
            </li>
            <li>
              <a href="#">팀 & 크루</a>
            </li>
            <li>
              <a href="#">영입</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MbHeader;
