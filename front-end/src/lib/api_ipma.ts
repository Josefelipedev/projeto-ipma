import axios from 'axios';

const api_ipma = axios.create({
  baseURL: process.env.NEXT_PUBLIC_IPMA,
  withCredentials: false,
});

export default api_ipma;
