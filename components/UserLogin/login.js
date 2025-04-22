document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form submission

  const username = document.getElementById("login_name").value;
  const password = document.getElementById("login_password").value;

  const USERNAME = "user123@gmail.com";
  const PASSWORD = "user123";

  if (username === USERNAME && password === PASSWORD) {
    alert("Нэвтэрлээ");
    window.location.href = "../nuur/nuur.html";
  } else {
    alert("Имэйл эсвэл нууц үг буруу байна. Дахин оролдоно уу.");
    document.getElementById("login_password").value = "";
  }
});
