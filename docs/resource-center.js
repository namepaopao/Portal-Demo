// --- Resource Center Logic ---

const state = {
  currentLang: localStorage.getItem("lamipak-lang") || "zh",
  currentArticleId: null,
};

// Open Article Modal
function openArticle(articleId) {
  const modal = document.getElementById("articleModal");
  const modalContent = document.getElementById("modalContent");
  const articleBody = document.getElementById("articleBody");

  state.currentArticleId = articleId;

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
            ${getArticleCtaHtml()}
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
    state.currentArticleId = null;
  }, 300);
}

// Close on backdrop click
document.getElementById("articleModal").addEventListener("click", (e) => {
  if (e.target === document.getElementById("articleModal")) {
    closeArticle();
  }
});

// Sync language state with global toggle
function syncLanguage(newLang) {
  state.currentLang = newLang || localStorage.getItem("lamipak-lang") || "zh";

  // Re-render open article if exists
  if (state.currentArticleId) {
    const articleBody = document.getElementById("articleBody");
    const data = window.articleData[state.currentLang][state.currentArticleId];
    if (data) {
      articleBody.innerHTML = `
            <div class="mb-8">
                <span class="text-lemei-500 font-bold uppercase tracking-widest text-sm">Feature Article</span>
                <h2 class="text-3xl lg:text-5xl font-extrabold mt-2 dark:text-white">${data.title}</h2>
            </div>
            <div class="article-rich-text text-slate-600 dark:text-slate-300">
                ${data.content}
            </div>
            ${getArticleCtaHtml()}
        `;
    }
  }
}

// Global listener for language change
window.addEventListener("languageChanged", (e) => {
  syncLanguage(e.detail.lang);
});

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

// Helper to get CTA buttons HTML
function getArticleCtaHtml() {
  const lang = state.currentLang;
  const dict = window.translations ? window.translations[lang] : {};
  const traceLabel =
    dict.kb_cta_trace ||
    (lang === "zh" ? "立即体验一包一码" : "Try Smart Trace");
  const customLabel =
    dict.kb_cta_custom || (lang === "zh" ? "开启定制方案" : "Start Solution");

  return `
    <div class="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="smart-trace.html" class="flex items-center justify-between p-6 rounded-2xl bg-lemei-600 text-white font-bold hover:bg-lemei-700 transition shadow-lg group">
                <span>${traceLabel}</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
            <a href="customization-request.html" class="flex items-center justify-between p-6 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white font-bold hover:bg-slate-800 dark:hover:bg-slate-700 transition shadow-lg group">
                <span>${customLabel}</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </a>
        </div>
    </div>
  `;
}

// Expose to global for button clicks
window.openArticle = openArticle;
window.closeArticle = closeArticle;
