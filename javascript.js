const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
let width = 0;
const maxHeight = 300;
const scrollSpeed = 1;

images.forEach(image => {
  width += image.clientWidth;
  image.style.height = `${maxHeight}px`;
});

scrollImages.style.width = `${width}px`;
scrollImages.style.transform = `translateX(0px)`;

let scrollPosition = 0;
let scrollInterval = setInterval(() => {
  scrollPosition += scrollSpeed;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
}, 20);

scrollImages.addEventListener('mouseover', () => {
  clearInterval(scrollInterval);
});

scrollImages.addEventListener('mouseout', () => {
  scrollInterval = setInterval(() => {
    scrollPosition += scrollSpeed;
    scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
    if (scrollPosition >= images[0].clientWidth) {
      scrollImages.appendChild(images[0]);
      scrollPosition = 0;
    }
  }, 20);
});
