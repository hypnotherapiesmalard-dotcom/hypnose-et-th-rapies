document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.querySelector('.nav-toggle');
  const navList = document.getElementById('nav-list');
  if (toggle && navList) {
    toggle.addEventListener('click', function () {
      const isOpen = navList.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }
});
