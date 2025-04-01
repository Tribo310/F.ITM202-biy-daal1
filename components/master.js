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
