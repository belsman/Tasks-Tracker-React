export default {
  baseUrl: 'http://127.0.0.1:9000',

  async get(path, options) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: {
        'Authorization': 'Bearer ' + options.token,
        'Content-Type': 'application/json'
      }
    });
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
