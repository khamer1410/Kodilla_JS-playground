var name = prompt('Wpisz swoje imię');
alert('Witaj, ' + name);
console.log('Witaj, ' + name);

//Variables and arrays
var atos = 1,
	portos = 2,
	aramis = 3,
	isMuszkieter = true;

var tablica = ['HTML', 5, 3, 'Atos', ['portos', 'aramis']];
var mlody = tablica[4][1];

//Objects
var person = {
    name: 'Jon',
    surname: 'Snow',
    siblings: 5,
    knownThings: ['Nothing','Night Watch']
};

//Task: area of triangle

var a = prompt('Podaj wartość a'),
	h = prompt('Podaj wartość h'),
	triangleArea = a*h/2;

console.log('Pole trójkąta o podstawie a: ' + a + ' i wysokości h: ' + h + ' wynosi: ' + triangleArea);
