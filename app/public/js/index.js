window.addEventListener('load', () => {
  element = document.getElementById('app');
  client = new chitterApiClient();
  peeps = Peeps(element, client)
  peeps.render()
});
