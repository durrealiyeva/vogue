const main = document.querySelector(".main");
const country = document.querySelector(".country");
const iconDown = document.querySelector(".icon");
const search = document.querySelector(".search");
const searchMain = document.querySelector(".searchMain");
const menuBar = document.querySelector(".menuBar");
const modal = document.querySelector(".modal");
const exitIcon = document.querySelector(".exit");
const slider = document.querySelector(".slider");
const leftIcon = document.querySelector(".leftIcon");
const rightIcon = document.querySelector(".rightIcon");

// SELECT HISSESI
country.addEventListener("mouseover", () => {
  if (iconDown.classList.contains("fa-chevron-up")) {
    styleBlack();
  } else if (iconDown.classList.contains("fa-chevron-down")) {
    styleGray();
  }
});
country.addEventListener("mouseout", () => {
  if (iconDown.classList.contains("fa-chevron-up")) {
    styleBlack();
  } else if (iconDown.classList.contains("fa-chevron-down")) {
    country.style.backgroundColor = "white";
    country.style.color = "black";
    iconDown.style.color = "black";
  }
});
country.addEventListener("click", () => {
  if (iconDown.classList.contains("fa-chevron-down")) {
    iconDown.classList.remove("fa-chevron-down");
    iconDown.classList.add("fa-chevron-up");
    country.style.backgroundColor = "black";
    country.style.color = "white";
    iconDown.style.color = "white";
  } else if (iconDown.classList.contains("fa-chevron-up")) {
    iconDown.classList.remove("fa-chevron-up");
    iconDown.classList.add("fa-chevron-down");
    styleGray();
  }
});
function styleBlack() {
  country.style.backgroundColor = "black";
  country.style.color = "white";
  iconDown.style.color = "white";
}
function styleGray() {
  country.style.backgroundColor = "rgb(237, 235, 235)";
  country.style.color = "black";
  iconDown.style.color = "black";
}
// SEARCH HISSESI
let searchToogle = false;
search.addEventListener("click", () => {
  searchToogle = !searchToogle;
  if (searchToogle) {
    searchMain.style.height = "90px";
  } else {
    searchMain.style.height = "0";
  }
});
// Menu Hissesi
menuBar.addEventListener("click", () => {
  if (modal.classList.contains("hidden")) {
    modal.classList.remove("hidden");
    main.classList.add("hidden");
  } else {
    modal.classList.add("hidden");
    main.classList.remove("hidden");
  }
});
exitIcon.addEventListener("click", () => {
  modal.classList.add("hidden");
  main.classList.remove("hidden");
});

// SLIDER HISSESI
let count = 0;
rightIcon.addEventListener("click", () => {
  if (count < 4) {
    count++;
    slider.style.transform = `translateX(-${count * 360}px)`;
    leftIcon.style.color="black"
    leftIcon.style.cursor="pointer"
  }else{
    rightIcon.style.color="gray"
    rightIcon.style.cursor="default"
  }
});
leftIcon.addEventListener("click", () => {
  if (count > 0) {
    count--;
    slider.style.transform = `translateX(-${count * 360}px)`;
    rightIcon.style.color="black"
    rightIcon.style.cursor="pointer"
  }else{
    leftIcon.style.color="gray"
    leftIcon.style.cursor="default"
  }
});
