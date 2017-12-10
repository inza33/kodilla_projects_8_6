var a = 4;
var b= 10;
var result = (a * a) - (2 * a * b) + (b * b);
if (result > 0) {
    console.log('wynik dodatni');
} else if (result < 0) {
    console.log('wynik ujemny');
} else {
    console.log('wynik = 0');
}
alert(result);