function first5CharsK1(s) {
	return s.slice(0, 5)
}
function last5CharsK1(s) {
	return s.slice(-5);
}
function allCharsFromBackK1(s) {
	return s.split("").reverse().join("");
}
function first6CharsInReverseK1(s) {
	return s.split("").reverse().join("").slice(s.length-6);
}