const products = [
  {
    id: 1,
    name: "Nike Force Lvl8",
    category: "shoes",
    status: "active",
    short_description:
      "The 90s era? Yeah, that was the bomb. Nike AF-1 style? A favourite forever.",
    img: "./img/shoes/Thumbnails/Nike_force_l1.jpg",
    price: "R2 299.00",
    inCart: 0,
  },

  {
    id: 2,
    name: "Nike Air Monarch IV",
    category: "shoes",
    short_description:
      "Built to Last, Crafted to Turn HeadsThe Nike Mens Monarch IV is the sneaker of the 80s ",
    img: "./img/shoes/Thumbnails/Monarch.jpg",
    price: "R2 999.00",
    inCart: 0,
  },

  //Sunglasses
  {
    id: 6,
    name: "Ray-Ban Ferrari",
    category: "sunglasses",
    short_description:
      "selection of sunglasses inspired by race car design with Scuderia Ferrari details and a choice of Polarized lenses",
    img: "./img/sunglasses/thumbnails/ferrari.jpg",
    price: "R4 120.00",
    inCart: 0,
  },

  {
    id: 7,
    name: "Oakley Split Shot",
    category: "sunglasses",
    short_description:
      "Mens Split Shot with Matte Tortoise frame and Prizm Tungsten Polarized lenses",
    img: "./img/sunglasses/thumbnails/slingshotT.jpg",
    price: "R3 450.00",
  },

  //Accesories
  {
    id: 12,
    name: "Fossil Mens Wallet",
    category: "accesories",
    short_description:
      "You cant improve on a classic but we have refined our Derrick bifold with modern details",
    img: "./img/accesorries/thumbnail/fossilwallet.jpg",
    price: "R1 399.00",
  },

  {
    id: 13,
    name: "Armani Watch",
    category: "accesories",
    short_description:
      "Armani Exchanges 42mm watch features a black sunray dial multifunction movement and black stainless steel bracelet.",
    img: "./img/accesorries/thumbnail/armaniwatch.jpg",
    price: "R4 599.00",
  },

  //mens
  {
    id: 19,
    name: "Dark Blue Jeans",
    category: "mens",
    short_description:
      "Regular-rise jeans cut to a tapered fit in dark-blue supreme-movement denim by BOSS Menswear.",
    img: "./img/mens/thumbnails/hugojeans.jpg",
    price: "R2 700.00",
  },

  {
    id: 20,
    name: "Shirts",
    category: "mens",
    short_description:
      "A sporty polo shirt by BOSS Menswear. Featuring a rhinestone BOSS logo",
    img: "./img/mens/thumbnails/hugoshirt.jpg",
    price: "R2 100.00",
  },

  //woman

  {
    id: 24,
    name: "Ruby Red Dress",
    category: "woman",
    short_description:
      "Ruby red Sophia slip silk dress from Gilda & Pearl featuring a bias cut finish, a V-neck",
    img: "./img/womans/thumbnail/womandress.jpg",
    price: "R8 018.55",
  },

  {
    id: 25,
    name: "Gucci Turtle Neck",
    category: "woman",
    short_description:
      "You can not go wrong with a simple black roll neck jumper now can you? Especially when its Gucci. ",
    img: "./img/womans/thumbnail/turtle.jpg",
    price: "R17 345.98",
  },
];

const blogPost = [
  {
    title: "The Ultimate Guide to Layering Clothes for Fall",
    author: "Emily Johnson",
    date: "2022-10-15",
    category: "Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis quis convallis augue. Sed mattis ante et nisi venenatis, ac ultricies augue dapibus.",
  },
  {
    title: "5 Ways to Style Your Denim Jacket for Any Occasion",
    author: "Jessica Lee",
    date: "2022-09-28",
    category: "Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam euismod purus et malesuada molestie. Quisque nec blandit nisi, id ullamcorper nisi.",
  },
  {
    title: "The Hottest Trends from Milan Fashion Week 2022",
    author: "David Chen",
    date: "2022-08-25",
    category: "Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus commodo dolor vel ipsum bibendum tempus. Aliquam quis risus a augue ullamcorper blandit.",
  },
  {
    title: "The Best Summer Dresses Under $50",
    author: "Sarah Lee",
    date: "2022-07-16",
    category: "Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed finibus metus a sapien pretium, sit amet maximus enim sagittis. Ut nec ultricies quam.",
  },
  {
    title: "Accessorize Your Outfit: The Dos and Don'ts",
    author: "Kevin Smith",
    date: "2022-06-03",
    category: "Fashion",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent volutpat venenatis mi, id congue nisi hendrerit in. Suspendisse vel urna et justo efficitur malesuada.",
  },
];

