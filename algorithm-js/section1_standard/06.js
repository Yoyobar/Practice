// 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.

// ▣ 입력설명
// 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
// ▣ 출력설명
// 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.

function solution(arr) {
	// 	let answer = [];
	// 	let max = 0;
	// 	let number = arr.filter((element) => element % 2 === 1);
	// 	number.forEach((element) => {
	// 		max += element;
	// 	});
	// 	answer.push(max);
	// 	//filter로 홀수를 구하고 각 홀수를 전부 더한 값
	// 	answer.push(Math.min.apply(null, number));
	// 	//배열에서 가장 낮은 값
	// 	return solve(answer);
	// }
	// function solve(arr) {
	// 	console.log(arr[0]);
	// 	console.log(arr[1]);
	// }

	/* for x of array 꼴 풀이*/

	let answer = [];
	let max = 0;
	let min = Number.MAX_SAFE_INTEGER;

	for (let x of arr) {
		if (x % 2 === 1) {
			max += x;
			if (x < min) {
				min = x;
			}
		}
	}
	answer.push(max);
	answer.push(min);
	return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr));

//filter 사용시 필터 자리에 {} 사용하지 말 것
