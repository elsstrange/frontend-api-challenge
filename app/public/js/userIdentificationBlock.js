function userIdentificationBlock(element) {
  targetElement = element;
  container = document.createElement('div');
  container.setAttribute('id', 'user-identification');

  let render = () => {
    container.innerHTML = '<button id="register">Sign Up</button><button id="sign-in">Sign In</button>';
    targetElement.insertBefore(container,targetElement.children[0]);
  }

  let hide = () => {
    container.style.display = "none";
  }

  return {
    render: render,
    hide: hide
  };
}
