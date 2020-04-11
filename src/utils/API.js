import axios from "axios";
// yo remy........ change this API tomorrow
const BASEURL = "https://randomuser.me/api/";

// Export an object with a "search" method that searches the Giphy API for the passed query
export default {
  search: (query) => axios.get(BASEURL + query),
};
