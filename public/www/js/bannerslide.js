window.addEventListener("load", function () {
  // 할일
  const dataUrl = "./apis/banner.json";
  fetch(dataUrl)
    .then((response) => {
      const result = response.json();
      return result;
    })
    .then((result) => {
      let tagS = "";
      for (let i = 0; i < result.length; i++) {
        const obj = result[i];
        const temp = `<div class="swiper-slide">
        <a href="${obj.url}" style="background: url('./images/${obj.pic}' 
        no-repeat center; background-size:cover;)">
          <p class="slide-title">${obj.title}</p>
        </a>
      </div>`;
        tagS += temp;
      }
      //console.log(tagS); 확인
      const whereTag = this.document.querySelector(
        ".bannerslide .swiper-wrapper"
      );
      whereTag.innerHTML = tagS;
      const bannerSlide = new Swiper(".bannerslide", {
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
    })
    .catch((error) => {
      console.log(error);
    });
});
