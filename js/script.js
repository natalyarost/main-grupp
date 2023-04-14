const button = document.querySelector(".button");
const popup = document.querySelector(".popup");
const closeButton = document.querySelector(".close__popup");
const burger = document.querySelector(".burger");
const lines = document.querySelectorAll(".burger__line");
const popupMenu = document.querySelector(".popup__menu");

function openPopup() {
  popup.classList.add("popup__opend");
}

function closePopup() {
  popup.classList.remove("popup__opend");
}

function toggleBurger() {
  lines.forEach((line, index) => {
    line.classList.toggle(`burger__line${index + 1}_active`);
  })
  popupMenu.classList.toggle("popup__menu_active")
}

burger.addEventListener("click", toggleBurger);
button.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
