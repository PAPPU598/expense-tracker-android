let expenses = JSON.parse(localStorage.getItem("expenses")) || [];
const list = document.getElementById("expenseList");
const totalSpan = document.getElementById("total");

function addExpense() {
    const date = document.getElementById("date").value;
    const amount = Number(document.getElementById("amount").value);
    const category = document.getElementById("category").value;

    if (!date || !amount || !category) {
        alert("Please fill all fields");
        return;
    }

    expenses.push({ date, amount, category });
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

function displayExpenses() {
    list.innerHTML = "";
    let total = 0;

    expenses.forEach((e, index) => {
        total += e.amount;
        list.innerHTML += `
            <li>
                ${e.date} - ${e.category} - ₹${e.amount}
                <button onclick="deleteExpense(${index})">❌</button>
            </li>`;
    });

    totalSpan.innerText = total;
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    localStorage.setItem("expenses", JSON.stringify(expenses));
    displayExpenses();
}

// Dark Mode Toggle
document.getElementById("toggleMode").onclick = () => {
    document.body.classList.toggle("dark");
};

displayExpenses();
