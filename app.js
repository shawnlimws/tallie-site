function route () {
  Array.from(document.querySelectorAll('section'))
    .forEach(section =>
    section.style.display = 'none'
)
  switch (window.location.pathname) {
    case '/about':
      document.title = 'About Me | Skills and Interest'
      document.querySelector('#about').style.display = 'flex'
      break
    case '/':
      document.title = 'Shawn Lim | Web Developer'
      document.querySelector('#home').style.display = 'flex'
  }
}

route()
