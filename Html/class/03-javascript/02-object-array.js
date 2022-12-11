const fruits = [
    {number: 1, title: "레드향"},
    {number: 2, title: "샤인머스켓"},
    {number: 3, title: "산청딸기"},
    {number: 4, title: "한라봉"},
    {number: 5, title: "사과"},
    {number: 6, title: "애플망고"},
    {number: 7, title: "딸기"},
    {number: 8, title: "천혜향"},
    {number: 9, title: "과일선물세트"},
    {number: 10, title: "귤"},
]
// undefined
for (let i = 0; i < fruits.length; i++){
    console.log(fruits[i].number + " " + fruits[i].title)
}
// VM5487:2 1 레드향
// VM5487:2 2 샤인머스켓
// VM5487:2 3 산청딸기
// VM5487:2 4 한라봉
// VM5487:2 5 사과
// VM5487:2 6 애플망고
// VM5487:2 7 딸기
// VM5487:2 8 천혜향
// VM5487:2 9 과일선물세트
// VM5487:2 10 귤
// undefined

for (let i = 0; i < fruits.length; i++){
    console.log(`${fruits[i].number} ${fruits[i].title}`)
}
// VM5491:2 1 레드향
// VM5491:2 2 샤인머스켓
// VM5491:2 3 산청딸기
// VM5491:2 4 한라봉
// VM5491:2 5 사과
// VM5491:2 6 애플망고
// VM5491:2 7 딸기
// VM5491:2 8 천혜향
// VM5491:2 9 과일선물세트
// VM5491:2 10 귤
// 백틱, 문자열을 그냥 작성할 수 있다, 단 변수는 반드시 $ {}를 사용해야 한다.


for (let i = 0; i < fruits.length; i++){
    console.log(`과일차트 ${fruits[i].number} 위는 ${fruits[i].title} 입니다.`)
    console.log("과일차트 " + fruits[i].number +" 위는 "+ fruits[i].title +" 입니다.")
}
// VM5495:2 과일차트 1 위는 레드향 입니다.
// VM5495:2 과일차트 2 위는 샤인머스켓 입니다.
// VM5495:2 과일차트 3 위는 산청딸기 입니다.
// VM5495:2 과일차트 4 위는 한라봉 입니다.
// VM5495:2 과일차트 5 위는 사과 입니다.
// VM5495:2 과일차트 6 위는 애플망고 입니다.
// VM5495:2 과일차트 7 위는 딸기 입니다.
// VM5495:2 과일차트 8 위는 천혜향 입니다.
// VM5495:2 과일차트 9 위는 과일선물세트 입니다.
// VM5495:2 과일차트 10 위는 귤 입니다.
// 백틱, 문자열을 그냥 작성할 수 있다, 단 변수는 반드시 $ {}를 사용해야 한다.