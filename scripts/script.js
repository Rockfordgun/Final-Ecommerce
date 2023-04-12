/*Drop Down Menu*/
const products = [
  {
    id: 1,
    name: "nike air",
    category: "shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/placeholder sample.jpg",
    price: "R100.00",
  },

  {
    id: 2,
    name: "Nike Dunk High",
    category: "shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/shoes/Dunk hight.jpg",
    price: "R2 299,95",
  },

  {
    id: 3,
    name: "Nike Air Force 1",
    category: "shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/Nike Air Force.jpg",
    price: "R 2 399,95",
  },

  {
    id: 4,
    name: "Nike Air Force 1 07",
    category: "shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/forcenike.jpg",
    price: "R 2 199,95",
  },

  {
    id: 5,
    name: "Jordan 1 Mid SE",
    category: "shoes",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },
  //Sunglasses
  {
    id: 6,
    name: "Ray Ban",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/placeholder sample.jpg",
    price: "R100.00",
  },

  {
    id: 7,
    name: "Oakley",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/shoes/Dunk hight.jpg",
    price: "R2 299,95",
  },

  {
    id: 8,
    name: "Versace",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/Nike Air Force.jpg",
    price: "R 2 399,95",
  },

  {
    id: 9,
    name: "Prada",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/forcenike.jpg",
    price: "R 2 199,95",
  },

  {
    id: 10,
    name: "Celine",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  {
    id: 11,
    name: "Gucci",
    category: "sunglasses",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  //Accesories
  {
    id: 12,
    name: "Leather Belt",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/placeholder sample.jpg",
    price: "R100.00",
  },

  {
    id: 13,
    name: "Handbag",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/shoes/Dunk hight.jpg",
    price: "R2 299,95",
  },

  {
    id: 14,
    name: "Nike Air Force 1",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/Nike Air Force.jpg",
    price: "R 2 399,95",
  },

  {
    id: 15,
    name: "Neklace",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/forcenike.jpg",
    price: "R 2 199,95",
  },

  {
    id: 16,
    name: "Watch",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  {
    id: 17,
    name: "Socks",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  {
    id: 18,
    name: "Underwear",
    category: "accesories",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },
  //mens
  {
    id: 19,
    name: "shorts",
    category: "mens",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/placeholder sample.jpg",
    price: "R100.00",
  },

  {
    id: 20,
    name: "Shirts",
    category: "mens",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/shoes/Dunk hight.jpg",
    price: "R2 299,95",
  },

  {
    id: 21,
    name: "jeans",
    category: "mens",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/Nike Air Force.jpg",
    price: "R 2 399,95",
  },

  {
    id: 22,
    name: "short phants",
    category: "mens",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/forcenike.jpg",
    price: "R 2 199,95",
  },

  {
    id: 23,
    name: "polo shirt",
    category: "mens",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  //woman

  {
    id: 24,
    name: "Dress",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/placeholder sample.jpg",
    price: "R100.00",
  },

  {
    id: 25,
    name: "lady thshirt",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "../img/shoes/Dunk hight.jpg",
    price: "R2 299,95",
  },

  {
    id: 26,
    name: "lady jeans",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/Nike Air Force.jpg",
    price: "R 2 399,95",
  },

  {
    id: 27,
    name: "lady shorts",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/forcenike.jpg",
    price: "R 2 199,95",
  },

  {
    id: 28,
    name: "underwear",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  {
    id: 29,
    name: "Bra",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },

  {
    id: 30,
    name: "Panties",
    category: "woman",
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis, dolorum?",
    img: "./img/shoes/jordans.jpg",
    price: "R 1 599,95",
  },
];

const menuSelect = document.querySelector(".title-select");
const optionsCon = document.querySelector(".options-container");
const optionList = document.querySelector(".options");

menuSelect.addEventListener("click", function () {
  optionsCon.classList.toggle("show-options");
});
console.log(menuSelect);

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
  let displayMenu = menuItems.map(function (item) {
    return `<article class="menu-item">
    <div id="NA-products" >
    
          <div class="imageContainer">
            <div class="image"><img src="${item.img}" alt="" srcset=""></div>
            <div class="quickAdd"><p>QUICK ADD</p></div>
            <div class="productDetails">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <h2>${item.price}</h2>
            </div>
          </div>
          </div>
    
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
