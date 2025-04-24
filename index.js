const hamburgerIcon = document.getElementById("hamburgerIcon");
const phoneAside = document.getElementById("phoneAside");
const phoneAsideBg = document.querySelector(".phoneAsideBg");
const closeIcon = document.querySelector(".closeIcon");

hamburgerIcon.addEventListener("click", function () {
  phoneAside.style.display = "block";
  phoneAsideBg.style.display = "block";
});

closeIcon.addEventListener("click", function () {
  phoneAside.style.display = "none";
  phoneAsideBg.style.display = "none";
});

document.addEventListener("click", function (event) {
  if (
    !phoneAside.contains(event.target) &&
    phoneAsideBg.contains(event.target) &&
    event.target !== hamburgerIcon
  ) {
    phoneAside.style.display = "none";
    phoneAsideBg.style.display = "none";
  }
});
