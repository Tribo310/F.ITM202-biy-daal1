document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  // Get input values
  const username = document.getElementById("login_name").value;
  const password = document.getElementById("login_password").value;

  // Credentials
  const ADMIN_USERNAME = "admin123";
  const ADMIN_PASSWORD = "admin123";

  // Validation
  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Successful login - redirect to admin page
    window.location.href = "../Admin/admin.html";
  } else {
    // Show error message
    alert("Invalid username or password. Please try again.");
    // Clear password field
    document.getElementById("login_password").value = "";
  }
});
