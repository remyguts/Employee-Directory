import axios from "axios";
// yo remy........ change this API tomorrow
const BASEURL = "https://api.giphy.com/v1/gifs/search?q=";
const APIKEY = "&api_key=dc6zaTOxFJmzC&limit=20";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: (query) => axios.get(BASEURL + query + APIKEY),
};
