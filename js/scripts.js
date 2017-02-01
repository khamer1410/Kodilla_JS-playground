
var treeHeight = prompt('Jak wysoka ma być choinka?');
console.log(printTree(treeHeight));

function printTree(n) {
	var tekst = "";
	for (var i = 1; i <= n; i++) { 
        var star ='' ; 
        for (var j=0; j < i*2-1; j++) { 
            star += '*'; 
            var row = ''; 
            for (var k = 0; n - i > k; k++) { 
                    row+= ' '; 
            } 
        }

        var treeRow = row + star + row; 
        console.log(treeRow);
        tekst += (treeRow + '\n'); 
        
        if (star.length < 2) { 
            var treeTrunk = treeRow; 
        } 
	} 
	var trunkHeight = prompt('podaj długość pnia'); 
	var x = 0; 
	while (x < trunkHeight) { 
        console.log(treeTrunk);
        tekst += treeTrunk + '\n';
        x++;

	}
alert(tekst);
}

//jak zrobić, żeby choinka pojawiła się jako alert? Da sie zmienną przekształcić w string i wyświetlić?
