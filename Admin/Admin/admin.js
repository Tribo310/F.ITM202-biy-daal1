const items = [
  {
    id: 1,
    name: "Air Force",
    category: "Гутал",
    price: "100$",
    image: "../.././assets/image2.png",
  },
  {
    id: 2,
    name: "Air Max",
    category: "Гутал",
    price: "110$",
    image: "../.././assets/moojig1.png",
  },
  {
    id: 3,
    name: "Oversized T-Shirt",
    category: "Цамц",
    price: "120$",
    image: "../.././assets/moojig2.png",
  },
  {
    id: 4,
    name: "Nike Hoodie",
    category: "Цамц",
    price: "130$",
    image: "../.././assets/moojig3.png",
  },
];

function toggleDropdown() {
  const menu = document.getElementById("dropdown-menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function filterItems(category) {
  const tbody = document.getElementById("itemBody");
  tbody.innerHTML = "";

  const filtered =
    category === "all"
      ? items
      : items.filter((item) => item.category === category);

  filtered.forEach((item, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
            <td>${index + 1}</td>
            <td><img src="${item.image}" alt="${
      item.name
    }" class="item-image"></td>
            <td>${item.name}</td>
            <td>${item.price}</td>
            <td>
              <button class="edit-btn" onclick="editItem(${
                item.id
              })">Edit</button>
              <button class="delete-btn" onclick="deleteItem(${
                item.id
              })">Delete</button>
            </td>
          `;
    tbody.appendChild(row);
  });
}

// Modal functionality
const modal = document.getElementById("editModal");
const span = document.getElementsByClassName("close")[0];
const cancelBtn = document.querySelector(".cancel-btn");
const editForm = document.getElementById("editForm");
const imagePreview = document.getElementById("imagePreview");
const editImageInput = document.getElementById("editImage");

function editItem(id) {
  const item = items.find((item) => item.id === id);
  if (item) {
    document.getElementById("editItemId").value = item.id;
    document.getElementById("editName").value = item.name;
    document.getElementById("editCategory").value = item.category;
    document.getElementById("editPrice").value = item.price;
    document.getElementById("editImage").value = item.image;
    imagePreview.src = item.image;
    modal.style.display = "block";
  }
}

// Close modal when clicking X
span.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking cancel button
cancelBtn.onclick = function () {
  modal.style.display = "none";
};

// Close modal when clicking outside
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Update image preview when URL changes
editImageInput.addEventListener("input", function () {
  imagePreview.src = this.value;
});

// Handle form submission
editForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const id = parseInt(document.getElementById("editItemId").value);
  const name = document.getElementById("editName").value;
  const category = document.getElementById("editCategory").value;
  const price = document.getElementById("editPrice").value;
  const image = document.getElementById("editImage").value;

  const itemIndex = items.findIndex((item) => item.id === id);
  if (itemIndex !== -1) {
    items[itemIndex] = {
      ...items[itemIndex],
      name,
      category,
      price,
      image: image || items[itemIndex].image,
    };

    filterItems("all"); // Refresh the list
    modal.style.display = "none";
  }
});

function deleteItem(id) {
  if (confirm("Энэ барааг устгахдаа итгэлтэй байна уу?")) {
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
      items.splice(index, 1);
      filterItems("all"); // Refresh the list
    }
  }
}

// Close dropdown when clicking outside
document.addEventListener("click", function (event) {
  const dropdown = document.querySelector(".dropdown");
  if (!dropdown.contains(event.target)) {
    document.getElementById("dropdown-menu").style.display = "none";
  }
});

// Анх эхэлж байхад бүх барааг харуулах
window.onload = () => {
  filterItems("all");
};
