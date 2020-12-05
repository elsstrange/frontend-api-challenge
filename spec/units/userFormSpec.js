describe('User Form', () => {
  let mockElement;
  let givenId;
  let userform;

  beforeEach(() => {
    mockElement = document.createElement('div');
    givenId = 'an-id';
    userform = userForm(mockElement);
  });

  describe('#render', () => {
    beforeEach(() => {
      formHTML = [
        '<div id="user-form">',
          `<form class="float-form" id="${givenId}">`,
            '<label for="handle">Username</label>',
            '<input type="text" id="handle"><br>',
            '<label for="password">Password</label>',
            '<input type="password" id="password"><br>',
            '<button type="submit">Go!</button>',
          '</form>',
        '</div>'
      ].join("");
    });

    it('creates a form element with the provided id', () => {
      userform.render(givenId);
      expect(mockElement.innerHTML).toEqual(formHTML);
    });
  });

  describe('#hide', () => {
    it('styles the form to be invisible', () => {
      userform.render(givenId);
      userform.hide();
      formElement = mockElement.children[0];
      expect(formElement.style.display).toEqual('none');
    })
  });
});
