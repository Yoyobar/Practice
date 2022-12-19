const main__hide = () => {
    for(let i =0; i<5; i++){
    document.querySelectorAll(".wrapper__case")[i].style.display = "none"
    }
}
const main__show = (page) => {
    for(let i =0; i < document.querySelectorAll(".bot__sub__box").length; i++){
        document.querySelectorAll(".bot__sub__box")[i].classList.remove("pop");
    }
    document.querySelectorAll(".wrapper__case")[page].style.display = "block";
    document.querySelectorAll(".bot__sub__box")[page].classList.add("pop");
    
}
document.querySelector(".main__bot__st").addEventListener("click", function(){
    main__show(0); 
    // 0 메인 | 1 스톱워치 | 2 타이머 | 3 투두리스트 | 4 옵션
})
document.querySelector(".main__bot__tm").addEventListener("click", function(){
    main__show(1);
    // 0 메인 | 1 스톱워치 | 2 타이머 | 3 투두리스트 | 4 옵션
})
document.querySelector(".main__bot__todo").addEventListener("click", function(){
    main__show(2); 
    // 0 메인 | 1 스톱워치 | 2 타이머 | 3 투두리스트 | 4 옵션
})
document.querySelector(".main__bot__set").addEventListener("click", function(){
    main__show(3);
    // 0 메인 | 1 스톱워치 | 2 타이머 | 3 투두리스트 | 4 옵션
})