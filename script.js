// Modal elements
const modal = document.getElementById("authModal");
const loginBtn = document.querySelector("nav .btn"); // Navbar Login button
const closeBtn = document.querySelector(".close");
const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const loginToggle = document.getElementById("loginToggle");
const registerToggle = document.getElementById("registerToggle");

// Open modal
loginBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  showLogin();
});

// Close modal
closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

// Close if clicked outside modal
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

// Toggle between Login/Register
loginToggle.addEventListener("click", showLogin);
registerToggle.addEventListener("click", showRegister);

function showLogin() {
  loginForm.classList.add("active");
  registerForm.classList.remove("active");
  loginToggle.classList.add("active");
  registerToggle.classList.remove("active");
}

function showRegister() {
  loginForm.classList.remove("active");
  registerForm.classList.add("active");
  loginToggle.classList.remove("active");
  registerToggle.classList.add("active");
}
