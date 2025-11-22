// ===== AOS INIT =====
AOS.init({
  duration: 700,
  easing: "ease-out-cubic",
  once: true,
  offset: 80,
});

// ===== YEAR IN FOOTER =====
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ===== THEME TOGGLE (DARK / LIGHT) =====
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

const THEME_KEY = "portfolio-theme";

// Load saved theme
const savedTheme = localStorage.getItem(THEME_KEY);
if (savedTheme === "dark") {
  body.classList.add("dark");
  if (toggleBtn) toggleBtn.textContent = "☀️";
}

// Update button icon
function updateToggleIcon() {
  if (!toggleBtn) return;
  if (body.classList.contains("dark")) {
    toggleBtn.textContent = "☀️"; // light icon
  } else {
    toggleBtn.textContent = "🌙"; // dark icon
  }
}

updateToggleIcon();

if (toggleBtn) {
  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    const newTheme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem(THEME_KEY, newTheme);
    updateToggleIcon();
  });
}

// ===== OPTIONAL: SOFT SCROLL FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const targetId = link.getAttribute("href");
    if (!targetId || targetId === "#") return;

    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});
