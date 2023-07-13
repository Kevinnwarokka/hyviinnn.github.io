let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click', () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
});

window.addEventListener('scroll', () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
});

let navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    let target = link.getAttribute('href');
    let targetElement = document.querySelector(target);
    let targetOffset = targetElement.offsetTop;

    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth'
    });
  });
});