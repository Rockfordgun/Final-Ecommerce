const axios = require("axios");
require("dotenv").config();

const mainProducts = [];
// const getElement = (selection) => {
//   const element = document.querySelector(selection);
//   if (element) return element;
//   throw new Error(
//     `Please check "${selection}" selector, no such element exist`
//   );
// };

/**
 * Returns the first element matching the specified selector.
 * @param {string} selector - A CSS selector to search for the element.
 * @returns {Element} - The first matching element.
 * @throws {Error} - Throws an error if no element matches the specified selector.
 */
const getElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) {
    return element; // If element exists, return it.
  }
  // If element doesn't exist, throw an error with a message indicating which selector was used.
  throw new Error(
    `Please check "${selector}" selector, no such element exists`
  );
};

/**
 * Sends a POST request to the MongoDB API with the specified payload and headers.
 *
 * @async
 * @param {string} url - The URL of the MongoDB API endpoint.
 * @param {Object} payload - The data to send in the request body.
 * @param {Object} headers - The headers to send with the request.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 * @throws {Error} - Throws an error if the request fails.
 */
const postData = async (url, payload, headers) => {
  try {
    const response = await axios.post(url, payload, { headers: headers });
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("Request failed");
  }
};

/**
 * Finds a document in the specified MongoDB collection with the specified projection.
 *
 * @async
 * @param {string} apiKey - The API key to use for the request.
 * @returns {Promise<Object>} - A Promise that resolves to the response data.
 * @throws {Error} - Throws an error if the request fails.
 */
const findDocument = async (apiKey) => {
  // Define the endpoint URL, payload, and headers for the request.
  const url =
    "https://ap-south-1.aws.data.mongodb-api.com/app/data-fbmlm/endpoint/data/v1/action/findOne";
  const payload = {
    collection: "products",
    database: "fashion-store",
    dataSource: "myapiDB",
    // projection: { _id: 1 },
    projection: { rating: 1, name: 2, category: 3, price: 4, company: 5 },
  };
  const headers = {
    "Content-Type": "application/json",
    "Access-Control-Request-Headers": "*",
    "api-key": apiKey,
  };

  try {
    // Call the postData function with the endpoint URL, payload, and headers.
    const response = await postData(url, payload, headers);
    return response;
  } catch (error) {
    console.error(error);
    throw new Error("Request failed");
  }
};

// Define the API key to use for the request.
const apiKey =
  "dK8Iw5ynh2wfZdjWoATyCyBxePbFJl9Mmk1a86ULvuXeOx4T8zixyPEMfP7yxA8U";

// Call the findDocument function with the API key.
findDocument(apiKey)
  .then((data) => mainProducts)
  .catch((error) => console.error(error));
