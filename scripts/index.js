import FormValidator from "./FormValidator.js";
import Card from "./Card.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithImage from "./PopupWithImage.js";
import UserInfo from "./UserInfo.js";
import { api } from "./Api.js";

import PopupWithConfirmation from "./popupWithConfirmation.js";

const popupWithImage = new PopupWithImage("#Image");
popupWithImage.setEventListeners();

//-------------------api-------------------
let section;
api.getInitialCards().then((res) => {
  section = new Section(
    {
      items: res,
      renderer: (item) => {
        const newCard = new Card(
          item,
          "#card-template",
          popupWithImage.open.bind(popupWithImage),
          () => {
            api.likeCard(item._id);
          },
          () => {
            api.deleteLikeCard(item._id);
          },
          (_id, handleDeleteCard) => {
            popupDeleteCard.open(item._id, handleDeleteCard);
          }
        ).getView();
        section.addItem(newCard);
      },
    },
    "#elements"
  );

  section.renderer();
});

api.getUserInformation().then((res) => {
  userInfo.setUserInfo({ name: res.name, job: res.about });
  userInfo.setUserAvatar(res.avatar);
});

const userInfo = new UserInfo({
  nameSelector: "#name1",
  jobSelector: "#name2",
  imageSelector: "#perfilImage",
});

const profilePopup = new PopupWithForm("#formPerfil", (formData) => {
  userInfo.setUserInfo({ name: formData.Nombre, job: formData.Acerca });
  return api.updateUserInformation({
    name: formData.Nombre,
    about: formData.Acerca,
  });
});

profilePopup.setEventListeners();

document.querySelector("#openpopup").addEventListener("click", () => {
  profilePopup.open();
});

const crearCard = new FormValidator(
  {
    formSelector: "#formEditPerfil",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-1",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  "#formEditPerfil"
);

crearCard.enableValidation();

const editPerfil = new FormValidator(
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

editPerfil.enableValidation();

const editPerfilImage = new FormValidator(
  {
    formSelector: "#formPerfilImage",
    inputSelector: ".popup__input",
    submitButtonSelector: ".popup__button-1",
    inactiveButtonClass: "popup__button_disabled",
    inputErrorClass: "popup__input_type_error",
    errorClass: "popup__error_visible",
  },
  "#formPerfilImage"
);

editPerfilImage.enableValidation();

const generateCard = new PopupWithForm("#formCards", (formData) => {
  const newCard = new Card(
    { name: formData.title, link: formData.link },
    "#card-template",
    (name, link) => popupWithImage.open(name, link)
  ).getView();
  section.addItem(newCard);
  return api.createCard({ name: formData.title, link: formData.link });
});

generateCard.setEventListeners();

document.querySelector(".profile__button").addEventListener("click", () => {
  generateCard.open();
});

const popupImagePerfil = new PopupWithForm("#PerfilImage", (data) => {
  return api
    .updateUserImage({ avatar: data.link })
    .then((res) => {
      userInfo.setUserAvatar(res.avatar);
    })
    .catch((err) => {
      console.log("Error al actualizar la imagen: ", err);
    });
});
popupImagePerfil.setEventListeners();

document
  .querySelector(".profile__image-pencil")
  .addEventListener("click", () => {
    popupImagePerfil.open();
  });
const popupDeleteCard = new PopupWithConfirmation(
  "#formDelete",
  (id, handleDeleteCard) => {
    api.deleteCard(id).then(() => {
      handleDeleteCard();
    });
  }
);
popupDeleteCard.setEventListeners();
