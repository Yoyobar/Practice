function greeting() {
    
    if (document.getElementById("target").innerText == "Hello"){
        document.getElementById("input").value = "World"
        document.getElementById("target").innerText = "Hello!"   
    } else if (document.getElementById("input").value = "World"){
        document.getElementById("input").value = "Hello :)"
        document.getElementById("target").innerText = "Hello"
    }
}

//버튼을 누를경우 hello -> World
//빈 input 상자에 :)