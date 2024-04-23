// html 활용
window.addEventListener("load", function () {
  // 슬라이드를 보관한다.
  let cardSlide = null;
  // 슬라이드 만드는 함수
  function makeCardSlide() {
    const wWidth = window.innerWidth;
    if (wWidth > 1024) {
      // swiper 를 제거
      if (cardSlide !== null) {
        // swiper 를 제거하는 코드
        cardSlide.destroy();
        cardSlide = null;
      }
    } else {
      // swiper 를 생성한다.
      // swiper 작동시키기(모바일에서만 작동해야함)
      if (cardSlide === null) {
        cardSlide = new Swiper(".cardslide", {
          loop: true,
          slidesPerView: 4,
          spaceBetween: 20,
        });
      }
    }
  }

  const dataUrl = "./apis/cards.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      // 우리가 할일을 진행
      // 내용을 출력할 DOM 선택
      const cardsWhere = document.querySelector(".cardslide .swiper-wrapper");
      // 출력해줄 html 글자를 모을 일반 변수 :  let 으로 작성.
      let cardsTags = "";
      // 배열의 반복문 중 forEach 를 사용해서 태그 글자를 만든다.
      result.forEach((item) => {
        // console.log(item); 아이템은 {} 형태이다. .으로 접근
        const tag = ` 
        <div class="swiper-slide">
            <a href=${item.link} class="card-link br-20" style="background: url('./images/${item.imgpath}') no-repeat center;background-size: cover;" >
                <div class="card-txt">
                    <h3 class="card-title">${item.cardname}</h3>
                    <span class="card-count">${item.cardno}</span>
                </div>
            </a>
        </div> `;
        // console.log(tag);
        cardsTags = cardsTags + tag;
        // cardsTags += tag;
      });
      //   console.log(cardsTags);
      cardsWhere.innerHTML = cardsTags;
      makeCardSlide();
    })
    .catch((error) => {
      console.log(error);
    });

  // 화면의 너비를 체크하자.
  // 내용이 로딩이 되면 화면의 너비를 체크 하고 사이즈에 따라서
  // 슬라이드 생성 할지 말지를 작성해야 한다.
  window.addEventListener("resize", function () {
    //화면에 resize가 일어나면 너비 체크
    makeCardSlide();
  });
});
