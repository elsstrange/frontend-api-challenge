describe('Peep Form', () => {
  let targetElement
  let expectedHTML

  describe('#render', () => {
    beforeEach(() => {
      targetElement = document.createElement('div')
      expectedHTML = [
        '<div id="peep-form-container">',
          '<form id="peep-form">',
            `<input type="text" id="peep-body" placeholder="What's on your mind, chick?">`,
            '<button type="submit" id="send-peep">PEEP!</button>',
          '</form>',
        '</div>'
      ].join("");
    });

    it('renders an element containing a form for peeping, inside a given element', () => {
      peepForm(targetElement).render();
      expect(targetElement.innerHTML).toEqual(expectedHTML);
    });
  });
});
