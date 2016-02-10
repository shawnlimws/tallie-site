function route () {
  Array.from(document.querySelectorAll('section'))
    .forEach(section =>
    section.style.display = 'none'
)
  switch (window.location.pathname) {
    case '/about':
      document.title = 'About Us'
      document.querySelector('#about').style.display = 'flex'
      break
    case '/':
      document.title = 'Shawn Lim'
      document.querySelector('#home').style.display = 'flex'
  }
}

route()
