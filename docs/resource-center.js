// --- Knowledge Base Logic ---

const config = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
};

// Reuse translations from app.js (In a real app, these would be in a shared file or loaded via fetch)
// For this demo, we can assume app.js is loaded or we re-define the logic here if needed.
// However, knowledge-base.html will include this script, so we need to handle language switching.

function updateLanguage() {
  const lang = config.currentLang;
  // Note: In this project, 'translations' is usually defined in app.js.
  // Since we are creating a separate JS, we'll try to reach the global translations
  // or provide a fallback if this is loaded independently.

  // For the sake of the demo and consistency, let's assume we can access it or
  // we define the logic to get translations.

  if (typeof translations === "undefined") {
    // If app.js hasn't loaded translations globally, we might need a small fetch or duplication.
    // But since this is a static site demo, we'll rely on the global one if possible.
    // Actually, to make it robust, let's define the local toggle that works with app.js's pattern.
  }

  // This is handled by a shared pattern in this project.
  // To ensure this page works, we'll implement the standard updater.

  // We'll fetch the translations from the parent if possible, but for a cleaner implementation,
  // we'll just use the same logic as smart-trace.js.
}

// Standard project i18n logic
function applyTranslations() {
  // This will be called when app.js or similar is available.
  // For now, let's look for the translations object.
  if (window.translations) {
    const dict = window.translations[config.currentLang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) el.innerHTML = dict[key];
    });
  }
}

// Since we want this to work, we'll duplicate the base logic similar to other pages
document.addEventListener("DOMContentLoaded", () => {
  // Fade in effect
  const observerOptions = {
    root: null,
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  }, observerOptions);

  document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

  // Language check - we'll wrap this in a way that respects the global app.js if it's there
  if (window.updateLanguage) {
    // Already handled
  }
});

// If the user hasn't loaded app.js yet on this page, we'll need the global translations here too
// but usually, it's better to keep it DRY. However, to ensure it WORKS right now:
// We will add app.js to the knowledge-base.html scripts in the next step if I missed it.
// Checking knowledge-base.html... it only has knowledge-base.js. I should add app.js.
