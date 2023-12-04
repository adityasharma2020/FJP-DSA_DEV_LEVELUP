const mainContainer = document.getElementById('main');
const text = document.getElementById('hexcode');
const button = document.getElementById('button');

function clickHandler() {
	const color = randomColorCode();
	console.log(text);
	mainContainer.style.backgroundColor = color;
	text.innerText = color;
    text.style.color = color;
	console.log(text.innerText);
}

function randomColorCode() {
	let colorCode = '#';
	for (let i = 0; i < 6; i++) {
		// multiply with 15 as hex code can go up to 15 i.e f
		let randomNumber = parseInt(Math.random() * 15);
		if (randomNumber == '10') {
			randomNumber = 'a';
		} else if (randomNumber == '11') {
			randomNumber = 'b';
		} else if (randomNumber == '12') {
			randomNumber = 'c';
		} else if (randomNumber == '13') {
			randomNumber = 'd';
		} else if (randomNumber == '14') {
			randomNumber = 'e';
		} else if (randomNumber == '15') {
			randomNumber = 'f';
		}
		colorCode += randomNumber;
	}
	return colorCode;
}

button.addEventListener('click', clickHandler);

document.addEventListener('keydown', function (event) {
	event.preventDefault();
	if (event.key === 'Spacebar'  || event.key === ' ') {
		console.log('spacebar clicked');
		clickHandler();
	}
});
