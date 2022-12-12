const rand = () => {
    document.getElementById("number").innerText = String (Math.floor( Math.random() * 1000000)).padStart(6,"0")


let time = 180
setInterval(function(){
    if(time >= 0) {
        const min = Math.floor(time/60)
        const sec = String(time % 60).padStart(2, "0")
        document.getElementById("timer_Min").innerText = min
        document.getElementById("timer_Sec").innerText = sec
        time --
    } else {
        document.getElementById("number").innerText = "시간초과"
        document.getElementById("number").style.color = red;
        document.getElementById("button").disabled = true;
    }
},100)}