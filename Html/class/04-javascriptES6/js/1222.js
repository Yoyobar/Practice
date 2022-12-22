/* eslint-disable no-use-before-define */
// 사용자가 100을 초과하는 숫자를 입력하거나 취소 버튼을 누른 경우, 혹은 아무것도 입력하지 않고 확인 버튼을 누른 경우엔 더는 프롬프트 창을 띄워주지 않아도 됩니다.

// 사용자가 오직 숫자만 입력한다고 가정하고 답안을 작성하도록 해봅시다. 숫자가 아닌 값이 입력되는 예외 상황은 처리하지 않아도 됩니다.

while (true) {
	let number = +prompt('100 초과의 숫자를 입력하세요', '');
	if (number == '' || number == null) break;
	if (number < 101) continue;
	break;
}

//
let num;

do {
	num = prompt('100을 초과하는 숫자를 입력해주세요.', 0);
} while (num <= 100 && num);
// do... while로 조건 만족하는 탈출로 제작

const prime = (value) => {
	for (let i = 2; i < value; i++) {
		if (value % i == false) {
			return false;
		}
	}

	return true;
};

// 소수판별문제 또 못풀엇다.. 분명 내가할거랑 같은데??
// return 붙이고, 나머지를 구하는 주체를 잘 정할 것

function checkAge(age) {
	if (age > 18) {
		return true;
	} else {
		return confirm('보호자의 동의를 받으셨나요?');
	}
}

//1. 물음표 연산자
function checkAgeTwo(age) {
	return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
}

//2. OR 연산자
function checkAgeThree(age) {
	return age > 18 || confirm('보호자의 동의를 받으셨나요?');
}

const min = (value1, value2) => (value1 > value2 ? value2 : value1);

const pow = (value, pow) => {
	value = +prompt('x?', '');
	pow = +prompt('n?', '');

	if (value && pow > 1) {
		return alert(value ** pow);
	}

	return alert('양의 정수 값 이어야 합니다.');
};
// 함수표현식

function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

function showOk() {
	alert('동의 하셨습니다.');
}

function showCancel() {
	alert('취소 버튼을 누르셨습니다.');
}

ask('동의하십니까?', showOk, showCancel);
//익명 함수식

function ask(question, yes, no) {
	if (confirm(question)) yes();
	else no();
}

ask(
	'동의하십니까?',
	function () {
		alert('동의하셨습니다.');
	},
	function () {
		alert('취소 버튼을 누르셨습니다.');
	}
);
//문법의 차이
//함수를 생성하는 시기의 차이 (표현식 : 실행이 도착할때 / 선언식 : 정의하기전에도)
//스코프의 차이, 블록밖에서 함수접근 불가 if()
//엄격 모드가 아닐경우 블록내 함수도 외부에서 사용이 가능하다.

//함수 표현식 -> 화살표 함수
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//     "동의하십니까?",
//     function() { alert("동의하셨습니다."); },
//     function() { alert("취소 버튼을 누르셨습니다."); }
//   );

const ask = (question, yes, no) => {
	if (confirm(question)) yes();
	else no();
};

ask(
	'동의하십니까',
	() => alert('동의하셨습니다.'),
	() => alert('취소 버튼을 누르셨습니다.')
);

// 아래 코드가 어떤 점에서 좋지 않은지 생각해보세요.

function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

//self-descriptive 자기설명적인 코드 리팩토링
let x = prompt('x?', '');
let n = prompt('n?', '');

if (n <= 0) {
	alert(`Power ${n} is not supported, 
	please enter an integer number greater than zero`);
} else {
	alert(pow(x, n));
}

function showPrime(n) {
	if (isPrime(n)) return alert('X');

	return alert('소수');
}

function isPrime(n) {
	for (let i = 2; i < n; i++) {
		if (n % i == 0) return true;
	}
	return false;
}

//거듭 제곱을 하는 함수 만들어보기
// 함수식으로 표현해서 거듭제곱을 해주는 함수와 그것을 표현해주는 함수로 나누자

function showPow(number, pow) {
	if (number && pow <= 0) {
		return alert('정수만 입력 가능합니다.');
	}

	let power = number;
	for (let i = 0; i < pow; i++) {
		number *= power;
	}

	return alert(`Power Number ${number}.`);
}

// 계산된 프로퍼티
// 객체를 만들 때 객체 리터럴 안의 프로퍼티 키가 대괄호로 둘러싸여 있는 경우, 이를 계산된 프로퍼티(computed property) 라고 부릅니다.

let fruit = prompt('어떤 과일을 구매하시겠습니까?', 'apple');

let bag = {
	[fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

alert(bag.apple); // fruit에 "apple"이 할당되었다면, 5가 출력됩니다.

//대괄호 표기법과 다른방식이니 주의

let fruit = 'apple';
let bag = {
	[fruit + 'Computers']: 5, // bag.appleComputers = 5
};

//이러한 복잡한 식도 가능.

for (key in object) {
	// 각 프로퍼티 키(key)를 이용하여 본문(body)을 실행합니다.
	// key를 불러오고, Obj만 불러올수도있음.
	// for과 전혀 다른거니 주의!
	// ~let key in obj 형태로 자주씀
}

// 객체야 안녕?
// 다음 각 동작을 한 줄씩, 코드로 작성해보세요.

// 빈 객체 user를 만듭니다.
// user에 키가 name, 값이 John인 프로퍼티를 추가하세요.
// user에 키가 surname, 값이 Smith인 프로퍼티를 추가하세요.
// name의 값을 Pete로 수정해보세요.
// user에서 프로퍼티 name을 삭제하세요.

user = {};
// {}
user.name = 'John';
// 'John'
user.surname = 'Smith';
// 'Smith'
user;
// {name: 'John', surname: 'Smith'}
user.name = 'pete';
// 'pete'
user;
// {name: 'pete', surname: 'Smith'}
delete user.name;
// true
user;
// {surname: 'Smith'}

function isEmpty(obj) {
	for (let key in obj) {
		return false;
	}
	return true;
}
//객체가 비어있는지 확인

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

let sum = 0;
for (let key in salaries) {
	sum += salaries[key];
}
alert(sum); //390

// **** 각 키 내부의 값을 더하는 식

// 객체 obj의 프로퍼티 값이 숫자인 경우 그 값을 두 배 해주는 함수 multiplyNumeric(obj)을 만들어보세요.

// 함수 호출 전
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

multiplyNumeric(menu);

// 함수 호출 후 값이 2배가 되는 함수를 제작해봐라
menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] == 'number') {
			obj[key] *= 2;
		}
	}
}

// 반환 정수는 string "number"로 나온다..
