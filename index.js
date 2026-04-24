document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.onclick = e => {
    e.preventDefault();
    btn.parentElement.classList.toggle('active');
  };
});


const menu = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');

menu.addEventListener('click', () => {
  nav.classList.toggle('active');
});


