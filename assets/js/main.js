// Simple script to toggle mobile menu later
console.log("GlobalStoxfx site loaded successfully!");


document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});
