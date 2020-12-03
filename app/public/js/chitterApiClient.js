class chitterApiClient {
  async getPeeps(){
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    let data = await response.json();
    return data;
  }

  async postUser(username, password) {
    let postData = this.createUserSessionData(username, password);
    let postRequest = this.createRequest("user", postData);
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/users', postRequest);
    let data = await response.json();
    return data;
  }

  async postSession(username, password) {
    let postData = this.createUserSessionData(username, password);
    let postRequest = this.createRequest("session", postData);
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', postRequest);
    let data = await response.json();
    return data;
  }

  createRequest(type, data) {
    let body = {};
    body[type] = data;
    
    return {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body)
    };
  }

  createUserSessionData(username, password) {
    return {
      "handle": username,
      "password": password
    };
  }
}
