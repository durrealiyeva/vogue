const main=document.querySelector(".main")
const country = document.querySelector(".country");
const iconDown = document.querySelector(".icon");
const search = document.querySelector(".search");
const searchMain = document.querySelector(".searchMain");
const menuBar = document.querySelector(".menuBar");
const modal = document.querySelector(".modal");
const exitIcon = document.querySelector(".exit");

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
search.addEventListener("click", () => {
  if (searchMain.classList.contains("hidden")) {
    searchMain.classList.remove("hidden");
  } else {
    searchMain.classList.add("hidden");
  }
});
// Menu Hissesi
menuBar.addEventListener("click", () => {
  if(modal.classList.contains("hidden")){
    modal.classList.remove("hidden")
    main.classList.add("hidden")
  }else{
    modal.classList.add("hidden")
    main.classList.remove("hidden")
  }
});
exitIcon.addEventListener("click",()=>{
  modal.classList.add("hidden")
  main.classList.remove("hidden")
})
