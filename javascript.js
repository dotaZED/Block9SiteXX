const scrollImages = document.querySelector('.scroll-images');
const images = document.querySelectorAll('.scroll-images img');
let width = 0;
const maxHeight = 300;

images.forEach(image => {
  width += image.clientWidth;
  image.style.height = `${maxHeight}px`;
  image.style.objectFit = 'cover';
});

scrollImages.style.width = `${width}px`;

let scrollPosition = 0;
let intervalId = setInterval(() => {
  scrollPosition++;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
}, 10);

// Keep scrolling even when window loses focus
let lastTime = 0;
const updateInterval = 10;

function updateScroll() {
  const now = Date.now();
  const deltaTime = now - lastTime;
  lastTime = now;
  
  scrollPosition += deltaTime / updateInterval;
  scrollImages.style.transform = `translateX(-${scrollPosition}px)`;
  
  if (scrollPosition >= images[0].clientWidth) {
    scrollImages.appendChild(images[0]);
    scrollPosition = 0;
  }
  
  requestAnimationFrame(updateScroll);
}

requestAnimationFrame(updateScroll);
