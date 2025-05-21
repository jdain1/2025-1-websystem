const tabs = document.querySelectorAll('.tabLinks span');
const contents = document.querySelectorAll('.tabContent');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    // 탭 텍스트 스타일 처리
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // 콘텐츠 표시 처리
    contents.forEach(c => {
        c.classList.toggle('active', c.getAttribute('data-tab') === target);
    });
    });
});