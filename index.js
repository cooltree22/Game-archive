 const slide = document.getElementById('carouselSlide');
  const totalSlides = slide.children.length;
  const dotsContainer = document.getElementById('dots');

  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  function updateCarousel() {
    slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentIndex].classList.add('active');
  }

  function moveSlide(direction) {
    currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
    updateCarousel();
  }

  function goToSlide(index) {
    currentIndex = index;
    updateCarousel();
  }

  // Init
  updateCarousel();

   document.getElementById('nav-toggle').addEventListener('click', function () {
      document.getElementById('mobile-nav').classList.toggle('show');
    });


    const toggleBtn = document.getElementById('toggle-theme');

    function loadTheme() {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme === 'enabled') {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '🌙';
      } else {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '☀️';
      }
    }

    function toggletheme() {
      if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
        toggleBtn.textContent = '☀️';
        localStorage.setItem('darkMode', 'disabled');
      } else {
        document.body.classList.add('dark-mode');
        toggleBtn.textContent = '🌙';
        localStorage.setItem('darkMode', 'enabled');
      }
    }

    toggleBtn.addEventListener('click', toggletheme);
    window.addEventListener('DOMContentLoaded', loadTheme);






