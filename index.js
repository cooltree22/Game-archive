const slide = document.getElementById('carouselSlide');
const dotsContainer = document.getElementById('dots');

if (slide && dotsContainer) {
  const totalSlides = slide.children.length;
  let currentIndex = 0;

  // Create dots
  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => goToSlide(i));
    dotsContainer.appendChild(dot);
  }

  const dots = document.querySelectorAll('.dot');

  // Init
  updateCarousel();
}



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

function updateLastUpdated() {

const lastUpdated = new Date("2025-06.14");

  const now = new Date();
  const diffTime = now - lastUpdated;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

let color = "green";
if (diffDays >= 31) {
  color = "red";
} else if (diffDays === 14) {
  color = "orange";
} else if (diffDays >= 7) {
  color = "goldenrod";
}

  const label = document.getElementById("last-updated");
  label.textContent = `⏱ Updated ${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
  label.style.backgroundColor = color;
}

window.addEventListener("DOMContentLoaded", updateLastUpdated);


