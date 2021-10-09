
const navitem = document.querySelectorAll('.nav-item');
const socials = document.querySelectorAll('.social-app')
navitem.forEach((nav, i) => {
  ScrollReveal().reveal(nav, {
    delay: i * 300,
    distance: '50px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'top'
})
})

ScrollReveal().reveal('.description', {
  delay: 500,
  distance: '100%',
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'top'
})

socials.forEach((social, i) => {
  ScrollReveal().reveal(social, {
    delay: i * 300,
    distance: '50px',
    duration: 600,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    interval: 0,
    opacity: 0,
    origin: 'top'
})
})

ScrollReveal().reveal('.reveal', {
  delay: 400,
  distance: '50px',
  duration: 600,
  easing: 'cubic-bezier(0.5, 0, 0, 1)',
  interval: 0,
  opacity: 0,
  origin: 'top'
})
