import axios from "axios";

export default axios.create({
  baseURL: "https://en.wikipedia.org/w/api.php",
  params: {
    list: "search",
    action: "query",
    format: "json",
    origin: "*",
  },
});
