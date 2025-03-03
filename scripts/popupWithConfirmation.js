import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._form = document.querySelector("#formDeleteCard");
    this._handleDelete = handleDelete;
  }

  open(id, handleDeleteCard) {
    super.open();
    this.id = id;
    this.handleDeleteCard = handleDeleteCard;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      this._handleDelete(this.id, this.handleDeleteCard);
      event.preventDefault();
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
