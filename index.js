


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
window.addEventListener("DOMContentLoaded", () => {
  const spiele = document.getElementById("spiele");
  if (spiele) {
    spiele.classList.add("fade-in");
  }
});

function updateLastUpdated() {
document.addEventListener("DOMContentLoaded", () => {
  const spiele = document.getElementById("spiele");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          spiele.classList.add("visible");
          observer.unobserve(spiele); // Trigger only once
        }
      });
    },
    {
      threshold: 0.1 // Adjust if needed
    }
  );

  if (spiele) {
    observer.observe(spiele);
  }
});

const lastUpdated = new Date("2025-07.07");

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


document.addEventListener("DOMContentLoaded", () => {
  const tiles = document.querySelectorAll(".spiel-kachel");

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        } else {
          entry.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.1
    }
  );

  tiles.forEach(tile => observer.observe(tile));
});
