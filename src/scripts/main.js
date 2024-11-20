'use strict';

const largImg = document.getElementById('largeImg');
const smallList = document.getElementById('thumbs');

smallList.addEventListener('click', (ev) => {
  event.preventDefault();

  if (ev.target) {
    const currentArt = event.target.getAttribute('src');

    largImg.setAttribute('src', currentArt);
  }
});
