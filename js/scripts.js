var text = 'Papugi koszą trawę, unosząc się nad ziemią 15 centymetrów, na czerwonych dywanach.';
var olifant = 'Zielone słonie';
var olifantBig = olifant.toUpperCase();
console.log(olifantBig);

var animal = olifantBig;
var textAnimal = text.replace('Papugi', animal);

console.log(textAnimal);
var textLength = textAnimal.length;

var textShort = textAnimal.slice(0, (textLength/2));

console.log(textShort);
