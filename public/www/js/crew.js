// html 을 제어하므로
window.addEventListener("load", function () {
  // html 에 내용 출력하기
  const makeHtml = (_result) => {
    //   console.log(_result);
    // 할일작성
    // 전체 html 저장용 일반 변수
    let allTag = "";
    const crew = document.querySelector("#crew");
    // 아래 코드는 최적화 실패
    // const total = _result.length;
    // for (let i = 0; i < total; i++) {
    //   const obj = _result[i];
    //   const tag = `<a href=${obj.link} class="list-box">
    //       <div class="list-box-img br-20" style="background: url('./images/${obj.imgpath}') no-repeat center; background-size: cover"></div>
    //       <div class="list-box-cate">
    //         <img src="./images/icon/${obj.icon}" alt="${obj.category}" />
    //         <span style="color:${obj.txtcolor};">${obj.category}</span>
    //       </div>
    //       <p class="list-box-title">${obj.title}</p>
    //       <span class="list-box-day">${obj.day}</span>
    //       </a>`;
    //   allTag = allTag + tag;
    // }
    // 추천합니다. (조건은 대상이 배열인 경우)
    _result.forEach((item) => {
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

    crew.innerHTML = allTag;
  };

  //할일
  const dataUrl = "./apis/crew.json";
  fetch(dataUrl)
    .then((response) => {
      //   console.log(response);
      const result = response.json();
      return result;
    })
    .then((result) => {
      makeHtml(result);
    })
    .catch((error) => {
      console.log(error);
    });
});
