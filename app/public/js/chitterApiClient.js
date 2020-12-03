class chitterApiClient {
  async getPeeps(){
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    let data = await response.json();
    return data;
  }

  async postUser(username, password) {
    let postData = {
      "user": {
        "handle": username,
        "password": password
      }
    };
    let request = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData)
    };
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/users', request);
    let data = await response.json();
    return data;
  }
}
