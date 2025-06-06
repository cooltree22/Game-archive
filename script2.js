
    function togglePlatform(platformId) {
      var platformSection = document.getElementById(platformId);
      platformSection.style.display = platformSection.style.display === "none" ? "block" : "none";
    }
    

    function toggleSubsection(subsectionId) {
      var subsection = document.getElementById(subsectionId);
      subsection.style.display = subsection.style.display === "none" ? "block" : "none";
    }


  window.addEventListener('DOMContentLoaded', () => {
    const savedMode = localStorage.getItem('darkMode');
    const body = document.body;
    const icon = document.getElementById('modeIcon');

    if (savedMode === 'enabled') {
      body.classList.add('dark-mode');
      icon.textContent = '🌙';
    } else {
      icon.textContent = '☀️';
    }
  });

  function toggleMode() {
    const body = document.body;
    const icon = document.getElementById('modeIcon');

    body.classList.toggle('dark-mode');
    const darkModeEnabled = body.classList.contains('dark-mode');

    icon.textContent = darkModeEnabled ? '🌙' : '☀️';
    localStorage.setItem('darkMode', darkModeEnabled ? 'enabled' : 'disabled');
  }
  window.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    links.forEach(link => {
      if (link.getAttribute('href') !== 'index.html') {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer'); // security best practice
      }
    });
  });


function showPopup(event, popupId) {
  event.preventDefault();
  const overlay = document.getElementById(popupId);
  overlay.classList.remove('hidden');

  // Allow clicking outside to close
  overlay.onclick = function () {
    closePopup(popupId);
  };
}

function closePopup(popupId) {
  const overlay = document.getElementById(popupId);
  overlay.classList.add('hidden');
}


function showPopup(event, popupId) {
  event.preventDefault();
  const overlay = document.getElementById(popupId);
  overlay.classList.remove('hidden');
  document.body.style.overflow = 'hidden';

  overlay.onclick = function () {
    closePopup(popupId);
  };
}

function closePopup(popupId) {
  const overlay = document.getElementById(popupId);
  overlay.classList.add('hidden');
  document.body.style.overflow = 'auto';
}

