import axios from "axios";
import { API_BASE_URL } from "../config";

const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
  const token =
    localStorage.getItem("token") ||
    sessionStorage.getItem("token");

  console.log("TOKEN FOUND:", token);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  console.log("HEADERS:", config.headers);

  return config;
});

export default api;