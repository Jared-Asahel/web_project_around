import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._handleSubmit = handleSubmit;
    this._form = this._popup.querySelector(".popup__container");
  }
  _getEventListeners() {
    const inputs = this._form.querySelectorAll(".popup__input");
    const values = {};
    inputs.forEach((input) => (values[input.name] = input.value));

    return values;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      this._handleSubmit(this._getEventListeners());
      this.close();
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}
