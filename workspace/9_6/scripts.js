
var list = document.getElementById('list');
var add = document.getElementById("addElem");

add.addEventListener('click', function() {
	var itemNo = document.getElementsByTagName("li").length;
	var element = document.createElement('li');
	element.innerHTML = 'item' + itemNo;
	list.appendChild(element);
});
