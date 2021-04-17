export default {
  baseUrl: 'http://127.0.0.1:9000',

  async get(path, token) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json',
      }),
    });
    const data = await response.json();
    return data;
  },

  async post(path, token, formData = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json',
      }),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(formData)
    });

    return response;
  }
};
