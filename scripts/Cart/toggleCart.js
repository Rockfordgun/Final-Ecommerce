/*Cart*/

const sidebarToggle = document.querySelector(".sidebar-toggle");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart-dropdown");
const closeBTN = document.querySelector(".cart-close");

sidebarToggle.addEventListener("click", function () {
  if (cart.classList.contains("show-cart")) {
    cart.classList.remove("show-cart");
  } else {
    cart.classList.add("show-cart");
  }
});

closeBTN.addEventListener("click", function () {
  cart.classList.remove("show-cart");
});
