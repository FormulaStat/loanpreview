// 🌐 Mobile Menu Toggle
const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    navToggle.textContent = navLinks.classList.contains("active") ? "✖" : "☰";
  });
}

// ✅ Close menu on outside click (mobile UX improvement)
document.addEventListener("click", (e) => {
  if (!navLinks.contains(e.target) && !navToggle.contains(e.target)) {
    navLinks.classList.remove("active");
    navToggle.textContent = "☰";
  }
});

// 🌐 Sticky Navbar Scroll Effect
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// 🌐 Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      // Close mobile nav after click
      navLinks.classList.remove("active");
      navToggle.textContent = "☰";
    }
  });
});

// 🌐 Show/Hide Existing Loan Details
const existingLoanRadios = document.querySelectorAll('input[name="existingLoan"]');
const loanDetailsSection = document.getElementById("existing-loan-details");

if (existingLoanRadios) {
  existingLoanRadios.forEach(radio => {
    radio.addEventListener("change", () => {
      if (radio.value === "yes") {
        loanDetailsSection.style.display = "block";
      } else {
        loanDetailsSection.style.display = "none";
        // Clear inputs when hidden
        loanDetailsSection.querySelectorAll("input").forEach(input => input.value = "");
      }
    });
  });
}
