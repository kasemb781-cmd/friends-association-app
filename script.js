const API = "https://sheetdb.io/api/v1/b8296i7fqbsct";

async function saveData() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);
  let penalty = Number(document.getElementById("penalty").value);

  let penaltyAmount = amount * penalty / 100;
  let total = amount + penaltyAmount;

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      data: [{ name, amount, penalty, penaltyAmount, total }]
    })
  });

  loadData();
}

async function loadData() {
  let res = await fetch(API);
  let data = await res.json();

  let list = document.getElementById("records");
  list.innerHTML = "";

  data.forEach(item => {
    list.innerHTML += `<li>${item.name} - ${item.total}৳</li>`;
  });
}

loadData();
