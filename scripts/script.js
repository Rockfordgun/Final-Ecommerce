/*Drop Down Menu*/
const menuSelect = document.querySelector(".toggleDD");
const optionsCon = document.querySelector(".options-container");
const optionList = document.querySelector(".options");

menuSelect.addEventListener("click", function () {
  optionsCon.classList.toggle("show-options");
});
console.log(menuSelect);
