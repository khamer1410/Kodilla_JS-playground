
var nameMen = ['Krzysztof', 'Tomasz', 'Piotr', 'Paweł', 'Kacper']; 
var nameWomen = ['Anna', 'Ewa', 'Kasia', 'Marta', 'Mariola']; 

var nameAll = nameMen.concat(nameWomen); 

console.log(nameAll); 

var newName ='Marek'; 
nameAll.indexOf(newName); 

if (nameAll.indexOf(newName) === -1) { 
                nameAll.push(newName); 
} else { 
        console.log('imię już istnieje'); 
} 

console.log(nameAll);
//Wszystkie komendy kończyć średnikami? czy na końćzu if po nawiasie} też powinien być?