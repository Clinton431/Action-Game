import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "cc60b28a101c49c18ee5113d9507b0a0",
  },
});
