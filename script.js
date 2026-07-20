const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.site-menu');
const modal = document.querySelector('#visit-modal');
const form = document.querySelector('#visit-form');
const formContent = document.querySelector('#form-content');
const completeMessage = document.querySelector('#complete-message');

function closeMenu() {
  menu.classList.remove('open');
  menuToggle.classList.remove('active');
  menuToggle.setAttribute('aria-expanded', 'false');
}

menuToggle.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuToggle.classList.toggle('active', open);
  menuToggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.site-menu a').forEach(link => link.addEventListener('click', closeMenu));

function openModal() {
  closeMenu();
  form.reset();
  formContent.hidden = false;
  completeMessage.hidden = true;
  modal.showModal();
  document.body.classList.add('modal-open');
  setTimeout(() => document.querySelector('#visit-form input')?.focus(), 100);
}
function closeModal() { modal.close(); }
document.querySelectorAll('[data-open-modal]').forEach(button => button.addEventListener('click', openModal));
document.querySelectorAll('[data-close-modal], .modal-close').forEach(button => button.addEventListener('click', closeModal));
modal.addEventListener('close', () => document.body.classList.remove('modal-open'));
modal.addEventListener('click', event => { if (event.target === modal) closeModal(); });
form.addEventListener('submit', event => {
  event.preventDefault();
  formContent.hidden = true;
  completeMessage.hidden = false;
  completeMessage.querySelector('button').focus();
});
