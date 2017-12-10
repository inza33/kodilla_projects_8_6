

var triangleAreaResult;
function getTriangleArea (a, h){
	if (a > 0 && h > 0){
		triangleAreaResult = a*h/2;
	}
	else {
		 console.log('nieprawidlowe dane');
	}
}
console.log(getTriangleArea(10,6));
var triangle1Area = getTriangleArea(10, 15);
var triangle2Area = getTriangleArea(5, 15);
var triangle3Area = getTriangleArea(5, 10);
alert(triangleAreaResult);
