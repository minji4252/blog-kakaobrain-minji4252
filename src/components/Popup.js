import React, { useEffect, useRef } from "react";
import "../css/popup.css";
const Popup = () => {
  // 자바스크립트 코드 자리
  // html 태그를 찾을 때는 useRef 를 사용하자.
  // 창닫기 버튼 html 태그 찾기
  const closeBt = useRef(null);
  // 팝업창 html 태그 찾기
  const popup = useRef(null);

  // 리액트에서 화면에 컴포넌트 렌더링 된 시점
  useEffect(() => {
    //const closeBt = document.querySelector(".popup-close");
    //const popup = document.querySelector(".popup");
    // console.log(closeBt.current);
    const closeBt_Elememt = closeBt.current;
    const popup_Elememt = popup.current;
    const handleClick = function () {
      if (popup_Elememt) {
        popup_Elememt.style.display = "none";
      }
    };

    if (closeBt_Elememt) {
      closeBt_Elememt.addEventListener("click", handleClick);
    }

    // cleanUp 함수 : 컴포넌트가 파괴될때 실행하는 함수
    return () => {
      if (closeBt_Elememt) {
        closeBt_Elememt.removeEventListener("click", handleClick);
      }
    };
  }, []);

  return (
    <div className="popup" ref={popup}>
      <div className="popup-content">
        <p>
          <strong>해당 사이트는 스터디용으로 제작되었으며, 모든 리소스의 저작권은 원저작자에게 있습니다.</strong> <br />
          * 본 사이트는 Chrome 에 최적화되어 있습니다. <br />* 해당 사이트와 관련한 문제가 있으면 연락을 주시면 감사하겠습니다.
        </p>
        <button className="popup-close" ref={closeBt}>
          창닫기
        </button>
      </div>
    </div>
  );
};

export default Popup;
