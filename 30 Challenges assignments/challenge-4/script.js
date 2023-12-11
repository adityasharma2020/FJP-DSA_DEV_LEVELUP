const body = document.getElementsByTagName('body')[0];
const h1 = document.getElementsByTagName('h1')[0];
const input = document.getElementById('toggle');

input.addEventListener('click', () => {
	// Toggle the background color based on checkbox checked state
	body.style.transition = 'all 0.5s linear';
	body.style.backgroundColor = input.checked ? 'white' : 'black';
	h1.style.color = input.checked ? 'black' : 'white';
});
