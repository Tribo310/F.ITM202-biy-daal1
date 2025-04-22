// Жишээ өгөгдлүүд
const data = [
  {
    ordernum: "#123",
    customer: "Ж.Эрдэнэ",
    totalAmount: "100,000 MNT",
    status: "Төлөгдсөн",
    product: "Чихэвч",
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
        <td>${index + 1}</td>
        <td>${item.ordernum}</td>
        <td>${item.customer}</td>
        <td>${item.totalAmount}</td>
        <td>${item.status}</td>
        <td>${item.product}</td>
        <td><button onclick="editRow(${index})" style="padding: 5px 10px; background-color: #4CAF50; color: white; border: none; border-radius: 5px; cursor: pointer; font-size: 14px;">Засах</button></td>
      `;

    tableBody.appendChild(row);
  });
}

function editRow(index) {
  const item = data[index];
  const newCustomer = prompt("Үйлчлүүлэгчийн нэрийг шинэчлэх:", item.customer);
  const newAmount = prompt("Нийт дүнг шинэчлэх:", item.totalAmount);
  const newStatus = prompt("Төлвийн мэдээллийг шинэчлэх:", item.status);
  const newProduct = prompt("Бүтээгдэхүүнийг шинэчлэх:", item.product);

  if (newCustomer && newAmount && newStatus && newProduct) {
    data[index] = {
      customer: newCustomer,
      totalAmount: newAmount,
      status: newStatus,
      product: newProduct,
    };
    renderTable(data);
  }
}

renderTable(data);
