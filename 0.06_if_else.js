/*
//if/else
var elevatorUp = true;
var elevatorDown = true;
var elevatorOpen = true;
var elevatorBroken = true;
var elevatorStuck = true;
var elevatorNumber = 13;

if (elevatorUp == true) {
	console.log("Going up");
}else{
	console.log("Going down");
}
if (elevatorUp != true){
	console.log("Going down");
}else{
	console.log("Going Up");
}

//write one for elevator broken
if (elevatorStuck == true){
	console.log("Elevator is Broken");
}else{
	console.log("What floor?")
}
if (elevatorBroken == false){
	console.log("Elevator is Broken")
}else{
	console.log("What Floor")
}
if (elevatorBroken || elevatorStuck){
	console.log("Call Maintenance");
}
*/

var burnerOn = false;
var burnerOff = true;

if (burnerOn == false){
	console.log("Please turn on the stove to cook your meal")
}
	

var firstName = true;

if (firstName == true) {
	console.log("You're logged in");
}else{
	console.log("Please sign in");
}


var bankAccount = "5000";
var debt = "4500";
var difference = (bankAccount-debt);

if (difference >= 0){
	console.log("You have extra money after your debt is paid");
}else{
	console.log("Better get to making some more money");
}
