setInterval(function(){
    if (time > 0){
        console.log(time)
        time = time-1
    }
},1000)
//ms초마다 반복



//시간지연 함수 ms초 후 진행
setTimeout(function(){
    console.log("Hello World 5s!")
},5000)



let time = 180
setInterval(function(){
    if(time >= 0) {
        const min = Math.floor(time/60)
        const sec = String(time % 60).padStart(2, "0")
        console.log(min + ":" + sec)
        time --
    }
},1000)