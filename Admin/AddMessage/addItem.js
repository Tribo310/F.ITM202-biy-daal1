document.getElementById("addItemForm").addEventListener("submit", function (e) {
  e.preventDefault();
  // Энд өгөгдөл хадгалах код бичиж болно
  alert("Бараа амжилттай нэмэгдлээ!");
  window.location.href = "../Admin/admin.html"; // Буцаад admin dashboard руу шилжүүлнэ
});
