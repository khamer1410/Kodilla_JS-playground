
function printTree(rows) {
	var star;
	for (var i = 1; i < rows; i++) {
		star = "";
		for (var j = 0; j < i * 2 -1; j++) {
			star += "*";
		}
		console.log(star);
	}
}

var treeHeight = prompt('Jak wysoka ma być choinka?');
console.log(printTree(treeHeight));
//jak zrobić, żeby choinka pojawiła się jako alert? Da sie zmienną przekształcić w string i wyświetlić?