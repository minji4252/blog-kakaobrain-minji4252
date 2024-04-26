window.addEventListener("load", function () {
  const colseBt = document.querySelector(".popup-close");
  const popup = document.querySelector(".popup");
  colseBt.addEventListener("click", function () {
    popup.style.display = "none";
  });
});
