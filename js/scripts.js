function getTriangleArea(a, h) {
	if (a > 0 && h > 0) {
		return a * h / 2;
	} else {
		return ('Nieprawidłowe dane');
	}
};

console.log(getTriangleArea(10,6));

var triangle1 = getTriangleArea(5,4);
var triangle2 = getTriangleArea(13,6);
var triangle3 = getTriangleArea(5,20);

console.log('Nasze pola to: ' + triangle1 + ','+ triangle2 + ',' + triangle3);