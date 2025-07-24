import axios from "axios";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const instance = axios.create({
  baseURL: baseURL,
  withCredentials: true, // If you're using cookies/auth sessions
});

export default instance;
