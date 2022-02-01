var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

let selectNoButton = document.querySelector('.modal__action--negative');
selectNoButton.addEventListener('click', closeModal);

let selectBackdrop = document.querySelector('div.backdrop');
selectBackdrop.addEventListener('click', closeModal);

function closeModal() {
  modal.style.display = 'none';
  backdrop.style.display = 'none';
}