const menuSelect = document.querySelector(".title-select");
const optionsCon = document.querySelector(".options-container");
const optionList = document.querySelector(".options");

menuSelect.addEventListener("click", function () {
  optionsCon.classList.toggle("show-options");
});

/*Product Feature*/

const sectionCenter = document.querySelector(".newProducts");
const filterBtns = document.querySelectorAll(".filter-btn");

window.addEventListener("DOMContentLoaded", function () {
  displayMenuItems(products);
});

//filterbuttons
filterBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const category = e.currentTarget.dataset.id;
    const menuCategory = products.filter(function (menuItem) {
      if (menuItem.category === category) {
        return menuItem;
      }
    });
    console.log(menuCategory);
    if (category === "all") {
      displayMenuItems(products);
    } else {
      displayMenuItems(menuCategory);
    }
  });
});

function displayMenuItems(menuItems) {
  // Generate HTML code for each item
  const displayMenu = menuItems
    .map(function (item) {
      // Generate the HTML code for the current item
      return `<article class="menu-item">
    <div id="NA-products" >
      <div class="imageContainer">
        <div class="image"><img src="${
          item.img
        }" class="imageNewA" alt="" srcset=""></div>
        <!-- Add a data-attribute to the button for easier access -->
        <button type="button" class="cart-item-add-btn" data-item='${JSON.stringify(
          item
        )}'>ADD TO CART</button> 
        <div class="productDetails">
          <h3>${item.name}</h3>
          <p>${item.short_description}</p>
          <h2>${item.price}</h2>
        </div>
      </div>
    </div>
    </article>`;
    })
    .join("");

  // Insert the HTML code into the section center element
  sectionCenter.innerHTML = displayMenu;

  // Add an event listener to the Add to Cart button for each item
  const addToCartButtons = document.querySelectorAll(".cart-item-add-btn");

  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // Get the item object from the data attribute of the clicked button
      const item = JSON.parse(button.dataset.item);

      // Add the item to the cart array in local storage
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart.push(item);
      localStorage.setItem("cart", JSON.stringify(cart));

      // Increment the cart item count in local storage
      const cartItemCount =
        parseInt(localStorage.getItem("cart-item-count")) || 0;
      localStorage.setItem("cart-item-count", cartItemCount + 1);
      document.querySelector(".cart-item-count").innerHTML = cartItemCount;

      const cartContainer = document.querySelector(".cart-items");

      let cartItemAdd = window.localStorage.getItem("cart");
      console.log(cartItemAdd);

      // Do something with the item, like updating the cart UI
      console.log(`Added item ${item.id} to the cart`);

      function displayCartItems() {
        // Get the element where you want to display the cart items
        const cartItemsContainer = document.querySelector(".cart-items");

        // Loop through each item in the cart array and create a new HTML element for it
        const cartItemsHtml = cart.map((item) => {
          return `
          <article class="cart-item">
          <!--Item Picture-->
          <img src="${item.img}" class="cart-item-img" alt="">
          <!---Item Info-->
          <div>
            <div class="cart-product-info">
          <h5 class="cart-item-name">${item.name}</h5> 
          <p class="cart-item-price">${item.price}</p>
          <button class="cart-item-remove-btn">remove</button> 
        </div>  
        </div>
          <!--Amount Toggle-->
          <div class="cart-minmax">
            <button class="cart-item-increase-btn">
              <i class="fa-solid fa-chevron-up"></i>
            </button>
              <p class="cart-item-amount">1</p>
            <button class="cart-item-decrease-btn">
              <i class="fa-solid fa-chevron-down"></i>
            </button>

          </div>
        </article>
          `;
        });

        // Add the HTML elements to the cart items container
        cartItemsContainer.innerHTML = cartItemsHtml.join("");
      }

      cartTotal = 0;
      cart.forEach(function (item) {
        cartTotal += parseFloat(item.price) * parseInt(item.inCart);
      });
      console.log("Cart Total:", cartTotal);

      // Call the displayCartItems function to display the cart items on page load
      displayCartItems();
    });
  });
}

