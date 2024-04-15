/*
 상단 로고 기능
 처음에는 로고가 기본 그림이 보인다.
 사용자가 마우스 오버를 하면 로고가 부드럽게 변경이 된다.
 사용자가 마우스 아웃을 하면 로고가 첫 기본 그림으로 보인다.

 나는 위의 기능을 구현하기 위해서 Swiper 라이브러리를 사용할 예정이다.
 이유는 React로 마이그레이션 하기위해
    1. 라이브러리를 사용하려면 레퍼런스를 참조해야 한다.
    https://swiperjs.com/ -> Resources -> Demo
*/

// 만약 html 태그를 참조해야 하는 경우라면
// 1. html 태그 제일 뒷쪽에서 참조한다 (비추천)
// 2. window.onload = function() { 코드 } (비추천)
// 3. window.addEventListener("laod", function(){ 코드 }) (적극추천)

// 아래 구문은 html태그, css파일, image파일, js파일 등이 로드완료시 실행

window.addEventListener("load", function () {
  const logoSlide = new Swiper(".swlogo", {
    effect: "fade",
    speed: 500,
    autoplay: {
      delay: 200,
      disableOnInteraction: false, //간섭이 가능한지
    },
  });
  // 무조건 모션이 재생 되면 안됨.
  logoSlide.autoplay.stop();
  // 사용자가 마우스 오버 하면 모션 재생
  // .header-logo-link 클래스에 마우스 오버하면 logoSlide가 모션 재생
  var headerLogoLink = document.querySelector(".header-logo-link");
  // console.log(headerLogoLink);
  headerLogoLink.addEventListener("mouseenter", function () {
    logoSlide.autoplay.start();
  });
  headerLogoLink.addEventListener("mouseleave", function () {
    logoSlide.autoplay.stop();
    logoSlide.slideTo(0);
  });
});

// 과연 swlogo 라는 html 클래스를 찾을 수 있을까?
// 증명해 보자.
//const swLogo = document.querySelector(".swlogo");
//console.log(swLogo);
