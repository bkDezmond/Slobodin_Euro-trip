const buyLinks = [...document.querySelectorAll(".js-button")];
const showPopup = document.querySelector(".popup");
const closePopup = showPopup.querySelector(".popup__close");
const successPopup = showPopup.querySelector(".popup__send-button");

buyLinks.forEach((link) =>
  link.addEventListener("click", function (evt) {
    evt.preventDefault();
    showPopup.classList.add("modal-show");
  })
);

closePopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  showPopup.classList.remove("modal-show");
});

successPopup.addEventListener("click", function (evt) {
  evt.preventDefault();
  showPopup.classList.remove("modal-show");
});
