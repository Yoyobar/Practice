const random = () => {
    document.getElementById("number").innerText = String (Math.floor( Math.random() * 1000000)).padStart(6,"0")
}

function rand() {
    const token = String (Math.floor(Math.random() * 1000000)).padStart(6,"0");
    document.getElementById("number").innerText = token;
    document.getElementById("number").style.color = "#" + token
}