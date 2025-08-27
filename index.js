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