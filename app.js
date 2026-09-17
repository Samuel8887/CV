// This website uses plain JavaScript. There is no framework or build step.

// Show the current copyright year (not a claim that the CV was updated).
const footerYear = document.getElementById("footer-year");
footerYear.textContent = `© ${new Date().getFullYear()}`;

// Enable the small-screen menu. Without JavaScript, the links stay visible.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.getElementById("navigation");
const smallScreen = window.matchMedia("(max-width: 760px)");

function closeMenu() {
  navigation.classList.remove("is-open");
  menuButton.setAttribute("aria-expanded", "false");
}

function updateMenuLayout() {
  menuButton.hidden = !smallScreen.matches;
  navigation.dataset.collapsible = String(smallScreen.matches);
  closeMenu();
}

menuButton.addEventListener("click", () => {
  const isOpen = navigation.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navigation.classList.contains("is-open")) {
    closeMenu();
    menuButton.focus();
  }
});

smallScreen.addEventListener("change", updateMenuLayout);
updateMenuLayout();

// Highlight the navigation link for the section currently being read.
const navigationLinks = [...navigation.querySelectorAll('a[href^="#"]')];
const sections = navigationLinks.map((link) => document.querySelector(link.hash));

function updateActiveLink() {
  let activeSection = null;
  for (const section of sections) {
    if (section.getBoundingClientRect().top <= 160) activeSection = section;
  }
  for (const link of navigationLinks) {
    if (activeSection && link.hash === `#${activeSection.id}`) {
      link.setAttribute("aria-current", "location");
    } else {
      link.removeAttribute("aria-current");
    }
  }
}

let scrollScheduled = false;
window.addEventListener("scroll", () => {
  if (scrollScheduled) return;
  scrollScheduled = true;
  window.requestAnimationFrame(() => {
    updateActiveLink();
    scrollScheduled = false;
  });
}, { passive: true });
updateActiveLink();
