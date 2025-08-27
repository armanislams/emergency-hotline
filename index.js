// copy btn
const btns = document.getElementsByClassName("copy");
for (const btn of btns){
    btn.addEventListener("click", function() {
        document.getElementById("copy-count").innerText++;
        navigator.clipboard.writeText(this.parentElement.parentElement.querySelector("h3").innerText);
    });
}

// deduct coins
function deductCoins(amount) {
    const balanceElement = document.getElementById("coin-count");
    const currentBalance = parseInt(balanceElement.innerText);
    currentBalance -= amount;
    if (currentBalance < 0) {
        currentBalance = 0; // Prevent negative balance
        alert("Insufficient balance to make a call.");
    }
    balanceElement.innerText = currentBalance;
    return currentBalance;
}
// call btn
const callHistory = [];
const charge = 20;
const callBtns = document.getElementsByClassName("call-btn");

    for (const btn of callBtns) {
        btn.addEventListener("click", function () {
            const availableBalance = parseInt(document.getElementById("coin-count").innerText);
            // const currentBalance = availableBalance;
            if (availableBalance < charge) {
            alert("Insufficient balance to make a call.");
            return;
        }
        document.getElementById("coin-count").innerText = availableBalance - charge;
        alert(
            "Calling... " +
            this.parentElement.parentElement.querySelector("h2").innerText +
            " " +
            this.parentElement.parentElement.querySelector("h3").innerText
        );
        const data = {
        name: this.parentElement.parentElement.querySelector("h2").innerText,
        number: this.parentElement.parentElement.querySelector("h3").innerText,
        date: new Date().toLocaleTimeString(),
    }
    callHistory.push(data);
    history();
    });
}
// history section

function history (){
    const historyContainer = document.getElementById("history-cards");
    historyContainer.innerHTML = ' ';
    for (const call of callHistory) {
    const card = document.createElement("div");
    card.className = "history-card";
    card.innerHTML = `
        <div class = "flex justify-between items-center mb-10"><div><h2>${call.name}</h2>
        <h3>${call.number}</h3></div>
        <div><h3>${call.date}</h3></div></div>
    `;
    historyContainer.appendChild(card);
}
}
// clear btn
document.getElementById("clear-btn").addEventListener("click", function() {
    callHistory.length = 0;
    history();
});
// copy btn
document.getElementById("copy-btn").addEventListener("click", function() {
    const balanceElement = document.getElementById("coin-count");
    const currentBalance = parseInt(balanceElement.innerText);
    const newBalance = currentBalance + 100;
    balanceElement.innerText = newBalance;
    alert("100 coins added to your balance!");
});