
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


  function showPopup(event) {
    event.preventDefault();
    document.getElementById('popupOverlay').classList.remove('hidden');
  }

  function closePopup() {
    document.getElementById('popupOverlay').classList.add('hidden');
  };
  function toggleText(id) {
    const content = document.getElementById(id);
    content.classList.toggle('show');
  }

 function showPopup(event) {
    event.preventDefault();
    const overlay = document.getElementById('popupOverlay');
    overlay.classList.remove('hidden');

    // Enable outside click to close
    overlay.onclick = function () {
      closePopup();
    };
  }

  function closePopup() {
    document.getElementById('popupOverlay').classList.add('hidden');
  }


