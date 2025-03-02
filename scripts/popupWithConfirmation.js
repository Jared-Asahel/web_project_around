import Card from "./Card.js";
import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector, handleDelete) {
    super(popupSelector);
    this._form = document.querySelector("#formDeleteCard");
    this._handleDelete = handleDelete;
  }

  open(id) {
    super.open();
    this.id = id;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      this._handleDelete(this.id);
      event.preventDefault();
      this.close();
    });
  }
  close() {
    super.close();
    this._form.reset();
  }
}
