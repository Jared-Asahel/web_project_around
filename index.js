const openPopButton = document.querySelector("#openpopup");
const closePupopButton = document.querySelector("#closepopup");
const form1 = document.querySelector("#form1");
const input1 = document.querySelector("#nombre");
const input2 = document.querySelector("#acercaDeMi");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");

openPopButton.addEventListener("click", openpopup);
function openpopup() {
  form1.style.display = "flex";
}
closePupopButton.addEventListener("click", closepopup);
function closepopup() {
  form1.style.display = "none";
}

input1.addEventListener("input", () => {
  name1.textContent = input1.value;
});

input2.addEventListener("input", () => {
  name2.textContent = input2.value;
});
