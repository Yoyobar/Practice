// 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

// function solution(a, b, c) {
// 	let answer;
// 	if (a > b && a > c) {
// 		a < b + c ? (answer = 'YES') : (answer = 'NO');
// 		return answer;
// 	}
// 	if (b > a && b > c) {
// 		b < a + c ? (answer = 'YES') : (answer = 'NO');
// 		return answer;
// 	}
// 	if (c > b && c > a) {
// 		c < a + b ? (answer = 'YES') : (answer = 'NO');
// 		return answer;
// 	}
// }

function solution(a, b, c) {
	let answer, max;
	let sum = a + b + c;

	if (a > b) max = a;
	else max = b;
	if (c > max) max = c;

	max >= sum - max ? (answer = 'NO') : (answer = 'YES');
	return answer;
}

console.log(solution(6, 7, 11));
