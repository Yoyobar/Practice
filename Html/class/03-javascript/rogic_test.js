//연습
var test = 1;
function test () {
    console.log(test)
    var test = 2;
}
// undefined
test
// 1

let voo = 1;
function voo () {
    console.log(voo)
    let voo = 2;
}
// VM109:2 Uncaught SyntaxError: Identifier 'voo' has already been declared

test

//함수의 흐름은 선언 -> 초기화 -> 할당
//인터프리터가 변수와 함수의 메모리공간을 선언하기전에 미리할당하는걸 호이스팅이라하며, var, let, const모두
//실제로는 호이스팅대상이지만, 호이스팅시 undefined로 변수를 초기화하지않아 코드예외가 발생


//함수 선언식
//코드가 실행되기전에 미리 로드됨. 즉 var문과 유사하게 호이스팅이 발생한다.

console.log(Test1())
function Test1() { return 5;}

//함수 표현식
//코드가 실행되기전에 미리 로드되지않음, 즉 호이스팅이 발생하지 않음

console.log(Test2())
const Test2 = function number() {return 5;}
// VM224:1 Uncaught ReferenceError: letTest is not defined

//람다식
//마찬가지로 코드가 실행되기전에 미리 로드되지않음, 축약형 함수표현
console.log(Test3())
const Test3 = () => 5
// VM224:1 Uncaught ReferenceError: letTest is not defined
// 람다식은 화살표이후 {}를 이용하며 return을 길게 작성할 수 있으며, 아닌경우 바로 return할당 가능