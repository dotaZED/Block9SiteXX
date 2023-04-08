const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
let width = 0;
let height = 0;
images.forEach(image => {
  width += image.clientWidth;
  if (image.clientHeight > height) {
    height = image.clientHeight;
  }
});
scrollImages.style.width = `${width}px`;
scrollImages.style.height = `${height}px`;
images.forEach(image => {
  image.style.width = `${width/images.length}px`;
  image.style.height = `${height}px`;
});

let scrollPosition = 0;
setInterval(() => {
  scrollPosition++;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
}, 10);
