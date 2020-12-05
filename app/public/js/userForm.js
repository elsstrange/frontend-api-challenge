function userForm(element) {
  let targetElement = element;
  let formContainer = document.createElement('div');
  formContainer.setAttribute('id', 'user-form');

  let render = (formId) => {
    formContainer.innerHTML = [
      `<form class="float-form" id="${formId}">`,
        '<label for="handle">Username</label>',
        '<input type="text" id="handle"></br>',
        '<label for="password">Password</label>',
        '<input type="password" id="password"></br>',
        '<button type="submit">Go!</button>',
      '</form>'
    ].join("")
    targetElement.appendChild(formContainer)
  }

  let hide = () => {
    formContainer.style.display = "none"
  }

  return {
    render: render,
    hide: hide
  }
}
