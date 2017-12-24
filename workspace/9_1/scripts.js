
function getTriangleArea (a, h){
	//var triangleAreaResult;
	if (a > 0 && h > 0){
		//triangleAreaResult = a*h/2;
		return a*h/2;
	}
	else {
		 console.log('nieprawidlowe dane');
	}
}
console.log(getTriangleArea(10,6));

var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(5, 10);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

