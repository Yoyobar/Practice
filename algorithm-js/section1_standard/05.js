// 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.

function solution(arr) {
	let answer = arr[0];

	arr.forEach((element) => {
		if (answer > element) answer = element;
	});

	return answer;
}

console.log(solution([5, 3, 7, 11, 2, 15, 17]));

// answer는 첫 배열값으로 시작함, element값은 배열을 순서대로 진행하며 반복하고, 이 반복한 것을
// 배열값과 비교해서 더 작은숫자를 answer에 출력시킴
// Math.min을 이용해서 답을 구할 수 있음, 단 이럴경우 ...arr로 배열을 풀어서 넣어줄 필요가있음
// Math.min.apply(null, arr);도 가능
