import axios from "axios";

const api = axios.create({
  baseURL: "https://apiusers-d4ay.onrender.com",
});

export default api;
