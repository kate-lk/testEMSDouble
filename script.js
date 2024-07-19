const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal__close');
const modalOpen = document.querySelector('.demo__btn');

modalClose.addEventListener('click', () => {
    modalBg.style.display = "none";
})

modalOpen.addEventListener('click', () => {
    modalBg.style.display = "flex";
})