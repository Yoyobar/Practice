String (Math.floor( Math.random() * 1000000))
// '302966'
String (Math.floor( Math.random() * 1000000))
// '39694'
String (Math.floor( Math.random() * 1000000)).padStart(6,"0")
// '049186'
String (Math.floor( Math.random() * 1000000)).padStart(6,"0")
// '121220'

let result = String (Math.floor( Math.random() * 1000000)).padStart(6,"0")

// undefined
result
// '736595'
result
// '736595'
result
// '736595'

/*
랜덤한 숫자를 만들어주는 수학 객체다. 예제를 보면 버림이 발생해서 앞자리 0이 소멸한 것
.padstart로 해결할 수 있다. 6,"0"은, 6자리 숫자가 되지못할경우, 앞에서부터 "0"을 채워주라는 코드다.

let result에 담을 경우 똑같은 숫자가 계속 반복되는데, 이것에 대해서는 다음에 알아보자.
*/