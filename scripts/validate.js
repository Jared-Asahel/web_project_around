//Ocultar mensaje de error
function hideInputError(formElement, inputElement, settings) {
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.remove(settings.inputErrorClass);
  errorElement.textContent = "";
  errorElement.classList.remove(settings.errorClass);
}

//-----------------------------------------------------------------------------

//Mostrar mensaje de error
function showInputError(formElement, inputElement, settings) {
  const errorMessage = inputElement.validationMessage;
  //Poner error a un elemento
  const errorElement = formElement.querySelector(`#${inputElement.id}-error`);

  inputElement.classList.add(settings.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorClass);
}

//-----------------------------------------------------------------------------

function checkInputValidity(formElement, inputElement, settings) {
  //Si no es invalido y si es valido
  if (!inputElement.validity.valid) {
    //mostrar mensaje de error
    showInputError(formElement, inputElement, settings);
  } else {
    //eliminar mensaje ded error
    hideInputError(formElement, inputElement, settings);
  }
}

//-----------------------------------------------------------------------------

//Validar los inputs
function hasInvalidInput(inputList) {
  //El some busca que algun elemento este bien para devolver true
  //Al negar esto, hara que si un elemento es invalido devuelva true
  //y si poder desabilitar el boton
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

//-----------------------------------------------------------------------------

//Desabilitar o habilitar el boton
function toggleButtonState(inputList, buttonElement, settings) {
  //Añadir o quitar clase para desabilitar y desabilitar o habilitar el boton
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(settings.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(settings.inactiveButtonClass);
    buttonElement.disabled = false;
  }
}

//----------------------------------------------------------------------------x

function setEventListeners(formElement, settings) {
  //selecciona los inputs
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  //selecciona los botones
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
}

//----------------------------------------------------------------------------

//Seleccionar todos los formularios
function enableValidation(settings) {
  const forms = Array.from(document.querySelectorAll(settings.formSelector));

  //Iterar sobre los elementos y evitar que se recarguen
  forms.forEach((formElement) => {
    formElement.addEventListener("submit", (event) => {
      event.preventDefault();
    });

    //Se llama a una funcion
    setEventListeners(formElement, settings);
  });
}

enableValidation({
  formSelector: ".popup__container",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button-1",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
