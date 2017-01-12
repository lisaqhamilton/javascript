function hello(){
	console.log("Hello World");
}

//To call a function//
hello();

function greeting(){
	console.log ("Hello guys!");
}

greeting();


//adding number to functions
function printNumber(){;
	console.log(1);
}
printNumber();

//equations in a function
function sumNum(num1,num2){

	console.log(num2 + num1);
}
sumNum(5,8);

function divNum(num1,num2){
	console.log(num1 /num2);
}

divNum(15,3);

function productNum(num3,num4){
	console.log(num3 * num4);
}
var num3 = 5;
var num4 = 8;
productNum(num3,num4);

//Variable within a function are local NOT global


//function with multiple parameters

//making a function with a assigned parameter
function goodMorning(name){
	console.log("Good Morning " + name);

}

goodMorning("Lisa");


//creating functions with numerous parameters
function budget(month1, month2){
	console.log(month2 + month1);
}

budget(500,1500);


//Using variables to call functions

function morning(name){
	return "Morning "+ name;
}
var addGreeting = morning("Paul") + " , how are you doing today?";
console.log(addGreeting);

//Make sure calling of argument is outside of function


function calculatePriceIndiana(quantity,price){
	var tax = 0.07;
	var totaltax = quantity * price * tax;
	var totalPrice = totaltax + quantity *price;

	return totalPrice;
}
console.log(calculatePriceIndiana(17,5));


//built in functions examples
var today = Date();
console.log(today);

function retNum(ret1,ret2){
	return ret1 + ret2;
}
console.log(retNum(5,5));

//built in Objects example:
var today = new Date();
console.log(today.toDateString());
	
function checkodd(num){
	if (num % 2 == 0){
		return "You have a remainder";
	}else{
		return "Nothing is left";
	}
}
console.log(checkodd(32));


function divByThree(num){
	if (num % 3 === 0 ){
		return "This is divisible by 3"
	} else {
		return "This is not divisible by 3"
	}
}
	console.log(divByThree(9))

//Challenge, creat a personalize greeting for 2 names using a function and an if statement

function welcome(custName){
	if (custName == "Mark"){
		return "Good Morning"
	}else if (custName == "George"){
		return "Good Evening"
	}
}
console.log(welcome("Mark"));


//Challenge

function budget(exp1, exp2, exp3){
	var expenses = exp1 + exp2 + exp3;
	
	if (expenses >= 500){
		return("Your monthly expense exceed your income");
	}else{
		return("You have money left over this month")
	}
}
console.log(budget(250,250,100));

function twoStrings(test1, test2){
	return test1 + test2
}
console.log(twoStrings("yes","no"))


function totalprice(quantity, price, tax, itemName){
	var price = quantity + price +
}