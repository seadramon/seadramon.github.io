const button = document.querySelector('.menu-button');
const navigation = document.querySelector('nav');
button?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  button.setAttribute('aria-expanded', String(open));
});
navigation?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => navigation.classList.remove('open')));
document.getElementById('year').textContent = new Date().getFullYear();
