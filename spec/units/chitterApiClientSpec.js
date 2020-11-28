describe('Chitter API Client', () => {
  let client;
  let mockResponse;

  describe('#getPeeps', () => {
    beforeEach(() => {
      client = new chitterApiClient();
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
});
