('use strict');
// calculator라는 객체를 만들고 세 메서드를 구현해 봅시다.
// read()에선 프롬프트 창을 띄우고 더할 값 두 개를 입력받습니다.
// sum()은 저장된 두 값의 합을 반환합니다.
// mul()은 저장된 두 값의 곱을 반환합니다.

let calculator = {
	sum() {
		return this.numberA + this.numberB;
	},
	mul() {
		return this.numberA * this.numberB;
	},

	read() {
		this.numberA = +prompt('number1?', '');
		this.numberB = +prompt('number2?', '');
	},
};

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

// 올라가기(up)와 내려가기(down) 메서드를 제공하는 객체 ladder가 있습니다.
let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function () {
		// 사다리에서 몇 번째 단에 올라와 있는지 보여줌
		alert(this.step);
		return this;
	},
};

//생성자 함수 new의 동작, new function()으로 할경우 익명이므로 한번만 사용됨

function User(name) {
	this.name = name;
	this.isAdmin = false;
}
let user = new User('보라');

function User(name) {
	// this = {};  (빈 객체가 암시적으로 만들어짐)

	// 새로운 프로퍼티를 this에 추가함
	this.name = name;
	this.isAdmin = false;

	// return this;  (this가 암시적으로 반환됨)
}

let user = {
	// 서드파티 코드에서 가져온 객체
	name: 'John',
};

let id = Symbol('id');

user[id] = 1;

alert(user[id]); // 심볼을 키로 사용해 데이터에 접근할 수 있습니다.

//숫자를 입력할때까지 반복
const readNumber = () => {
	let num;

	do {
		num = prompt('Enter a number plz?', 0);
	} while (!isFinite(num));

	if (num === null || num === '') return null;

	return +num;
};

alert(`Read: ${readNumber()}`);

let i = 0;
while (i < 10) {
	i += 0.2;
	console.log(i);
}
//부동소수점 방식이기때문에 10의 값을 초과해버린다. 따라서 ==가아닌 <으로 변경하자.

function random(min, max) {
	return min + Math.random() * (max - min);
	// 최소값 + random() * (최대-최소) = 최소 ~ 최대값
	// random() * (값) = 최대값
}

function randomInteger(min, max) {
	let rand = min - 0.5 + Math.random() * (max - min + 1);
	return Math.round(rand); //고정 룰임 걍
}
