const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
let width = 0;
images.forEach(image => {
  width += image.clientWidth;
});
scrollImages.style.width = `${width}px`;
