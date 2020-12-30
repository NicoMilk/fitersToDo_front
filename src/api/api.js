import axios from 'axios';

let baseApi = axios.create({
  baseURL: 'http://localhost:3000',
});

let Api = function() {
  return baseApi;
};

export default Api;
