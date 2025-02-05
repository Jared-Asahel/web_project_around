import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }
  open(name, link) {
    const imageElement = this._popup.querySelector(".popup__image");
    const paragraphElement = this._popup.querySelector(".popup__paragraph");

    imageElement.src = link;
    imageElement.alt = name;
    paragraphElement.textContent = name;

    super.open();
  }
}
