document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.dropdown-toggle').forEach(btn => {

    btn.addEventListener('click', e => {

      if (window.innerWidth <= 768) {
        e.preventDefault();
        btn.parentElement.classList.toggle('active');
      }

    });

  });

});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('open');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  menu.classList.remove('open');
});


