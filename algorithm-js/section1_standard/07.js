function solution(date, arr) {
	let numArr = [];

	for (let x of arr) {
		numArr.push(x.toString());
	}

	let count = numArr.filter(
		(element) => element.indexOf(date.toString()) != -1
	);

	return count.length;
}
//date, arr를 받아들여 각각 string으로 바꾸어 indexOf를 이용하여 문자검사 진행, 아닐경우 -1가 나오므로
//!= 를 이용하여 출력가능

console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
