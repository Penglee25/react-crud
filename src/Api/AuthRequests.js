import axios from "axios";

const API = axios.create({ baseURL: "https://mern-simple-crud1.herokuapp.com" });

// end point
export const logIn = (formData) => API.post("/auth/login", formData);
export const signUp = (formData) => API.post("/auth/register", formData);
