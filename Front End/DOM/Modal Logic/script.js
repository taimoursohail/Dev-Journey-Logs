'use strict';

let openBtn = document.querySelectorAll('.show-modal');
let closeBtn = document.querySelector('.close-modal');
let modal = document.querySelector('.modal');
let hiddenDiv = document.querySelector('.hidden');
let overLay = document.querySelector('.overlay');

for (let i = 0; i < openBtn.length; i++) {
  openBtn[i].addEventListener('click', function () {
    hiddenDiv.style.display = 'block';
    overLay.style.display = 'block';
  });
}

closeBtn.addEventListener('click', function () {
  hiddenDiv.style.display = 'none';
  overLay.style.display = 'none';
});

document.addEventListener('keyup', function (event) {
  if (event.key == 'Escape') {
    hiddenDiv.style.display = 'none';
    overLay.style.display = 'none';
  }
});

overLay.addEventListener('click', () => {
  if (!modal.contains(event.target)) {
    hiddenDiv.style.display = 'none';
    overLay.style.display = 'none';
  }
});
