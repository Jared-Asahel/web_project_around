import "./validate.js";

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

initialCards.forEach((item) => {
  crearCard(item.name, item.link);
});

function crearCard(name, link) {
  const newCard = cardTemplate.content
    .querySelector(".elements__group")
    .cloneNode(true);
  const newImage = newCard.querySelector(".elements__image");
  const descriptionCard = newCard.querySelector(".elements__paragraph");
  const likeButton = newCard.querySelector(".elements__heart");

  newImage.src = link;
  descriptionCard.textContent = name;

  likeButton.addEventListener("click", function (event) {
    event.target.classList.toggle("elements__heart_active");
  });

  newImage.addEventListener("click", function (event) {
    popupImageCrads.classList.add("popup__active");
    imageCards.src = link;
    paragraphImage.textContent = name;
  });

  sectionList.prepend(newCard);

  sectionList.addEventListener("click", (event) => {
    if (event.target.classList.contains("elements__remove")) {
      const card = event.target.closest(".elements__group");
      if (card) {
        card.remove();
      }
    }
  });
}

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

openPopButton.addEventListener("click", openpopup);
function openpopup() {
  formPerfil.classList.add("popup__active");
}

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

guardar.addEventListener("click", (evt) => {
  evt.preventDefault();

  name1.textContent = input1.value;
  name2.textContent = input2.value;
  formPerfil.classList.remove("popup__active");
});

guardarCard.addEventListener("click", () => {
  crearCard(inputName.value, inputLink.value);
  formCards.classList.remove("popup__active");
});
