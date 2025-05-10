const third_modal = document.querySelector('.third_backdrop');
const third_modalBtnOpen = document.querySelector('.third_btn'); 
const third_modalBtnClose = document.querySelector('.third-btn-close');

const togglethirdModal = () => third_modal.classList.toggle('third-hidden');

third_modalBtnOpen.addEventListener('click', togglethirdModal);
third_modalBtnClose.addEventListener('click', togglethirdModal);