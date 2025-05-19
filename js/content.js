// 로딩 시 중앙 텍스트 애니메이션
window.addEventListener('DOMContentLoaded', () => {
  const curved = document.querySelector('.curved-h3');
  const dancing = document.querySelector('.dancing');

  if (curved) curved.classList.add('fade-in-start');
  if (dancing) dancing.classList.add('fade-in-start');
});

// 스크롤 요소 애니메이션
window.addEventListener('DOMContentLoaded', () => {
  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  });

  document.querySelectorAll('.content1-text, .content1-img, .content2-text, .content2-img')
    .forEach(el => {
      el.classList.add('fade-up');
      observer.observe(el);
    });
});

// 스크롤 버튼 애니메이션
// const scrollTopBtn = document.getElementById('scrollTopBtn');
// scrollTopBtn.addEventListener('click', () => {
//     window.scrollTo({
//         top: 0,
//         behavior: 'smooth'
//     });
// });


document.getElementById('scrollTopBtn').addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});