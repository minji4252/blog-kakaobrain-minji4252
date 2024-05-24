import React, { useEffect, useRef } from "react";

const MbHeader = ({ mbMenuOpen, setMbMenuOpen }) => {
  // 모바일 메뉴 관련
  const mbBg = useRef(null);
  const mbMenu = useRef(null);

  // 모바일 메뉴 관련 HTML 처리
  useEffect(() => {
    // 메뉴 보이고, 숨기기를 합니다.
    if (mbMenuOpen) {
      mbBg.current.classList.add("mb-header-bg-show");
      mbMenu.current.classList.add("mb-header-menu-show");
    } else {
      mbBg.current.classList.remove("mb-header-bg-show");
      mbMenu.current.classList.remove("mb-header-menu-show");
    }
    return () => {};
  }, [mbMenuOpen]);

  useEffect(() => {
    const resizeFn = function () {
      const winWidth = window.innerWidth;
      if (winWidth > 1024) {
        if (mbMenuOpen) {
          // mbBt.classList.remove("mobile-menu-open");
          mbBg.current.classList.remove("mb-header-bg-show");
          mbMenu.current.classList.remove("mb-header-menu-show");
        }
        setMbMenuOpen(false);
      }
    };
    window.addEventListener("resize", resizeFn);
    // cleanUp 함수
    return () => {
      window.removeEventListener("resize", resizeFn);
    };
  }, []);

  return (
    <>
      <div className="mb-header-bg" ref={mbBg}></div>
      <div className="mb-header-menu" ref={mbMenu}>
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
