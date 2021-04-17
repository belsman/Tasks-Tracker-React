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

  async post(path, token, postData = {}) {
    const response = await fetch(`${this.baseUrl}${path}`, {
      method: 'POST',
      mode: 'cors',  // include, *same-origin, omit
      cache: 'no-cache',
      credentials: 'same-origin',  // no-cors, *cors, same-origin
      headers: new Headers({
        'Authorization': token,
        'Content-Type': 'application/json',
      }),
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(postData)
    });
    return response.json();
  }
};
