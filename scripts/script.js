/*Drop Down Menu*/
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
