/**

The current hostname of the window object
@type {string}
*/
const local = window.location.hostname;

/**

The base URL for the API server
@type {string}
*/
export const HOST = (local == "localhost") ? "http://localhost:3001" : "https://chick-fil-a-client-71.onrender.com";