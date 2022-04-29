import axios from "axios";

const apiUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:8000"
    : "http://your-url.com";

/**
 * Create a request to the API
 *
 * @param {string} endpoint - Endpoint to make a request to
 * @param {string} method - Request method
 * @param {Object} payload - Body of the request
 */
const request = (endpoint, method = "GET", payload = null) => {
  const config = { headers: { Authorization: `Bearer your-token-here` } };

  return new Promise((resolve, reject) => {
    if (method === "GET") {
      axios
        .get(apiUrl + endpoint, config) // 2nd param is headers
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    } else {
      axios
        .post(apiUrl + endpoint, payload, config) // 2nd param is payload. 3rd param is headers
        .then((response) => resolve(response.data))
        .catch((error) => reject(error));
    }
  });
};

export default request;
