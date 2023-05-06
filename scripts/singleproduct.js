const productDetails = [
  {
    name: "Red Sneakers",
    description: "These red sneakers will make you look stylish",
    price: "$50",
    image: "https://example.com/image.jpg",
  },
  {
    name: "Blue Shirt",
    description: "This blue shirt is perfect for any occasion",
    price: "$25",
    image: "https://example.com/image2.jpg",
  },
];

const generateProductPage = (product) => {
  let productHTML = `
    <h1>${product.name}</h1>
    <p>${product.description}</p>
    <h2>Price: ${product.price}</h2>
    <img src="${product.image}" />
  `;

  return productHTML;
};

let productHTML = "";
productDetails.forEach((product) => {
  productHTML += generateProductPage(product);
});

document.getElementById("product-container").innerHTML = productHTML;
