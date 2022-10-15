import axios from "axios";

const API = axios.create({ baseURL: "https://mern-simple-crud1.herokuapp.com" });

// end point
export const createProduct = (formData) => API.post("/product/", formData);
export const updateProduct = (formData) => API.put(`/product/${formData.id}`, formData);
export const deleteProduct = (formData) => API.delete(`/product/${formData}`);
