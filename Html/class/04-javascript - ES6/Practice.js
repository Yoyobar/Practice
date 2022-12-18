/*
let name = "kim"
// 재선언 불가

const ng = "kim"
// 재선언, 재할당 불가

var eg = "kim"
// 재선언, 재할당 가능. function scope
*/




// 첫 예금액이 5만원 미만이면 이율이 연 15퍼센트,
// 첫 예금액이 5만원 이상이면 이율이 연 20퍼센트라고 합니다.
// 그래서 민준이는
// (1) 변수에 예금액을 넣으면
// (2) 2년 후의 총 예금액을 자동으로 콘솔창에 출력해주는 기능을 자바스크립트로 만들려고하는데
// 어떻게 코드를 짜면 될까요?

const money = (value) => {
    let variable;
    if (value >= 50000) {
        variable = 0.20;
    }  else variable = 0.15;
    value = value + (value * variable); 
    console.log(value);   
}

// VM6359:5 84000

// 방금 마신 커피의 3분의 2만큼 총 2번 리필해주는 카페가 있습니다.
// 예를 들면 처음 커피를 90ml 주문하면 첫 리필은 60ml를 해주며, 그 다음 리필은 40ml를 해주는 카페입니다.
// 그럼 처음 주문한 커피 양에 따라서 최대한 마실 수 있는 커피를 콘솔창에 계산해주는 코드를 작성해봅시다.

const coffee = (ml) => {
    let value = (ml / 3 + ml / 3)
    let value2 = (value / 3 + value / 3)
    console.log("일반" + Math.floor((ml + value + value2)))
}


// 자스는 제곱이있구나!
console.log(2 ** 4);

// 커피를 무한으로 제공해줄 경우
const coffee2 = (ml) => {
    let result = 0;
    for (let i = ml; i>1; Math.round(i *= 0.6666666)){
        result += i;
        console.log("무한"+ Math.floor(result));
    }
}
coffee(100);
coffee2(100);


// 들어오는 값을 통해 검출해내는 알고리즘
// let attempt = 0;
// if (document.getElementById("send-answer").addEventListener("click", function(){
//     if (document.getElementById("answer").value == 1335){
//         alert("성공")
//     } else if (attempt >= 3){
//         alert("멍청아")
//     } else attempt++;
// }));

/a/.test('a')
// true
/a/.test('abcde')
// true
/[a-z]/.test('14145125l')
// true
/[A-Z]/.test('14145125Z')
// true
/[ㄱ-ㅎ가-힣]/.test('14145125Zㅂ')
// true
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('14145125Zㅂ')
// true
/[ㄱ-ㅎ가-힣ㅏ-ㅣ]/.test('14145125Zㅏ')
// true
/\S/.test("%$")
// true
/\S+@\S+\.\S+/.test("barwait@naver.com")
// ^시작 $끝 | or & and + 몇번확인하는지

//.toFixed 소수를 반올림, 단 문자열로 변경
//parseFloat() 문자열 -> 숫자열

/*
Q1. 함수에 분과 초를 차례로 파라미터로 입력하면 ms단위로 바꿔서 뱉어주는 함수를 만들어봅시다.
(1초 == 1000ms 입니다)
*/

const ms = (MIN, SEC) => {
    let count = (MIN*60+SEC) * 1000;
    if(MIN > 0){
        console.log(`${MIN}분 : ${SEC}초 == ${count}ms 입니다.`)
    } else console.log(`${SEC}초 == ${count}ms 입니다.`)
}
/*
Q2. 가격을 파라미터로 입력하면 10% 할인가를 뱉는 함수를 만들어봅시다.
근데 첫 구매여부도 true/false로 둘째파라미터에 입력해서 첫 구매가 맞을 경우 추가로 1.5 달러도 할인해줘야합니다. 
*/
const cost = (parameter, first) => {
    if(first === true) {
        return parameter * 0.9 - 1.5
    } else return parameter * 0.9
}
