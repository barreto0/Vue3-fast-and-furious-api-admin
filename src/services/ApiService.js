//import axios from "axios";
import axios from 'axios';

export default class ApiService {
  setHeaders() {
    const headersConfig = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods':
        'GET, POST, PATCH, PUT, DELETE, OPTIONS',
      'Access-Control-Allow-Headers':
        'Origin, Content-Type, X-Auth-Token',
    };

    var token = localStorage.getItem('token');
    if (token) {
      headersConfig.Authorization = 'Bearer '.concat(token);
    }

    return headersConfig;
  }

  get(url) {
    const headers = this.setHeaders();
    return axios.get(import.meta.env.VITE_APP_BASE_URL + url, {
      headers: headers,
    });
  }

  post(url, data) {
    const headers = this.setHeaders();
    return axios.post(import.meta.env.VITE_APP_BASE_URL + url, data, {
      headers: headers,
    });
  }

  put(url, data) {
    const headers = this.setHeaders();
    return axios.put(import.meta.env.VITE_APP_BASE_URL + url, data, {
      headers: headers,
    });
  }

  delete(url, data) {
    const headers = this.setHeaders();
    return axios.delete(
      import.meta.env.VITE_APP_BASE_URL + url,
      data,
      {
        headers: headers,
      }
    );
  }
}
