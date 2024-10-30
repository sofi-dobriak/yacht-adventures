const backTopLink = document.querySelector('.back-top-link');

window.addEventListener('scroll', () => {
  if (window.scrollY > 100) {
    backTopLink.classList.add('show');
  } else {
    backTopLink.classList.remove('show');
  }
});

backTopLink.addEventListener('click', e => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});
