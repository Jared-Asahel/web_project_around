import "./FormValidator.js";
import Card from "./Card.js";

import {
  guardar,
  openPopButton,
  sectionList,
  openPopupCards,
  closePopupCards,
  formCards,
  popupImageCrads,
  closePopupImage,
  initialCards,
  formPerfil,
  closePupopButton,
} from "./util.js";
import FormValidator from "./FormValidator.js";

initialCards.forEach((item) => {
  const newCard = new Card(item.name, item.link, "#card-template").getView();
  sectionList.append(newCard);
});

const CrearCard = new FormValidator(
  {
    formSelector: ".popup__container",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-1",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  ".popup__container"
);

CrearCard.enableValidation();

const EditPerfil = new FormValidator(
  {
    formSelector: "#formCard",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-1",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  "#formCard"
);

EditPerfil.enableValidation();

closePopupImage.addEventListener("click", closeImage);
function closeImage() {
  popupImageCrads.classList.remove("popup__active");
}

openPopupCards.addEventListener("click", openpopup2);
function openpopup2() {
  formCards.classList.add("popup__active");
}

closePopupCards.addEventListener("click", closepopup2);
function closepopup2() {
  formCards.classList.remove("popup__active");
}

openPopButton.addEventListener("click", () => {
  formPerfil.classList.add("popup__active");
});

closePupopButton.addEventListener("click", closepopup);
function closepopup() {
  formPerfil.classList.remove("popup__active");
}

//Cerrar popup pulsando fuera del formulario y con la tecla "esc"
formPerfil.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__active")) {
    formPerfil.classList.remove("popup__active");
  }
});

formCards.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__active")) {
    formCards.classList.remove("popup__active");
  }
});

popupImageCrads.addEventListener("click", (evt) => {
  if (evt.target.classList.contains("popup__active")) {
    popupImageCrads.classList.remove("popup__active");
  }
});

formPerfil.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    formPerfil.classList.remove("popup__active");
  }
});

formCards.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    formCards.classList.remove("popup__active");
  }
});

popupImageCrads.addEventListener("keydown", (evt) => {
  if (evt.key === "Escape") {
    popupImageCrads.classList.remove("popup__active");
  }
});
//-----------------------------------------------------------------
