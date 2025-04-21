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
document.addEventListener("DOMContentLoaded", () => {
  const sizeButtons = document.querySelectorAll(".sizes button");

  sizeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      // Эхлээд бүх товчнуудаас active-ийг арилгана
      sizeButtons.forEach((b) => b.classList.remove("active"));

      // Дарагдсан товчид active класс өгнө
      btn.classList.add("active");
    });
  });
});
