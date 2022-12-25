// array에서 이름을 찾아주는 함수를 만들고 있습니다.
// 함수 안에 파라미터로 이름을 집어넣으면
// 그 이름이 출석부에 있으면 콘솔창에 출력해주는 함수를 만들어봅시다.
// 어떻게 만들면 될까요?

var 출석부 = ['흥민', '흥민', '영희', '철수', '재석'];

function 이름찾기() {
	let name = prompt('원하는 이름을 입력하세요', '');
	for (key in 출석부) {
		if (출석부[key] === name) {
			return console.log('있어요');
		}
	}
	return console.log('없어요');
}

// 철수는 구구단을 외우지 못하는 관계로
// 자바스크립트를 이용해 구구단을 2단부터 9단까지 콘솔창에 출력하고 싶어졌습니다.
// 빨리 출력해보십시오.
let min = 1;
let max = 10;
for (let i = min; i < max; i++) {
	console.log('...');

	for (let j = min; j < max; j++) {
		console.log(i * j);
	}
}

// 어떤 함수에
// 기존 모의고사 성적들을 array 자료에 전부 담아 첫 파라미터로 입력하고
// 이번 11월 모의고사 성적을 둘 째 파라미터로 입력하면
// 11월 성적이 기존 성적들의 평균에 비해 얼마나 우수한지 결과를 알려주고 싶습니다.
// 어떻게 함수를 만들면 될까요?

// 동작예시 :
// 함수([10, 20, 30, 40, 50], 40) 이렇게 쓰면 콘솔창에 "평균보다 10점이 올랐네요"가 떠야합니다. (평균이 30이니까)
// 함수([40, 40, 40], 20) 이렇게 쓰면 콘솔창에 "평균보다 20점이 떨어졌네요 재수추천"이 떠야합니다. (평균이 40이니까)

const myScore = (array, myScore) => {
	let total = 0;
	for (key in array) {
		total += array[key];
	}
	Math.round((total /= array.length));

	if (myScore > total) {
		myScore -= total;
		return console.log(`평균보다 ${myScore} 올랐네요`);
	}
	if (myScore < total) {
		total -= myScore;
		return console.log(`평균보다 ${myScore} 떨어졌네요 재수추천`);
	}
};
