// Жишээ өгөгдлүүд
const data = [
  {
    ordernum: "#123",
    customer: "Visa",
    totalAmount: "100,000 MNT",
  },
  {
    ordernum: "#124",
    customer: "Б.Амараа",
    totalAmount: "50,000 MNT",
    status: "Төлөгдсөн",
    product: "Гар утас",
  },
  {
    ordernum: "#125",
    customer: "С.Цоодол",
    totalAmount: "150,000 MNT",
    status: "Төлөгдсөн",
    product: "Утас",
  },
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
        <td><button ыы style="padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">Харах</button></td>
      `;

    tableBody.appendChild(row);
  });
}

renderTable(data);
