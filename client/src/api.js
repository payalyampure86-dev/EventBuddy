import axios from "axios";

const API = axios.create({
  baseURL:"https://eventbuddy-33hc.onrender.com",
});

export default API;