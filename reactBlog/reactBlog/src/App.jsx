/* eslint-disable react/react-in-jsx-scope */
// import reactLogo from './assets/react.svg';

import { useState } from 'react';
import './App.css';

function App() {
	const blog = 'ReactBlog';
	let [title, 타이틀변경] = useState([
		'남자코트 추천',
		'강남 우동맛집',
		'파이썬독학',
	]);
	const changeTitle = () => {
		let copy = [...title];
		copy[0] = '여자코트 추천';
		타이틀변경(copy);
	};
	const changeTitlenum = () => {
		let copy = [...title];
		copy.sort();
		타이틀변경(copy);
	};

	let [subtitle] = useState(['2월 17일 발행']);

	let [like, 따봉변경] = useState(0);
	const liked = () => {
		따봉변경(like + 1);
	};

	let [modal, setModal] = useState(false); //상태, 1: 열림 0: 닫힘
	const changemodal = () => {
		if (modal === true) return setModal(false);
		return setModal(true);
	};

	//React syntax
	//let [a , b] = useState(초기 값), a(변수 명), b(상태 변환 '함수'), 따라서 상태를 바꾸고싶으면 함수를 하나 선언한다.
	//const test = () => {
	// 	b(true);
	// }
	// 이럴 경우, test의 이벤트 function을 가진 항목은 발동될경우 a의 변수 값이 true로 변경된다!

	//sort() 사용법
	//return 1 => a값이 뒤로 (a,b)
	//return 0 => 그대로
	//return -1 => a값이 앞으로 (a,b)
	//array.reverse
	return (
		<div className="App">
			<div className="black-nav">
				<h4
					onClick={() => {
						changemodal();
					}}
				>
					{blog}
				</h4>
			</div>
			<div className="list">
				<h4>
					{title[0]}
					<span
						onClick={function () {
							liked();
						}}
					>
						👍
					</span>
					{like}
					<button
						onClick={() => {
							changeTitle();
						}}
						className="changeTitle"
					>
						글 수정
					</button>
					<button
						onClick={() => {
							changeTitlenum();
						}}
						className="changeTitle"
					>
						가나다 순
					</button>
				</h4>
				<p>{subtitle[0]}</p>
			</div>
			<div className="list">
				<h4>{title[1]}</h4>
				<p>{subtitle[0]}</p>
			</div>
			<div className="list">
				<h4>{title[2]}</h4>
				<p>{subtitle[0]}</p>
			</div>
			{modal === false ? null : <Modal></Modal>}
		</div>
		//동적 UI Step Tip::
		//1. html, css로 미리 디자인 작성
		//2. UI의 현재 상태를 state로 저장
		//3. state에 따라 UI가 어떻게 보일지 작성, html에서 세팅할때는 삼항연산자 (Pattern)
	);
}

//컴포넌트
//1.반복적인 html 축약, 2.큰 페이지 하나, 3.자주 변경되는 UI
//다른 컴포넌트에 state의 변수를 가져다쓸때 사용하지 못함. 그래서 너무 막쓰면 안됨
//function, return(), div는 끝에 하나! <></>로도 가능함
const Modal = () => {
	return (
		<div className="modal">
			<h4>제목</h4>
			<p>날짜</p>
			<p>상세내용</p>
		</div>
	);
};

export default App;
// 자료보관은 변수, state
// 스타일은 {{Array}}
//
