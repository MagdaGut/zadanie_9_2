// scripts.js

var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek'];

var allNames = femaleNames.concat(maleNames);

console.log(allNames);

var newName = "Marian";

if (allNames.indexOf(newName) === -1) {
    allNames.push(newName);
} else {
    console.log('Podane imię - ' + newName + ' istnieje w tablicy!');
}

console.log(allNames);
