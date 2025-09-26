document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("personalLoanForm");
  const debts = document.getElementById("debts");
  const debtDetails = document.getElementById("debtDetails");
  const formResult = document.getElementById("formResult");

  // Show/hide debt details
  debts.addEventListener("change", () => {
    debtDetails.style.display = debts.value === "yes" ? "block" : "none";
  });

  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Fake loader simulation
    formResult.className = "";
    formResult.textContent = "Submitting application... please wait.";
    formResult.classList.remove("hidden");

    setTimeout(() => {
      formResult.textContent = "✅ Your Personal Loan application has been submitted for review!";
      formResult.classList.add("success");
    }, 2000);
  });
});


document.getElementById("nav-toggle").addEventListener("click", () => {
  document.getElementById("nav-links").classList.toggle("active");
});
