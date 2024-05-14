// apiRequest.js
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com', // Mock API base URL
  headers: {
    'Content-Type': 'application/json',
  },
});
