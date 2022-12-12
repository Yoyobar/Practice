// const word__game() = function(){
// }

// function word__game() {
// }

const word__game = () => {
    let myword = document.getElementById("myword").value
    let word = document.getElementById("word").innerText
    
    if (word[word.length-1]===myword[0]){
        document.getElementById("result").innerText = "정답!"
        document.getElementById("word").innerText = myword
        document.getElementById("myword").value = ""
    } 
    else {
        document.getElementById("result").innerText = "오답!"
    }
    
}

const lotto__game = function(){
    document.getElementById("lotNumber1").innerText=Math.floor(Math.random() *(45-1)+1)
    document.getElementById("lotNumber2").innerText=Math.floor(Math.random() *(45-1)+1)
    document.getElementById("lotNumber3").innerText=Math.floor(Math.random() *(45-1)+1)
    document.getElementById("lotNumber4").innerText=Math.floor(Math.random() *(45-1)+1)
    document.getElementById("lotNumber5").innerText=Math.floor(Math.random() *(45-1)+1)
    document.getElementById("lotNumber6").innerText=Math.floor(Math.random() *(45-1)+1)
}
