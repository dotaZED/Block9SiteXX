const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
const maxHeight = 300;
let totalWidth = 0;

images.forEach(image => {
  const imageWidth = image.clientWidth;
  const imageHeight = image.clientHeight;
  const ratio = maxHeight / imageHeight;
  const newWidth = imageWidth * ratio;

  image.style.height = `${maxHeight}px`;
  image.style.width = `${newWidth}px`;
  totalWidth += newWidth;
});

scrollImages.style.width = `${totalWidth}px`;

let scrollPosition = 0;
setInterval(() => {
  scrollPosition++;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
}, 30);
