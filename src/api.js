import axios from 'axios';

const client = axios.create({
  baseURL: 'https://api.outsidein.dev/ROAYgP0Nq5Xw7LKzsUa8RAhfuzDnGFNA',
});

const api = {
  loadRestaurants() {
    return client.get('/restaurants').then(response => response.data);
  },
};

export default api;
