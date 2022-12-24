var pants = [28, 30, 32];
var shirts = [95, 100, 105];

function show(page) {
	document.querySelectorAll('.tab-button')[page].addEventListener('click', function () {
		for (let i = 0; i < document.querySelectorAll('.tab-button').length; i++) {
			document.querySelectorAll('.tab-button')[i].classList.remove('orange');
			document.querySelectorAll('.tab-content')[i].classList.remove('show');
		}
		document.querySelectorAll('.tab-button')[page].classList.add('orange');
		document.querySelectorAll('.tab-content')[page].classList.add('show');
	});
}
show(0), show(1), show(2);

const car = {
	car: ['소나타', '아반떼', '그랜저'],
	carPrice: ['50000', '70000', '150000'],
	carColor: ['검정', '흰색', '노란색'],
};
document.querySelector('.car-title').innerHTML = car.car[0];
document.querySelector('.car-price').innerHTML = car.carPrice[0];

document.querySelectorAll('.form-select')[0].addEventListener('input', function () {
	document.querySelectorAll('.form-select')[1].classList.add('form-hide');
	let selected = this.value;
	let template_shirt = `
  <option>${shirts[0]}</option>
  <option>${shirts[0]}</option>
  <option>${shirts[0]} </option>
  `;
	let template_pants = `
  <option>${pants[0]}</option>
  <option>${pants[1]}</option>
  <option>${pants[2]}</option>
  `;

	//------

	if (selected == '셔츠') {
		document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
		document.querySelectorAll('.form-select')[1].innerHTML = '';
		document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', template_shirt);
	} else if (selected == '바지') {
		document.querySelectorAll('.form-select')[1].classList.remove('form-hide');
		document.querySelectorAll('.form-select')[1].innerHTML = '';
		document.querySelectorAll('.form-select')[1].insertAdjacentHTML('beforeend', template_pants);
	}
});
//inner, value == / 다른건()

//html 생성1
// let a = document.createElement('p');
// a.innerHTML = '안녕';
// document.querySelector('#test').appendChild(a);

//html 생성2
// 원하는 태그방식으로 제작후 그형태 그대로 추가
// let 템플릿 = '<p>안녕</p>';
// document.querySelector('#test').insertAdjacentHTML('beforeend', 템플릿)
