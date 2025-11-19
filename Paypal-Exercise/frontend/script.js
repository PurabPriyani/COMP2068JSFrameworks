const API = "http://localhost:3000/api/transactions";

async function loadTransactions() {
  const res = await fetch(API);
  const tx = await res.json();

  document.getElementById("list").innerHTML = `
    <ul>
      ${tx.map(t => `
        <li id="${t._id}">
          <span class="text">${t.payer} → ${t.payee} | $${t.amount} | Note: ${t.note}</span>

          <button onclick="startEdit('${t._id}', '${t.payer}', '${t.payee}', ${t.amount}, '${t.note}')">Edit</button>
          <button onclick="deleteTransaction('${t._id}')">Delete</button>
        </li>
      `).join("")}
    </ul>
  `;
}

async function addTransaction() {
  const data = {
    payer: document.getElementById("payer").value,
    payee: document.getElementById("payee").value,
    amount: Number(document.getElementById("amount").value),
    note: document.getElementById("note").value
  };

  await fetch(API, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadTransactions();
}

function startEdit(id, payer, payee, amount, note) {
  const li = document.getElementById(id);

  li.innerHTML = `
    <input id="editPayer" value="${payer}">
    <input id="editPayee" value="${payee}">
    <input id="editAmount" type="number" value="${amount}">
    <input id="editNote" value="${note}">
    <button onclick="saveEdit('${id}')">Save</button>
    <button onclick="loadTransactions()">Cancel</button>
  `;
}

async function saveEdit(id) {
  const data = {
    payer: document.getElementById("editPayer").value,
    payee: document.getElementById("editPayee").value,
    amount: Number(document.getElementById("editAmount").value),
    note: document.getElementById("editNote").value
  };

  await fetch(`${API}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  });

  loadTransactions();
}

async function deleteTransaction(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  loadTransactions();
}

loadTransactions();