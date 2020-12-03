describe('Chitter API Client', () => {
  let client;
  let mockResponse;
  
  beforeEach(() => {
    client = new chitterApiClient();
  })

  describe('#getPeeps', () => {
    beforeEach(() => {
      mockResponse = { json : () => { return mockGetPeepsResponse } };
      spyOn(window,"fetch").and.returnValue(mockResponse);
    });

    it('fetches peeps data from the API with appropriate call', () => {
      client.getPeeps();
      expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps');
    });

    it('returns peeps data from the API', async () => {
      peeps = await client.getPeeps();
      expect(peeps).toEqual(mockGetPeepsResponse);
    });
  });
  
  describe('users and sessions', () => {
    let username;
    let password;

    beforeEach(() => {
      username = "TestUser";
      password = "SecretPass";
    });

    describe('#postUser', () => {
      let postUserUrl;
      let postUserRequest;

      beforeEach(() => {
        postUserUrl = "https://chitter-backend-api-v2.herokuapp.com/users";
        postUserRequest = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: `{"user":{"handle":"${username}","password":"${password}"}}`
        };
        mockResponse = { json : () => { return mockPostUserResponse } };
        spyOn(window,"fetch").and.returnValue(mockResponse);
      });

      it('posts a new user to the API with appropriate call', () => {
        client.postUser(username, password);
        expect(window.fetch).toHaveBeenCalledWith(postUserUrl, postUserRequest);
      });

      it('returns the API response as an object', async () => {
        user = await client.postUser(username, password);
        expect(user).toEqual(mockPostUserResponse);
      });
    });

    describe('#postSession', () => {
      let postSessionUrl;
      let postSessionRequest;

      beforeEach(() => {
        postSessionUrl = "https://chitter-backend-api-v2.herokuapp.com/sessions";
        postSessionRequest = {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: `{"session":{"handle":"${username}","password":"${password}"}}`
        };
        mockResponse = { json : () => { return mockPostSessionResponse } };
        spyOn(window,"fetch").and.returnValue(mockResponse);
      });

      it('posts a new user to the API with appropriate call', () => {
        client.postSession(username, password);
        expect(window.fetch).toHaveBeenCalledWith(postSessionUrl, postSessionRequest);
      });

      it('returns the API response as an object', async () => {
        session = await client.postSession(username, password);
        expect(session).toEqual(mockPostSessionResponse);
      });
    });
  });
});
