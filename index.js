const openPopButton = document.querySelector("#openpopup");
const closePupopButton = document.querySelector("#closepopup");
const form1 = document.querySelector("#form1");

openPopButton.addEventListener("click", openpopup);
function openpopup() {
  form1.style.display = "flex";
}
closePupopButton.addEventListener("click", closepopup);
function closepopup() {
  form1.style.display = "none";
}
