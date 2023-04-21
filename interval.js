function thirdFunc() {
	console.log("Third");
}
console.log("First");
console.log("Second");
// setInterval(() => {
// 	console.log("Third");
// });
let seconds = 0;
let intervalId = setInterval(() => {
	// jodi emitted console.log ++ kori tahole age use kore pore barabe
	// jodi befor console.log ++ kori tahole age barabe kore pore use korbe
	// x== vs ++x
	// OR i++ vs ++i
	// console.log(seconds++);
	console.log(++seconds);
	if (seconds === 10) {
		clearInterval(intervalId);
	}
}, 500);
console.log("Fourth");
console.log("Fifth");
