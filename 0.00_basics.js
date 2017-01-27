//General Js Info

//one line comments are done with double forward slashes

/*multi-line comments are begun with forward slash, asterik then 
ended with asterik, forward slash */

// There are 3 declarations in Js.


//var - declares a variable
	
var fruit = "apple";
var car = "mustang";
var age = 16;


//let - declares variables limted in scope to the block
	
var num = 2;

if (num <= 10) {
	let num = 8;
console.log(num)}

if (fruit.length > 3) {
	let fruit = "old";
	console.log(fruit)}

//this will not work because 'let' is outside of the block scope
let day = "monday";
if (day.length < 3) {
	let day = "old";
	console.log(day)}

/*const - declares a read only named constant. The variable
can be local or global. The variable identifer can not be 
reassigned*/

//This will not work because age is const.
const age = 16;

if (age < 10){
	let age = 10;
	console.log(age);
}


