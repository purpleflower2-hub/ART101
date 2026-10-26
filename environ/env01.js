function saveName () {
    let name = document.getElementById("playerName").value;
    localStorage.setItem("playerName",name) ;
    window.location.href="env.02.html";
}

let playerName = localStorage.getItem("playerName");
let welcome = document.getElementById("welcome");
if (welcome && playerName) {
    welcome.textContent = "Welcome " + playerName + ".";

}