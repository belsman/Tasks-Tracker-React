import axios from 'axios';

export default {
  baseUrl: 'http://127.0.0.1:9000',

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    const data = await response.json();
    return data;
  },

  async post(path, postData) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: postData
    });
    const data = await response.json();
    return data;
  },
};
