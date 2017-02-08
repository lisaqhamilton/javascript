//Functions//

//In JS every function is a function object//
//Arguments are passed into a function, 
//arguments must be seperated by a common
//within a function.

//write a JS function that reverses a numer

function reverseNumber(n) {
	n = n + "";  ///converts n to a String
	return n.split("").reverse().join("");
}
console.log(reverseNumber(445));
// split() is used to split a String object into an array of strings by 
//	seperating into substrings.
	// .reverse() is used to reverse the array in place. First array becomes the las
	//	and the last becomes the first.
		// .join() is used to join all elements of an array






