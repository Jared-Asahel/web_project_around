export default class Card {
  constructor(
    data,
    cardSelector,
    handleCardClick,
    handleCardLike,
    handleDeleteCardLike,
    handleOpenConfirm
  ) {
    this._name = data.name;
    this._link = data.link;
    this._id = data.id;
    this._isLiked = data.isLiked;

    this._cardSelector = cardSelector;
    this._handleCardClick = handleCardClick;

    this._handleCardLike = handleCardLike;
    this._handleDeleteCardLike = handleDeleteCardLike;
    this._handleOpenConfirm = handleOpenConfirm;
  }
  _getTemplate() {
    return document
      .querySelector(this._cardSelector)
      .content.querySelector(".elements__group")
      .cloneNode(true);
  }

  _handleOpenForm() {
    this._handleOpenConfirm(this._id);
  }

  handleDeleteCard() {
    this._element.remove();
  }

  _handleLikeCard() {
    if (this._isLiked) {
      this._handleDeleteCardLike();
    } else {
      this._handleCardLike();
    }
    this._element
      .querySelector(".elements__heart")
      .classList.toggle("elements__heart_active");
    this._isLiked = !this._isLiked;
  }

  _setEventListeners() {
    this._element
      .querySelector(".elements__image")
      .addEventListener("click", () => {
        this._handleCardClick(this._name, this._link);
      });

    this._element
      .querySelector(".elements__heart")
      .addEventListener("click", () => {
        this._handleLikeCard(this._id);
      });

    this._element
      .querySelector(".elements__remove")
      .addEventListener("click", () => {
        this._handleOpenForm(this._id);
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

    if (this._isLiked) {
      this._element
        .querySelector(".elements__heart")
        .classList.add("elements__heart_active");
    }

    return this._element;
  }
}
