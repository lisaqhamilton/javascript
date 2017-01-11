/*
//booleans any equation which can be true or false
var tired = false;
var hungry = true;

if (hungry) {
	console.log("Let's eat!");
}

//= assigns inforamtion to a variable
//==evaluates values (returns true or fasle) only evaluates the value
//=== evaluates values AND type of variable. only evaluates 
var isTrue = 2 === 1;//returns false
console.log(isTrue);
var isTrue = 2 == 1;//returns true
console.log(isTrue);


// Operator		Meaning
//	==			Equality
//	===			Strict equality
// 	!=			Inequality
//	!===		Strict equality
//	>			Greater than
//	<			Less than
//	>=			Greater than or equal to
//	<=			Less than or equal to

var num1 = 35;
var num2 = 34;
console.log(num1 !== num2);
*/

/*
var num = 4;
var month = "Jun";
var day = "Monday";
var year = "2017";
var day2 = "Tuesday";

console.log(day != day2);
console.log(day == day2);
console.log(day !== day2);
*/

var login = true;
var password = true;

if (login != true) {
	console.log("Please enter a login id");
}else{
	console.log("Next enter your password");
};
if (password != true) {
	console.log("Please enter a password");
}