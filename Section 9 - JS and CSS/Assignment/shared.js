let backdrop = document.querySelector('.backdrop');
let modal = document.querySelector('.modal');
let selectPlanButtons = document.querySelectorAll('.plan button');
let noButton = document.querySelector('.modal__action--negative');

// console.dir(backdrop);
for (let i = 0; i < selectPlanButtons.length; i++) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    });
}

noButton.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

function closeModal() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
}