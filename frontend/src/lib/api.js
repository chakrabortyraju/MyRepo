import axios from 'axios';

const BACKEND = process.env.REACT_APP_BACKEND_URL;
export const API = `${BACKEND}/api`;

export const api = axios.create({ baseURL: API, headers: { 'Content-Type': 'application/json' } });

export const fetchProducts = (category) => api.get('/products', { params: category ? { category } : {} }).then(r => r.data);
export const createOrder = (payload) => api.post('/orders', payload).then(r => r.data);
export const createEnquiry = (type, data) => api.post('/enquiries', { type, data }).then(r => r.data);
