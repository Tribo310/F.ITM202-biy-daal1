const searchBtn = document.getElementById("search-btn");
const searchOverlay = document.getElementById("searchOverlay");
const closeSearch = document.getElementById("closeSearch");

// Click хийхэд хайлтын дэлгэц гарч ирнэ
searchBtn.addEventListener("click", () => {
  searchOverlay.classList.add("active");
});

// Close товч дээр дарахад хайлтын дэлгэц хаагдана
closeSearch.addEventListener("click", () => {
  searchOverlay.classList.remove("active");
});

// ESC товч дарахад хаагдах функц
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    searchOverlay.classList.remove("active");
  }
});
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function showDropdown(type) {
  const dropdown = document.getElementById('mainDropdown');

  // Доторх агуулгыг шинэчлэх бол энд бичиж болно:
  if (type === 'new') {
    dropdown.innerHTML = '<h4>New & Featured</h4><p>New releases, etc.</p>';
  } else if (type === 'men') {
    dropdown.innerHTML = '<h4>Men</h4><p>All men\'s products.</p>';
  }
  // бусадыг адилхан...

  // Харуулах
  dropdown.style.display = 'block';
}

// Хуудасны өөр газар дарахад нуух (optional)
document.addEventListener('click', function (e) {
  const dropdown = document.getElementById('mainDropdown');
  if (!e.target.closest('.nav-bar') && !e.target.closest('#mainDropdown')) {
    dropdown.style.display = 'none';
  }
});
