// 1. Create a counter in JavaScript (counts down from 30 to 0)

/* Using setInterval */
function counter() {
	let count = 30;

	const id = setInterval(() => {
		if (count === 0) {
			clearInterval(id);
		}
		console.log(count);
		count--;
	}, 1000);
}
counter();

/* using setTimeout */
let time = 5;
function counter2() {
	console.log(time);
	time--;
	if (time >= 0) {
		setTimeout(counter2, 1000);
	}
}
counter2();

//  2. Calculate the time it takes between a setTimeout call and the inner function actually running
let t = 0;
function fun() {
	const newTime = new Date();

	console.log('elapsed time is:', newTime.getTime() - t.getTime() - 1000);
}
t = new Date();
setTimeout(fun, 1500);

// 3. Create a terminal clock (HH:MM:SS)
let Time = new Date();
let hours = Time.getHours();
let minutes = Time.getMinutes();
let seconds = Time.getSeconds();
if (hours > 12) {
	hours = hours - 12;
}
console.log(`${hours}:${minutes}:${seconds}`);
