// If excercises
var a = 2,
	b = 5,
	value = (a*a) + (2 * a * b) - (b*b);

console.log(value);

if (value == 0) {
	console.log('wynik = 0!');
} else if (value > 0) {
	console.log('wynik dodatni');
} else {
	console.log('wynik ujemny');
}