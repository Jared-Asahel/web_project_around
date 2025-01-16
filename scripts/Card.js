export default class Card {
  constructor(name, link, cardSelector) {
    this._name = name;
    this._link = link;
    this._cardSelector = cardSelector;
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__group")
      .cloneNode(true);
  }

  _viewCard() {
    this._cardImage.classList.add("popup__active");

    this._image = document.querySelector(".popup__image");
    this._text = document.querySelector(".popup__paragraph");

    this._image.src = this._link;
    this._text.textContent = this._name;
  }

  _handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    this._likeButton.classList.toggle("elements__heart_active");
  }

  _setEventListeners() {
    this._deleteButton = this._element.querySelector(".elements__remove");
    this._deleteButton.addEventListener("click", () =>
      this._handleDeleteCard()
    );
    this._likeButton = this._element.querySelector(".elements__heart");
    this._likeButton.addEventListener("click", () => this._handleLikeCard());
    this._cardImage = document.querySelector("#Image");
    this._newImage.addEventListener("click", () => this._viewCard());
  }

  getView() {
    this._element = this._getTemplate();

    this._newImage = this._element.querySelector(".elements__image");
    this._descriptionCard = this._element.querySelector(".elements__paragraph");

    this._newImage.src = this._link;
    this._descriptionCard.textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
