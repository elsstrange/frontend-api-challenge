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
    document.getElementById('handle').focus();

    document.getElementById('register-form')
      .addEventListener('submit', (event) => {
        event.preventDefault();
        handle = document.getElementById('handle').value;
        password = document.getElementById('password').value;
        
        client.postUser(handle, password)
          .then((userData) => {
            user = userData;
            // Some error handling required here for failed sign-up.
          })
          .then(() => {
            return client.postSession(handle, password);
          })
          .then((sessionData) => {
            session = sessionData;
          })
          .then(() => {
            userIdBlock.hide()
            registrationForm.hide()
            peepForm(element).render()
          })
          .then(() => {
            document.getElementById('peep-body').focus()
            document.getElementById('peep-form')
            .addEventListener('submit', (event) => {
              event.preventDefault();
              
              peepInput = document.getElementById('peep-body');
            
              client.postPeep(peepInput.value, session.user_id, session.session_key)
                .then(() => {
                  peeps.render()
                  peepInput.value = ''
                  peepInput.focus()
                });
            });
          });
      });
  });

  let signInButton = document.getElementById('sign-in')
  signInButton.addEventListener('click', () => {
    signInForm = userForm(element);
    signInForm.render('signin-form');
    document.getElementById('handle').focus();

    document.getElementById('signin-form')
    .addEventListener('submit', (event) => {
      event.preventDefault();
      
      handle = document.getElementById('handle').value;
      password = document.getElementById('password').value;
      
      client.postSession(handle, password)
        .then((sessionData) => {
          session = sessionData;
        })
        .then(() => {
          userIdBlock.hide()
          signInForm.hide()
          peepForm(element).render()
        })
        .then(() => {
          document.getElementById('peep-body').focus()
          document.getElementById('peep-form')
          .addEventListener('submit', (event) => {
            event.preventDefault();
            
            peepInput = document.getElementById('peep-body');
            
            client.postPeep(peepInput.value, session.user_id, session.session_key)
              .then(() => {
                peeps.render()
                peepInput.value = ''
                peepInput.focus()
              });
          });
        });
    });
  });
});
