const items = [
  { id: 1, name: "Air Force 10% хямдарлаа", category: "Гутал" },
  { id: 2, name: "Air Max 1+1 боллоо", category: "Гутал" },
  { id: 3, name: "5-сарын 1нд шинэ Collection гарна", category: "Цамц" },
  { id: 4, name: "4-сарын 14нд Хаврын Collection дуусна", category: "Цамц" },
];

function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function filterItems(category) {
  const tbody = document.getElementById("itemTableBody");
  tbody.innerHTML = "";

  const filtered = items.filter((item) => item.category === category);
  filtered.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
        <td>${index + 1}</td>
        <td>${item.name}</td>
        <td>
          <button class="action-btn edit-icon" onclick="editItem(this)"></button>
          <button class="action-btn delete-icon" onclick="deleteItem(this)"></button>
        </td>
      `;
    tbody.appendChild(row);
  });

  toggleDropdown(); // Dropdown-ыг хаана
}

function editItem(btn) {
  alert("Засах функц дараа нь нэмэгдэнэ.");
}

function deleteItem(btn) {
  const row = btn.closest("tr");
  row.remove();
}

// Анх эхэлж байхад бүх барааг харуулах
window.onload = () => {
  filterItems("Гутал");
};