// function displayMenuItems(menuItems) {
//   // Generate HTML code for each item
//   const displayMenu = menuItems
//     .map(function (item) {
//       // Generate the HTML code for the current item
//       return `<article class="menu-item">
//     <div id="NA-products" >
//       <div class="imageContainer">
//         <div class="image"><img src="${
//           item.img
//         }" class="imageNewA" alt="" srcset=""></div>
//         <!-- Add a data-attribute to the button for easier access -->
//         <button type="button" class="cart-item-add-btn" data-item='${JSON.stringify(
//           item
//         )}'>ADD TO CART</button>
//         <div class="productDetails">
//           <h3>${item.name}</h3>
//           <p>${item.short_description}</p>
//           <h2>${item.price}</h2>
//         </div>
//       </div>
//     </div>
//     </article>`;
//     })
//     .join("");

//   // Insert the HTML code into the section center element
//   sectionCenter.innerHTML = displayMenu;

//   // Add an event listener to the Add to Cart button for each item
//   const addToCartButtons = document.querySelectorAll(".cart-item-add-btn");

//   addToCartButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Get the item object from the data attribute of the clicked button

//       const item = JSON.parse(button.dataset.item);

//       // Add the item to the cart array in local storage
//       const cart = JSON.parse(localStorage.getItem("cart")) || [];
//       cart.push(item);
//       localStorage.setItem("cart", JSON.stringify(cart));

//       console.log(cart.length);
//       // Do something with the item, like updating the cart UI
//       console.log(`Added item ${item.id} to the cart`);
//     });
//   });
// }

// function displayMenuItems(menuItems) {
//   // Generate HTML code for each item

//   const displayMenu = menuItems
//     .map(function (item) {
//       // Generate the HTML code for the current item
//       return `<article class="menu-item">
//     <div id="NA-products" >
//       <div class="imageContainer">
//         <div class="image"><img src="${item.img}" class="imageNewA" alt="" srcset=""></div>
//         <!-- Add a ref to the button for easier access -->
//         <button type="button" class="cart-item-add-btn" ref="${item.id}" onclick="addToCart()">ADD TO CART</button>
//         <div class="productDetails">
//           <h3>${item.name}</h3>
//           <p>${item.short_description}</p>
//           <h2>${item.price}</h2>
//         </div>
//       </div>
//     </div>
//     </article>`;
//     })
//     .join("");

//   // Insert the HTML code into the section center element
//   sectionCenter.innerHTML = displayMenu;

//   // Add an event listener to the Add to Cart button for each item
//   const addToCartButtons = document.querySelectorAll(".cart-item-add-btn");

//   addToCartButtons.forEach(function (button) {
//     button.addEventListener("click", function () {
//       // Get the ID of the item from the button's ref attribute
//       const itemId = button.getAttribute("ref");
//       console.log(button.dataset.item.name);
//       // const itemDescription = button.dataset.description;
//       // const itemPrice = button.dataset.price;
//       // const itemName = button.dataset.name;

//       // console.log(itemId);

//       // console.log("here-->>", localStorage.getItem("cartProducts"));
//       // addToCart()
//       // Do something with the itemId, like adding it to the cart
//       console.log(`Added item ${itemId} to the cart`);
//     });
//   });
// }

const addToCart = () => {
  console.log("reaches", localStorage.getItem("cartNumbers"));
  const productStorage = localStorage.setItem("cartNumbers", 1);
  console.log("added to localstorage");
};
/*Daily Deals Timer*/

let timeLeft = 10;

const countDown = () => {
  timeLeft--;

  if (timeLeft === 0) {
    console.log("hello there");
  }
};

/*Nav Toggle*/

const navToggle = document.querySelector(".nav-toggle");
const links = document.querySelector(".links");

navToggle.addEventListener("click", function () {
  console.log(links.classList.contains("links"));

  if (links.classList.contains("show-links")) {
    links.classList.remove("show-links");
  } else {
    links.classList.add("show-links");
  }
});

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
