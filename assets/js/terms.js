// Simple JS — highlight section when clicked (if you want to expand sections)
document.addEventListener("DOMContentLoaded", function() {
  console.log("Terms page loaded");
  // For potential future dynamic behavior
});

document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});
