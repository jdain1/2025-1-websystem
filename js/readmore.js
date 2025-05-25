// main-h1 글씨 올라오는 효과 
window.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('.main h1');
  setTimeout(() => {
    title.classList.add('show');
  }, 100);  // 살짝 딜레이 줘도 자연스러움
});

// 이미지 슬라이드
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