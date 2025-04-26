const data = [
  { ordernum: "#123", customer: "Visa", totalAmount: "100$" },
  { ordernum: "#124", customer: "Visa", totalAmount: "101$" },
  { ordernum: "#125", customer: "Master Card", totalAmount: "1000$" },
];

const tableBody = document.getElementById("itemTableBody");

function renderTable(data) {
  tableBody.innerHTML = "";

  data.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
          <td>${item.ordernum}</td>
          <td>${item.totalAmount}</td>
          <td>${item.customer}</td>
          <td>
            <button class="view-btn" data-index="${index}">Харах</button>
          </td>
        `;

    tableBody.appendChild(row);
  });

  const buttons = document.querySelectorAll(".view-btn");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const index = this.getAttribute("data-index");
      showModal(data[index]);
    });
  });
}

function showModal(item) {
  document.getElementById("modalOrderNum").textContent = item.ordernum;
  document.getElementById("modalCustomer").textContent = item.customer;
  document.getElementById("modalAmount").textContent = item.totalAmount;

  document.getElementById("detailModal").style.display = "flex";
}

function closeModal() {
  document.getElementById("detailModal").style.display = "none";
}

renderTable(data);
