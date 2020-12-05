describe('User Indentification Block', () => {
  let block;
  let targetElement;
  let expectedHtml;

  beforeEach(() => {
    targetElement = document.createElement('div');
    block = userIdentificationBlock(targetElement);
  });

  describe('#render', () => {
    beforeEach(() => {
      expectedHtml = [
        '<div id="user-identification">',
          '<button id="register">Sign Up</button>',
          '<button id="sign-in">Sign In</button>',
        '</div>'
      ].join("")
    });

    it('adds a child node with buttons to the given target element', () => {
      block.render();
      expect(targetElement.innerHTML).toEqual(expectedHtml);
    });
  });

  describe('#hide', () => {
    it('styles the child node to be invisible', () => {
      block.render();
      block.hide();
      expect(targetElement.children[0].style.display).toEqual('none')
    });
  });
});
