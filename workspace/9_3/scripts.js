var text = 'Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.';
var dinosaur =  'triceratops';
//wsztystko musimy przypisywac do nowych zmiennych?? nie napisuje??
//to nie dziala: dinosaur.toUpperCase();
var dinoUpperCase = dinosaur.toUpperCase();
var newText = text.replace('Velociraptor', dinoUpperCase)
console.log(newText.slice(0,text.length/2));
