/*Cart*/

const sidebarToggle = document.querySelector(".sidebar-toggle");
const cartContainer = document.querySelector(".cart-container");
const cart = document.querySelector(".cart-dropdown");
const closeBTN = document.querySelector("cart-btn");

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

function renderProducts() {
  products.forEach((product) => {
    if (product.category === "shoes") {
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
