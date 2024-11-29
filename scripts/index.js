const openPopButton = document.querySelector("#openpopup");
const closePupopButton = document.querySelector("#closepopup");
const form1 = document.querySelector("#form1");
const input1 = document.querySelector("#nombre");
const input2 = document.querySelector("#acercaDeMi");
const name1 = document.querySelector("#name1");
const name2 = document.querySelector("#name2");
const guardar = document.querySelector("#guardar");

openPopButton.addEventListener("click", openpopup);
function openpopup() {
  form1.style.display = "flex";
}
closePupopButton.addEventListener("click", closepopup);
function closepopup() {
  form1.style.display = "none";
}

guardar.addEventListener("click", () => {
  name1.textContent = input1.value;
  form1.style.display = "none";
});

guardar.addEventListener("click", () => {
  name2.textContent = input2.value;
  form1.style.display = "none";
});
