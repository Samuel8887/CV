const footerYear = document.getElementById("footer-year");

if (footerYear) {
  footerYear.textContent = `Updated ${new Date().getFullYear()}`;
}
