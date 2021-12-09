import axios from "axios";

const API_URL_BASE = "https://pokeapi.co/api/v2/";

export const API = axios.create({
  baseURL: API_URL_BASE,
  responseType: "json",
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
API.interceptors.response.use(
  (res) => {
    console.log(res.data);
    return res;
  },
  (error) => {
    if (error.status === 404) console.log(error.status);
    return Promise.reject(error);
  }
);
