const backToTopBtn = document.querySelector('.back-to-top-btn');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 200) {
    backToTopBtn.classList.add('show');
  } else {
    backToTopBtn.classList.remove('show');
  }
});

backToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
