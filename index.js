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
