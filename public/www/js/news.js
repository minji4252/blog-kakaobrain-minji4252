// html 을 제어하므로
window.addEventListener("load", function () {
  //할일
  const dataUrl = "./apis/news.json";
  fetch(dataUrl)
    .then((response) => {
      //   console.log(response);
      const result = response.json();
      return result;
    })
    .then((result) => {
      //   console.log(result);
      // 할일작성
      // 전체 html 저장용 일반 변수
      let allTag = "";
      const news = document.querySelector("#news");

      // for (let i = 0; i < result.length; i++) {
      //   const obj = result[i];
      //   const tag = `<a href=${obj.link} class="list-box">
      //     <div class="list-box-img br-20" style="background: url('./images/${obj.imgpath}') no-repeat center; background-size: cover"></div>
      //     <div class="list-box-cate">
      //       <img src="./images/icon/${obj.icon}" alt="${obj.category}" />
      //       <span style="color:${obj.txtcolor};">${obj.category}</span>
      //     </div>
      //     <p class="list-box-title">${obj.title}</p>
      //     <span class="list-box-day">${obj.day}</span>
      //     </a>`;
      //   allTag = allTag + tag;
      // }

      //배열이라면 반복하자
      result.forEach((item) => {
        const tag = `<a href=${item.link} class="list-box">
            <div class="list-box-img br-20" style="background: url('./images/${item.imgpath}') no-repeat center; background-size: cover"></div>
            <div class="list-box-cate">
              <img src="./images/icon/${item.icon}" alt="${item.category}" />
              <span style="color:${item.txtcolor};">${item.category}</span>
            </div>
            <p class="list-box-title">${item.title}</p>
            <span class="list-box-day">${item.day}</span>
            </a>`;
        allTag = allTag + tag;
      });

      news.innerHTML = allTag;
    })
    .catch((error) => {
      console.log(error);
    });
});
