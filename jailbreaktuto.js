// JS logic for tutorial popup
const tutorialPopup = document.getElementById("tutorialPopup");
const tutorialOverlay = document.getElementById("tutorialOverlay");
const tutorialButton = document.getElementById("tutorialButton");
const tutorialVideo = document.getElementById("tutorialVideo");

// Open popup
if (tutorialButton) {
  tutorialButton.addEventListener("click", () => {
    tutorialPopup.style.display = "flex";
  });
}

// Close popup + stop video
window.closeTutorialPopup = function () {
  tutorialPopup.style.display = "none";
  if (tutorialVideo) {
    tutorialVideo.src = tutorialVideo.src; // reset video playback
  }
};

// Click outside content to close
if (tutorialOverlay) {
  tutorialOverlay.addEventListener("click", () => {
    closeTutorialPopup();
  });
}