//"http://localhost:3000"
import axios from "axios";

const api = axios.create({
  baseURL: "https://aula1conceitos.onrender.com" ,
});

export default api;
