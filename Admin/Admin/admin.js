const items = [
  { id: 1, name: "Air Force", category: "Гутал", price: "100$" },
  { id: 2, name: "Air Max", category: "Гутал", price: "110$" },
  { id: 3, name: "Oversized T-Shirt", category: "Цамц", price: "120$" },
  { id: 4, name: "Nike Hoodie", category: "Цамц", price: "130$" },
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
        <td>${item.price}</td>
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
