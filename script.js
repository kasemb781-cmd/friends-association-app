let data = JSON.parse(localStorage.getItem("ledger")) || [];

function saveData() {
  let name = document.getElementById("name").value;
  let amount = Number(document.getElementById("amount").value);
  let penalty = Number(document.getElementById("penalty").value);

  let penaltyAmount = amount * penalty / 100;
  let total = amount + penaltyAmount;

  data.push({ name, amount, total });

  localStorage.setItem("ledger", JSON.stringify(data));
  showData();
}

function showData() {
  let list = document.getElementById("records");
  list.innerHTML = "";

  data.forEach(d => {
    list.innerHTML += `<li>${d.name} - ${d.total}৳</li>`;
  });
}

showData();
