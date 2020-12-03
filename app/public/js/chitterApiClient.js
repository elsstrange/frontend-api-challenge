class chitterApiClient {
  async getPeeps(){
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
    let data = await response.json();
    return data;
  }

  async postUser(username, password) {
    let postData = this.createUserSessionData(username, password);
    let postRequest = this.createPostRequest("user", postData);
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/users', postRequest);
    let data = await response.json();
    return data;
  }

  async postSession(username, password) {
    let postData = this.createUserSessionData(username, password);
    let postRequest = this.createPostRequest("session", postData);
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/sessions', postRequest);
    let data = await response.json();
    return data;
  }

  async postPeep(peep, userId, sessionKey) {
    let postData = {
      "user_id": userId,
      "body": peep,
    };
    let postRequest = this.createPostRequest("peep", postData, sessionKey);
    let response = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps', postRequest);
    let data = await response.json();
    return data;
  }

  createPostRequest(type, data, sessionKey) {
    let body = {};
    body[type] = data;
    let headers = this.createPostHeaders(sessionKey);
    
    return {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(body)
    };
  }

  createPostHeaders(sessionKey) {
    let headers = {
      'Content-Type': 'application/json',
    }
    if (sessionKey !== undefined) {
      headers['Authorization'] = `Token token=${sessionKey}`;
    }
    return headers;
  }

  createUserSessionData(username, password) {
    return {
      "handle": username,
      "password": password
    };
  }
}
