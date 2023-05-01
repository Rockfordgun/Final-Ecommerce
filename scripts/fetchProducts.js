const axios = require("axios");

// fetchProducts.js
// const { fetchData } = require("./utils.js");

/**
 * Fetches data from a URL using Axios
 *
 * @param {string} url - The URL to fetch data from
 * @returns {Promise} A Promise that resolves to the response data
 */
const fetchProducts = async (url) => {
  console.log("here", url);
  return axios.get(
    "https://ap-southeast-2.aws.data.mongodb-api.com/app/store-aeois/endpoint/Getfashionstore"
  ); // Returns a Promise that resolves to the response data
};

module.exports = fetchProducts();
