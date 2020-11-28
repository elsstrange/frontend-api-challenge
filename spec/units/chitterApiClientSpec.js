describe('Chitter API Client', () => {
  let client;

  describe('#getPeeps', () => {
    beforeEach(() => {
      client = new chitterApiClient()
      spyOn(window,"fetch")
    });

    it('fetches and returns peeps data from the API with appropriate call', () => {
      client.getPeeps()
      expect(window.fetch).toHaveBeenCalledWith('https://chitter-backend-api-v2.herokuapp.com/peeps')
    });
  });
});
