const second_modal = document.querySelector('.second_backdrop');
const second_modalBtnOpen = document.querySelector('.second_btn'); 
const second_modalBtnClose = document.querySelector('.second-btn-close');

const togglesecondModal = () => second_modal.classList.toggle('second-hidden');

second_modalBtnOpen.addEventListener('click', togglesecondModal);
second_modalBtnClose.addEventListener('click', togglesecondModal);