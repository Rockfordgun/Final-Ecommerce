const products = [
  {
    id: 1,
    name: "Nike Force Lvl8",
    category: "shoes",
    status: "active",
    short_description:
      "The '90s era? Yeah, that was the bomb. Nike AF-1 style? A favourite forever.",
    img: "./img/shoes/Thumbnails/Nike_force_l1.jpg",
    price: "R2 299.00",
  },

  {
    id: 2,
    name: "Nike Air Monarch IV",
    category: "shoes",
    short_description:
      "Built to Last, Crafted to Turn HeadsThe Nike Men's Monarch IV is the sneaker of the '80s ",
    img: "./img/shoes/Thumbnails/Monarch.jpg",
    price: "R2 999.00",
  },

  //Sunglasses
  {
    id: 6,
    name: "Ray-Ban Ferrari",
    category: "sunglasses",
    short_description:
      " selection of sunglasses inspired by race car design with Scuderia Ferrari details and a choice of Polarized lenses",
    img: "./img/sunglasses/thumbnails/ferrari.jpg",
    price: "R4 120.00",
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
      "You can't improve on a classic, but we've refined our Derrick bifold with modern details",
    img: "./img/accesorries/thumbnail/fossilwallet.jpg",
    price: "R1 399.00",
  },

  {
    id: 13,
    name: "Armani Watch",
    category: "accesories",
    short_description:
      "Armani Exchange's 42mm watch features a black sunray dial, multifunction movement and black stainless steel bracelet.",
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
      "You can't go wrong with a simple black roll neck jumper now can you? Especially when it's Gucci. ",
    img: "./img/womans/thumbnail/turtle.jpg",
    price: "R17 345.98",
  },
];

const menuSelect = document.querySelector(".title-select");
const optionsCon = document.querySelector(".filterBTN-container");
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
            <div class="image"><img src="${item.img}" class="imageNewA" alt="" srcset=""></div>
            <div class="quickAdd"><p>QUICK ADD</p></div>
            <div class="productDetails">
              <h3>${item.name}</h3>
              <p>${item.short_description}</p>
              <h2>${item.price}</h2>
            </div>
          </div>
          </div>
    
        </article>`;
  });
  displayMenu = displayMenu.join("");
  sectionCenter.innerHTML = displayMenu;
}
