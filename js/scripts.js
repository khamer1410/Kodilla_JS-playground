var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var olifant = 'Zielone słonie';
var olifantBig = olifant.toUpperCase();
console.log(olifantBig);

var animalArr = text.split(' ');
var textAnimal = text.replace(animalArr[0], olifantBig);

console.log(textAnimal);
var textLength = textAnimal.length;

var textShort = textAnimal.slice(0, (textLength/2));

console.log(textShort);
