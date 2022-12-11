//데이터 타입, 연산자 
1+1
// 2
1+"만원"
// '1만원'
1+"1"
// '11'
1-"1"
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123 // 느슨 연산, type이 달라도 값이 같으면 True
// true
"123" === 123  //엄격 연산, 값이 같아도 type이 다르면 false
// false
true && true
// true
true && false
// false
true || true
// true
true || false
// true
!false
// true
!true
// false

//조건문 1.

if(1+1 === 2) {
    console.log("정답")
} else {
    console.log("오답")
}
// VM643:2 정답
undefined
if(1+0 === 2) {
    console.log("정답")
} else {
    console.log("오답")
}
// VM666:4 오답
undefined
if(!true) {
    console.log("정답")
} else {
    console.log("오답")
}
// VM723:4 오답
undefined
if(0) {
    console.log("정답")
} else {
    console.log("오답")
}
// VM743:4 오답
undefined
if(1) {
    console.log("정답")
} else {
    console.log("오답")
}
// VM754:2 정답

//조건문 연습 2
const profile = {
    name : "철수",
    age : 20,
    school: "다람쥐초등학교"
}

if (profile.age >= 20){
    console.log("성인입니다")
} else if (profile.age >= 8){
    console.log("학생입니다")
} else if (profile.age > 0){
    console.log("어린이입니다")
} else {
    console.log("잘못 입력하셨습니다.")
}
// VM2719:2 성인입니다
// 코드 최적화 과정을 생각해볼 것

