var backdrop = document.querySelector('#backdrop');
var modal = document.querySelector('#modal');
var modalNoButton = document.querySelector('#button-cancel');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('#toggle-btn');
var mobileNav = document.querySelector('#mobile-nav');

// console.dir(backdrop.style['background-image']);

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function () {
    backdrop.classList.remove('hidden');
    backdrop.classList.add('fixed');
    modal.classList.remove('hidden');
    modal.classList.add('fixed');
  });
}

backdrop.addEventListener('click', function () {
  closeModal();
});

if (modalNoButton) {
  modalNoButton.addEventListener('click', closeModal);
}

function closeModal() {
  if (modal) {
    modal.classList.remove('fixed');
    modal.classList.add('hidden');
  }
  backdrop.classList.remove('fixed');
  backdrop.classList.add('hidden');
}

toggleButton.addEventListener('click', function () {
  if (mobileNav.classList.contains('-translate-x-full')) {
    mobileNav.classList.remove('-translate-x-full');
    //mobileNav.classList.remove('hidden');
    mobileNav.classList.add('translate-x-0');
  } else {
    mobileNav.classList.remove('translate-x-0');
    mobileNav.classList.add('-translate-x-full');
    //mobileNav.classList.add('hidden');
  }
});
