
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
  const dotContainer = document.querySelector('.slideBox .dots');
  let current = 0;

  // 도트 자동 생성
  images.forEach(() => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dotContainer.appendChild(dot);
  });

  const dots = document.querySelectorAll('.dots .dot');

  // 첫 이미지 & 도트 활성화
  images[current].classList.add('active');
  dots[current].classList.add('active');

  setInterval(() => {
    // 현재 이미지 & 도트 비활성화
    images[current].classList.remove('active');
    dots[current].classList.remove('active');

    // 다음 이미지 인덱스 계산
    current = (current + 1) % images.length;

    // 다음 이미지 & 도트 활성화
    images[current].classList.add('active');
    dots[current].classList.add('active');
  }, 3000);
});