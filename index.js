// copy btn
const btns = document.getElementsByClassName("copy");
for (const btn of btns){
    btn.addEventListener("click", function() {
        document.getElementById("copy-count").innerText++;
        navigator.clipboard.writeText(this.parentElement.parentElement.querySelector("h3").innerText);
    });
}