export default class Card {
  constructor({ name, link }, cardSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__group")
      .cloneNode(true);
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._element
      .querySelector(".elements__heart")
      .classList.toggle("elements__heart_active");
  }

  _setEventListeners() {
    console.log(this);
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });

    this._element
      .querySelector(".elements__heart")
      .addEventListener("click", () => {
        this._handleLikeCard();
      });

    this._element
      .querySelector(".elements__remove")
      .addEventListener("click", () => {
        this._handleDeleteCard();
      });
  }

  getView() {
    this._element = this._getTemplate();
    this._element.querySelector(".elements__paragraph").textContent =
      this._name;

    const cardImage = this._element.querySelector(".elements__image");
    cardImage.src = this._link;
    cardImage.alt = this._name;

    this._setEventListeners();

    return this._element;
  }
}
