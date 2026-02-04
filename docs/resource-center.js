// --- Resource Center Logic ---

const state = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
};

// Open Article Modal
function openArticle(articleId) {
  const modal = document.getElementById("articleModal");
  const modalContent = document.getElementById("modalContent");
  const articleBody = document.getElementById("articleBody");

  // Get content from articleData (defined in articles-data.js)
  const data = window.articleData[state.currentLang][articleId];

  if (data) {
    articleBody.innerHTML = `
            <div class="mb-8">
                <span class="text-lemei-500 font-bold uppercase tracking-widest text-sm">Feature Article</span>
                <h2 class="text-3xl lg:text-5xl font-extrabold mt-2 dark:text-white">${data.title}</h2>
            </div>
            <div class="article-rich-text text-slate-600 dark:text-slate-300">
                ${data.content}
            </div>
        `;

    // Show Modal with Animation
    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // Prevent scrolling

    // Trigger reflow for animation
    setTimeout(() => {
      modalContent.classList.remove("scale-95", "opacity-0");
      modalContent.classList.add("scale-100", "opacity-100");
    }, 10);
  }
}

// Close Article Modal
function closeArticle() {
  const modal = document.getElementById("articleModal");
  const modalContent = document.getElementById("modalContent");

  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
    document.body.style.overflow = ""; // Restore scrolling
  }, 300);
}

// Close on backdrop click
document.getElementById("articleModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("articleModal")) {
    closeArticle();
  }
});

// Sync language state with global toggle
function syncLanguage() {
  state.currentLang = localStorage.getItem("lamipak-lang") || "zh";
  // Re-render if modal is open (optional, but good for UX)
}

document.addEventListener("DOMContentLoaded", () => {
  // Fade in effect for sections
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

  // Listen for language changes if using a custom event or just check regularly
  // In this project, app.js handles the toggle, so we just need to ensure our state is updated.
});

// Expose to global for button clicks
window.openArticle = openArticle;
window.closeArticle = closeArticle;
