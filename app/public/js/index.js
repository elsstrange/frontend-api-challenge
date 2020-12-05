let element
let client
let user
let session

window.addEventListener('load', () => {
  element = document.getElementById('app');
  client = new chitterApiClient();
   
  let peeps = Peeps(element, client);
  peeps.render();

  let userIdBlock = userIdentificationBlock(element);
  userIdBlock.render();
  
  let registerButton = document.getElementById('register')
  registerButton.addEventListener('click', () => {
    registrationForm = userForm(element);
    registrationForm.render('register-form');

    document
      .getElementById('register-form')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        handle = document.getElementById('handle').value;
        password = document.getElementById('password').value;
        client.postUser(handle, password)
          .then((userData) => {
            user = userData;
            // Some error handling required here for failed sign-up.
          }).then(() => {
            return client.postSession(handle, password);
          }).then((sessionData) => {
            session = sessionData;
          }).then(() => {
            userIdBlock.hide()
            registrationForm.hide()
          });
      })
  })
});
