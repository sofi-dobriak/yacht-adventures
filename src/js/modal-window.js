const modal = document.querySelector('.modal-overlay');
const form = document.querySelector('.form');
const modalBtnClose = document.querySelector('.modal-btn-close');

// Перевірка всіх полів у формі
const validateForm = () => {
  return form.checkValidity();
};

// Функція для відкриття модального вікна після валідації
const openModalIfValid = event => {
  event.preventDefault(); // Запобігає відправці форми
  if (validateForm()) {
    toggleModal(); // Відкриває модальне вікно, якщо валідація успішна
  } else {
    alert('Будь ласка, заповніть усі поля правильно.');
  }
};

// Відкриття/закриття модального вікна
const toggleModal = () => {
  modal.classList.toggle('is-open');
};

// Додавання події submit на форму для відкриття модального вікна
form.addEventListener('submit', openModalIfValid);
modalBtnClose.addEventListener('click', toggleModal);
