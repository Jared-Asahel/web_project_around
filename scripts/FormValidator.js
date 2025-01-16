export default class FormValidator {
  constructor(settings, formElement) {
    this._settings = settings;
    this._formElement = document.querySelector(formElement);
  }

  //Ocultar mensaje de error
  _hideInputError(formElement, inputElement) {
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.remove(this._settings.inputErrorClass);
    this._errorElement.textContent = "";
    this._errorElement.classList.remove(this._settings.errorClass);
  }

  //-----------------------------------------------------------------------------

  //Mostrar mensaje de error
  _showInputError(formElement, inputElement) {
    this._errorMessage = inputElement.validationMessage;
    //Poner error a un elemento
    this._errorElement = formElement.querySelector(`#${inputElement.id}-error`);

    inputElement.classList.add(this._settings.inputErrorClass);
    this._errorElement.textContent = this._errorMessage;
    this._errorElement.classList.add(this._settings.errorClass);
  }

  //-----------------------------------------------------------------------------

  _checkInputValidity(formElement, inputElement) {
    //Si no es invalido y si es valido
    if (!inputElement.validity.valid) {
      //mostrar mensaje de error
      this._showInputError(formElement, inputElement);
    } else {
      //eliminar mensaje ded error
      this._hideInputError(formElement, inputElement);
    }
  }

  //-----------------------------------------------------------------------------

  //Validar los inputs
  _hasInvalidInput() {
    //El some busca que algun elemento este bien para devolver true
    //Al negar esto, hara que si un elemento es invalido devuelva true
    //y si poder desabilitar el boton
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //-----------------------------------------------------------------------------

  //Desabilitar o habilitar el boton
  _toggleButtonState() {
    //Añadir o quitar clase para desabilitar y desabilitar o habilitar el boton
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._settings.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  //----------------------------------------------------------------------------x

  _setEventListeners(formElement) {
    //selecciona los inputs
    this._inputList = Array.from(
      formElement.querySelectorAll(this._settings.inputSelector)
    );
    //selecciona los botones
    this._buttonElement = formElement.querySelector(
      this._settings.submitButtonSelector
    );

    this._toggleButtonState();

    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._checkInputValidity(formElement, inputElement);
        this._toggleButtonState();
      });
    });
  }

  //----------------------------------------------------------------------------

  //Seleccionar todos los formularios
  enableValidation() {
    //Iterar sobre los elementos y evitar que se recarguen

    this._formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    //Se llama a una funcion
    this._setEventListeners(this._formElement);
  }
}
