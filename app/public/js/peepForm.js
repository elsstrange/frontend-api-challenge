function peepForm(element) {
  let targetElement = element
  let container = document.createElement('div')
  container.setAttribute('id', 'peep-form-container')
  
  let render = () => {
    container.innerHTML = [
      '<form id="peep-form">',
        `<input type="text" id="peep-body" placeholder="What's on your mind, chick?">`,
        '<button type="submit" id="send-peep">PEEP!</button>',
      '</form>'
    ].join("")
    targetElement.insertBefore(container,targetElement.children[0])
  }

  return {
    render: render
  }
}
