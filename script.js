const popupBox = document.getElementById("popupBox"); // move this outside

window.closePopup = function () {
  if (popupBox) {
    popupBox.style.display = "none";
  }
};

window.addEventListener('DOMContentLoaded', () => {
  // ... your existing code ...

  const popupOverlay = document.getElementById("popupOverlay");
  if (popupOverlay) {
    popupOverlay.addEventListener("click", () => {
      closePopup();
    });
  }

  // your other code...
});

document.getElementById("updateTimer").addEventListener("click", () => {
  location.reload();
});

window.addEventListener('DOMContentLoaded', () => {
  // ----------------------------
  // Last updated logic
  // ----------------------------
  const lastUpdatedISO = "2025-07-11T17:13:06";
  const lastUpdatedDate = new Date(lastUpdatedISO);
  const now = new Date();

  const timerElement = document.getElementById('updateTimer');
  const diffMs = now - lastUpdatedDate;
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const timeString = lastUpdatedDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  let result = "";

  timerElement.classList.remove("green-glow", "orange-glow", "red-glow");

  if (diffDays === 0) {
    result = `Today at ${timeString}`;
    timerElement.classList.add("green-glow");
  } else if (diffDays === 1) {
    result = `Yesterday at ${timeString}`;
    timerElement.classList.add("green-glow");
  } else if (diffDays < 14) {
    result = `${diffDays} days ago`;
    timerElement.classList.add("green-glow");
  } else if (diffDays < 31) {
    const weeks = Math.floor(diffDays / 7);
    result = `${weeks} week${weeks > 1 ? 's' : ''} ago`;
    timerElement.classList.add("orange-glow");
  } else {
    const months = Math.floor(diffDays / 30);
    result = `${months} month${months > 1 ? 's' : ''} ago`;
    timerElement.classList.add("red-glow");
  }

  timerElement.textContent = `Last updated: ${result}`;

  // ----------------------------
  // Popup logic
  // ----------------------------

document.querySelectorAll(".version-link").forEach(link => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const hostersRaw = link.getAttribute("data-hosters");
    const infoText = link.getAttribute("data-popup-info") || "";

    try {
      const hosters = JSON.parse(hostersRaw);
      hosterLinks.innerHTML = "";

      const popupContent = popupBox.querySelector('.popupContent');
      const oldDescription = popupContent.querySelector('.popupDescription');
      if (oldDescription) oldDescription.remove();

      if (infoText.trim() !== "") {
        const description = document.createElement('p');
        description.className = 'popupDescription';
        description.textContent = infoText;
        const header = popupContent.querySelector('h3');
        header.insertAdjacentElement('afterend', description);
      }

      hosters.forEach(h => {
        const a = document.createElement("a");
        a.href = h.url;
        a.target = "_blank";
        a.textContent = h.label;
        hosterLinks.appendChild(a);
      });

      popupBox.style.display = "flex";
    } catch (err) {
      console.error("Invalid hosters data:", hostersRaw);
    }
  });
});


  window.closePopup = function () {
    popupBox.style.display = "none";
  };
});
const toggleFree = document.getElementById("toggleFree");
const togglePaid = document.getElementById("togglePaid");
const sliderHighlight = document.getElementById("sliderHighlight");
const gameItems = document.querySelectorAll(".game-item");

function showGames(type = localStorage.getItem("selectedGameFilter") || "free") {
  gameItems.forEach(item => {
    const itemType = item.getAttribute("data-type");
    const itemPlatform = item.getAttribute("data-platform");
    const matchesType = itemType === type;
    const matchesPlatform = currentPlatform === "all" || itemPlatform === currentPlatform;

    item.style.display = (matchesType && matchesPlatform) ? "block" : "none";
  });

  localStorage.setItem("selectedGameFilter", type);
}


// Toggle click events
toggleFree.addEventListener("click", () => {
  sliderHighlight.style.transform = "translateX(0%)";
  toggleFree.classList.add("active");
  togglePaid.classList.remove("active");
  showGames("free");
});

togglePaid.addEventListener("click", () => {
  sliderHighlight.style.transform = "translateX(100%)";
  togglePaid.classList.add("active");
  toggleFree.classList.remove("active");
  showGames("paid");
});

const platformButtons = document.querySelectorAll(".platform-btn");
let currentPlatform = localStorage.getItem("selectedPlatform") || "all";

function filterByPlatform(platform) {
  currentPlatform = platform;
  localStorage.setItem("selectedPlatform", platform);
  const currentType = localStorage.getItem("selectedGameFilter") || "free";
  showGames(currentType); // ✅ this refreshes after platform change
}

platformButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".platform-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    filterByPlatform(btn.dataset.platform);
  });
});

// On page load — restore selection from localStorage or default to "free"
const savedFilter = localStorage.getItem("selectedGameFilter") || "free";
document.querySelectorAll(".platform-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    // Remove old active
    document.querySelectorAll(".platform-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");

    const platform = btn.dataset.platform;
    filterByPlatform(platform);
  });
});
if (savedFilter === "paid") {
  sliderHighlight.style.transform = "translateX(100%)";
  togglePaid.classList.add("active");
  toggleFree.classList.remove("active");
  showGames("paid");
} else {
  sliderHighlight.style.transform = "translateX(0%)";
  toggleFree.classList.add("active");
  togglePaid.classList.remove("active");
  showGames("free");
}

document.addEventListener("DOMContentLoaded", () => {
  const popupBox = document.getElementById("popupBox");
  const popupOverlay = document.getElementById("popupOverlay");
  const hosterLinks = document.getElementById("hosterLinks");
  const popupContent = popupBox.querySelector(".popupContent");

  // Funktion zum Schließen des Popups
  window.closePopup = function () {
    popupBox.style.display = "none";
  };

  // Klick auf Overlay schließt Popup
  popupOverlay.addEventListener("click", closePopup);

  // Event Listener für alle Links mit Klasse "version-link"
  document.querySelectorAll(".version-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      // Hosters und Info aus den data-Attributen holen
      const hostersRaw = link.getAttribute("data-hosters");
      const infoText = link.getAttribute("data-popup-info") || "";

      try {
        const hosters = JSON.parse(hostersRaw);
        hosterLinks.innerHTML = "";

        // Popup-Beschreibung entfernen, falls schon vorhanden
        const oldDescription = popupContent.querySelector('.popupDescription');
        if (oldDescription) oldDescription.remove();

        // Wenn Info vorhanden, als <p> hinzufügen
        if (infoText.trim() !== "") {
          const description = document.createElement('p');
          description.className = 'popupDescription';
          description.textContent = infoText;
          const header = popupContent.querySelector('h3');
          header.insertAdjacentElement('afterend', description);
        }

        // Links für Hosters anlegen
        hosters.forEach(h => {
          const a = document.createElement("a");
          a.href = h.url;
          a.target = "_blank";
          a.textContent = h.label;
          hosterLinks.appendChild(a);
        });

        // Popup anzeigen
        popupBox.style.display = "flex";

      } catch (err) {
        console.error("Invalid hosters data:", hostersRaw);
      }
    });
  });
});



