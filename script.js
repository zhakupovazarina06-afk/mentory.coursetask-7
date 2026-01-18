const openModalButtons = document.querySelectorAll('[data-modal-action="open-modal"]');
const closeModalButtons = document.querySelectorAll('[data-modal-action="close-modal"]');
const modalWindows = document.querySelectorAll('[data-modal-action="modal"]');

openModalButtons.forEach((btn) => {
  btn.addEventListener('click', openModal);
});

closeModalButtons.forEach((btn) => {
  btn.addEventListener('click', closeModal);
});

modalWindows.forEach((modal) => {
  modal.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.classList.remove('open');
    }
  });
});

function openModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.dataset.modal === event.target.dataset.modal) {
      modal.classList.add('open');
    }
  });
}

function closeModal(event) {
  modalWindows.forEach((modal) => {
    if (modal.dataset.modal === event.target.dataset.modal) {
      modal.classList.remove('open');
    }
  });
}
