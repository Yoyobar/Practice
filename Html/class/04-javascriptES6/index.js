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
