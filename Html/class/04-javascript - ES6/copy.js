
// for (let i = 0; i < $(".tab-button").length; i++){
//     $(".tab-button").eq(i).on("click", function(){
//         tab(i);
//     });
// }

$(".list").click(function(e){
    tab(parseInt(e.target.dataset.id))
    // 숨겨져있는 값을 불러옴 
}) 
const tab = (parameter) => {
        $(".tab-button").removeClass("orange")
        $(".tab-content").removeClass("show")
        $(".tab-button").eq(parameter).addClass("orange")
        $(".tab-content").eq(parameter).addClass("show")
}

// $(".tab-button").eq(0).on("click", function(){
//     $(".tab-button").removeClass("orange")
//     $(".tab-content").removeClass("show")
//     $(".tab-button").eq(0).addClass("orange")
//     $(".tab-content").eq(0).addClass("show")
    
// });
// $(".tab-button").eq(1).on("click", function(){
//     $(".tab-button").removeClass("orange")
//     $(".tab-content").removeClass("show")
//     $(".tab-button").eq(1).addClass("orange")
//     $(".tab-content").eq(1).addClass("show")
// });
// $(".tab-button").eq(2).on("click", function(){
//     $(".tab-button").removeClass("orange")
//     $(".tab-content").removeClass("show")
//     $(".tab-button").eq(2).addClass("orange")
//     $(".tab-content").eq(2).addClass("show")
// });