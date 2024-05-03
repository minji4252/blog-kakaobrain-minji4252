// html이 load되고 scroll의 위치를 파악하는게 좋음
// window.addEventListener load 안에 scroll 담기
window.addEventListener("load", function () {
  // header 에 라인의 css(.header)를 적용한다. .을 빼면 html<header>를 찾아감
  const header = document.querySelector(".header");

  // 함수안은 수정안해도 되도록 개선
  const headerActiveClass = "line-active"; // 변경되는 css 클래스명
  // 클래스(line-active)가 적용되는 최소 높이값
  const headerActiveValue = 0;

  /*
   * 스크롤바의 위치에 따라서 css 적용함수
   * _html : 대상 html 태그 > header
   * _tgY : css 가 적용될 위치 값 > headerActiveValue
   * _avtive : 적용할 css 클래스명 > headerActiveClass
   * _scY : 스크롤바의 위치 > window.scrollY
   */
  function showLine(_html, _tgY, _active, _scY) {
    // 브라우저에 스크롤바의 위치를 파악해야함.
    // 현재 스크롤바의 위치값 알아내기
    // scY = window.scrollY;
    // scY 즉, 스크롤바의 위치가 0보다 크면 스크롤 된거다.

    if (_scY > _tgY) {
      // header 객체, 즉 DOM 에 css 목록에 추가하자 (클래스명)
      _html.classList.add(_active);
    } else {
      // header 객체, 즉 DOM 에 css 목록에 제거하자 (클래스명)
      _html.classList.remove(_active);
    }
  }

  showLine(header, headerActiveValue, headerActiveClass, window.scrollY);

  // 스크롤을 할때마다 함수(showLine) 실행
  window.addEventListener("scroll", function () {
    showLine(header, headerActiveValue, headerActiveClass, window.scrollY);
  });
});

// 모바일 메뉴 관련기능 추가
window.addEventListener("load", function () {
  // 필요로 한 DOM 요소를 보관한다
  // 버튼(메뉴아이콘)
  const mbBt = document.querySelector(".mobile-menu a");
  // 배경
  const mbBg = document.querySelector(".mb-header-bg");
  // 메뉴
  const mbMenu = document.querySelector(".mb-header-menu");

  //현재 모바일 메뉴 펼쳐진 상태를 보관
  let mbMenuOpen = false;

  // 2. 버튼기능
  // 2.1. 클릭하면 아이콘을 바꾼다
  // 2.2. 클릭하면 모바일 메뉴 및 배경을 보여준다.
  mbBt.addEventListener("click", function (event) {
    // a 태그이므로 웹브라우저가 갱신된다.
    // a 태그가 작동이 안되도록 막는다. preventDefault()
    event.preventDefault();
    // 메뉴 닫을 때 아이콘바꾸기
    if (mbMenuOpen) {
      mbBt.classList.remove("mobile-menu-open");
      mbBg.classList.remove("mb-header-bg-show");
      mbMenu.classList.remove("mb-header-menu-show");
      mbMenuOpen = false;
    } else {
      // 메뉴가 닫혀있을 때 클릭하면 펼침
      mbBt.classList.add("mobile-menu-open");
      mbBg.classList.add("mb-header-bg-show");
      mbMenu.classList.add("mb-header-menu-show");
      mbMenuOpen = true;
    }
  });

  // 반응형 코드
  window.addEventListener("resize", function () {
    // 브라우저의 너비를 알아낸다.
    const winWidth = window.innerWidth;

    if (winWidth > 1024) {
      if (mbMenuOpen) {
        mbBt.classList.remove("mobile-menu-open");
        mbBg.classList.remove("mb-header-bg-show");
        mbMenu.classList.remove("mb-header-menu-show");
        mbMenuOpen = false;
      }
    }
  });
});
