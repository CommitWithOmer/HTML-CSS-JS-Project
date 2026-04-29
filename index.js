
document.addEventListener('DOMContentLoaded', () => {

  document.querySelectorAll('.dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();
      e.stopPropagation();
      btn.closest('.dropdown').classList.toggle('active');
    });
  });

  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(d => {
      d.classList.remove('active');
    });
  });

});

const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
const closeBtn = document.querySelector('.close-btn');
const overlay = document.querySelector('.overlay');


menu.addEventListener('click', () => {
  nav.classList.toggle('active');
  menu.classList.toggle('open');
  overlay.classList.toggle('active');
});

closeBtn.addEventListener('click', () => {
  nav.classList.remove('active');
  menu.classList.remove('open');
  overlay.classList.remove('active');
});

overlay.addEventListener('click', () => {
  nav.classList.remove('active');
  menu.classList.remove('open');
  overlay.classList.remove('active');
});
