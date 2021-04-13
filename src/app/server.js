import axios from 'axios';

export default {
  baseUrl: 'http://127.0.0.1:8080',

  async get(path) {
    const response = await fetch(`${this.baseUrl}${path}`);
    const data = await response.json();
    return data;
  },

  async signupUser(credentials) {
    try {
      const response = await axios.post(this.baseUrl + '/signup');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },

  async signInUser(credentials) {
    try {
      const response = await axios.post(this.baseUrl + '/signup');
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  },

  async post(path, credentials) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    const data = await response.json();
    return data;
  },
};
