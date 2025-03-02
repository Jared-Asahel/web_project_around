const openPopButton = document.querySelector("#openpopup");
const closePupopButton = document.querySelector("#closepopup");
const formPerfil = document.querySelector("#formPerfil");
const input1 = document.querySelector("#nombre");
const input2 = document.querySelector("#acercaDeMi");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const guardar = document.querySelector("#guardar");
const cardTemplate = document.querySelector("#card-template");
const sectionList = document.querySelector("#elements");
const openPopupCards = document.querySelector(".profile__button");
const closePopupCards = document.querySelector("#closePopupCards");
const formCards = document.querySelector("#formCards");
const guardarCard = document.querySelector("#guardar2");
const inputName = document.querySelector("#Titulo");
const inputLink = document.querySelector("#Enlace");
const imageCards = document.querySelector(".popup__image");
const paragraphImage = document.querySelector(".popup__paragraph");
const imageCard = document.querySelector("#imageCard");
const popupImageCrads = document.querySelector("#Image");
const closePopupImage = document.querySelector("#closePopupImage");

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];

export {
  openPopButton,
  closePupopButton,
  formPerfil,
  input1,
  input2,
  name1,
  name2,
  guardar,
  cardTemplate,
  sectionList,
  openPopupCards,
  closePopupCards,
  formCards,
  guardarCard,
  inputName,
  inputLink,
  imageCards,
  paragraphImage,
  imageCard,
  popupImageCrads,
  closePopupImage,
  initialCards,
};
