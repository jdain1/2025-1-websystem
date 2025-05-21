  window.addEventListener('DOMContentLoaded', function () {
    const images = document.querySelectorAll('.slideBox img');
    let current = 0;

    images[current].classList.add('active');

    setInterval(() => {
      images[current].classList.remove('active');
      current = (current + 1) % images.length;
      images[current].classList.add('active');
    }, 3000);
  });