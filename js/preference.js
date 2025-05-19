function createRipple(e) {
      const ripple = document.createElement('div');
      ripple.className = 'ripple';
      ripple.style.left = `${e.clientX}px`;
      ripple.style.top = `${e.clientY}px`;
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 1000);
    }

    function firstSelect(pref) {
      localStorage.setItem('pref1', pref);
      document.getElementById('slider').style.transform = 'translateY(-100vh)';

      // 가로선 위로 날아가게 클래스 추가
      const hLine = document.getElementById('hLine');
      hLine.classList.add('fly-up');
    }

    function secondSelect(pref) {
      localStorage.setItem('pref2', pref);
      const resultBtn = document.getElementById('resultBtn');
      resultBtn.classList.add('show');
    }

    function goResult() {
      window.location.href = 'recommend.html';
    }

    window.addEventListener('scroll', () => {
      const hLine = document.getElementById('hLine');
      if (window.scrollY > window.innerHeight * 0.5) {
        hLine.classList.add('hide-horizontal');
      } else {
        hLine.classList.remove('hide-horizontal');
      }
    });

    document.addEventListener('mousemove', (e) => {
      const trail = document.getElementById("mouseTrail");
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
    });