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
