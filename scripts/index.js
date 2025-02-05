import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";

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
import Popup from "./Popup.js";

const popupWithImage = new PopupWithImage("#Image");
popupWithImage.setEventListeners();

const section = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newCard = new Card(
        { name: item.name, link: item.link },
        "#card-template",
        popupWithImage.open.bind(popupWithImage)
      ).getView();
      section.addItem(newCard);
    },
  },
  "#elements"
);

section.renderer();

const userInfo = new UserInfo({
  nameSelector: "#name1",
  jobSelector: "#name2",
});

const profilePopup = new PopupWithForm("#formPerfil", (formData) => {
  userInfo.setUserInfo(formData);
});
profilePopup.setEventListeners();

document.querySelector("#openpopup").addEventListener("click", () => {
  profilePopup.open();
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

const generateCard = new PopupWithForm("#formCards", (formData) => {
  const newCard = new Card(
    { name: formData.title, link: formData.link },
    "#card-template",
    (name, link) => popupWithImage.open(name, link)
  ).getView();
  section.addItem(newCard);
});

generateCard.setEventListeners();

document.querySelector(".profile__button").addEventListener("click", () => {
  generateCard.open();
});
