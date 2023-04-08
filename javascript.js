const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
const maxHeight = 300;
const scrollSpeed = 1;

images.forEach(image => {
  image.style.height = `${maxHeight}px`;
  image.style.boxShadow = '0 0 10px rgba(128, 0, 128, 0.8)';
  image.style.filter = 'drop-shadow(0 0 10px rgba(128, 0, 128, 0.8))';
});

let width = scrollImages.scrollWidth;
scrollImages.style.transform = `translateX(-${width / 2}px)`;

let scrollPosition = 0;
let scrollInterval = setInterval(() => {
  scrollPosition += scrollSpeed;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= width) {
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
    if (scrollPosition >= width) {
      scrollPosition = 0;
    }
  }, 20);
});
