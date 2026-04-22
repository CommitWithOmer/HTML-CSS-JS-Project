document.querySelectorAll('.dropdown-toggle').forEach(btn => {
  btn.onclick = e => {
    e.preventDefault();
    btn.parentElement.classList.toggle('active');
  };
});