/*Cart*/

const sidebarToggle = document.querySelector(".sidebar-toggle");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart-dropdown");

sidebarToggle.addEventListener("click", function () {
  if (cart.classList.contains("show-cart")) {
    cart.classList.remove("show-cart");
  } else {
    cart.classList.add("show-cart");
  }
});

const productsE1 = document.querySelector(".products-container");
const cartItemsE1 = document.querySelector(".cart-items");
const subTotalE1 = document.querySelector(".cart-total");
const cartAmountE1 = document.querySelector(".cart-item-count");
const closeBTN = document.querySelector(".cart-close");
const navToggle = document.querySelector(".nav-toggle");
const checkoutBTN = document.querySelector(".cart-checkout");

function renderProducts() {
  products.forEach((product) => {
    if (product.category === "woman") {
      productsE1.innerHTML += `
      <article class="menu-item">
      <div id="NA-products" >
        <div class="imageContainer">
          <div class="image"><img src="${product.img}" class="imageNewA" alt="" srcset=""></div>
          <!-- Add a data-attribute to the button for easier access -->
          <button type="button" class="cart-item-add-btn" onclick="MaddToCart(${product.id})">ADD TO CART</button> 
          <div class="productDetails">
            <h3>${product.name}</h3>
            <p>${product.short_description}</p>
            <h6>in stock: ${product.instock}</h6>
            <h2>R${product.price}</h2>
          </div>
        </div>
      </div>
      </article>
      `;
    }
  });
}

renderProducts();

let mainCart = JSON.parse(localStorage.getItem("CART")) || [];
updateCart();
//Add to cart
function MaddToCart(id) {
  if (mainCart.some((item) => item.id === id)) {
    changeNumberOfUnits("plus", id);
  } else {
    const item = products.find((product) => product.id === id);
    mainCart.push({
      ...item,
      numberOfUnits: 1,
    });
  }
  updateCart();
}

function updateCart() {
  renderCartItems();
  renderSubTotal();
  renderCartAmount();

  localStorage.setItem("CART", JSON.stringify(mainCart));
}

//claculate total
function renderSubTotal() {
  let totalPrice = 0,
    totalItems = 0;

  mainCart.forEach((item) => {
    totalPrice += item.price * item.numberOfUnits;
    totalItems += item.numberOfUnits;
  });
  subTotalE1.innerHTML = ` <h5 class="cart-total">(${totalItems} items) Total : R ${totalPrice} </h5>`;
  console.log(totalPrice);
}

function renderCartItems() {
  cartItemsE1.innerHTML = "";
  mainCart.forEach((item) => {
    cartItemsE1.innerHTML += `
        <article class="cart-item">
        <!--Item Picture-->
        <img
          src="${item.img}"
          class="cart-item-img"
          alt=""
        />
        <!---Item Info-->
        <div>
          <div class="cart-product-info">
            <h5 class="cart-item-name">${item.name}</h5>
            <p class="cart-item-price">${item.price}</p>
            <button class="cart-item-remove-btn" onclick="removeItemFromCart(${item.id})">remove</button>
          </div>
        </div>
        <!--Amount Toggle-->
        <div class="cart-minmax">
          <button class="cart-item-increase-btn" onclick="changeNumberOfUnits('plus',${item.id})">
            <i class="fa-solid fa-chevron-up"></i>
          </button>
          <p class="cart-item-amount">${item.numberOfUnits}</p>
          
          <button class="cart-item-increase-btn" onclick="changeNumberOfUnits('minus',${item.id})">
            <i class="fa-solid fa-chevron-down"></i>
          </button>
        </div>
      </article>
        `;
  });
}

function changeNumberOfUnits(action, id) {
  mainCart = mainCart.map((item) => {
    let numberOfUnits = item.numberOfUnits;

    if (item.id === id) {
      if (action === "minus" && numberOfUnits > 1) {
        numberOfUnits--;
      } else if (action === "plus" && numberOfUnits < item.instock) {
        numberOfUnits++;
      }
    }

    return {
      ...item,
      numberOfUnits,
    };
  });
  updateCart();
}

//remove item from cart
function removeItemFromCart(id) {
  mainCart = mainCart.filter((item) => item.id !== id);

  updateCart();
}

function renderCartAmount() {
  let totalItems = 0;

  mainCart.forEach((item) => {
    totalItems += item.numberOfUnits;
  });
  cartAmountE1.innerHTML = ` ${totalItems}`;
}

closeBTN.addEventListener("click", function () {
  if (cart.classList.contains("show-cart")) {
    cart.classList.remove("show-cart");
  }
});

navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

checkoutBTN.addEventListener("click", () => {
  localStorage.clear();

  cartItemsE1.innerHTML = "";
  cartAmountE1.innerHTML = `0`;
  subTotalE1.innerHTML = ` <h5 class="cart-total">(0 items) Total : R 0 </h5>`;
  // Display a confirmation message
  alert("Thank you for your purchase!");
});

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);

function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
