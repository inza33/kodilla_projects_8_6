var femaleNames = ['Asia', 'Kasia', 'Ola', 'Jola'];
var maleNames = ['Piotrek', 'Marek', 'Arek', 'Jarek','Marian'];
var allNames = femaleNames.concat(maleNames);
console.log(allNames);
var newName = 'Marian';
if (allNames.indexOf(newName)===-1){
	allNames.push(newName);
}
	else {
		console.log(newName + ' ' + 'already exists')
	}
console.log(allNames);