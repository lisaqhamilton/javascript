/*var age = 23;

if (age >=18){
	console.log("You can vote");
}
else if (age > 18 && age >=21){
	console.log("You cannot vote and drink");
}else{
	console.log("You can vote, drink, and rent a car");
}
*/

var username = true;
var admin = true;
var manager = false;
var employee = false;
var message = "You are Logged In"

if (username && admin !=manager !=employee){
	console.log(message + "\nThis is the dashboard for your employee records you have master control");
}
 else if (username && manager !=admin !=employee){
	console.log(message + "\nThis is the dashboard for your employee records, you can ony read but not create users");
}
else if (username && employee !=manager !=admin){
	console.log(message + "\nClock in and clock out please");
}else{
	console.log("Please sign in");
}





var coltScore = 3
var patriotScore = 1


if (coltScore >= patriotScore){
	console.log("As if things would be any different. Patriots suck!");
}else if (coltScore == patriotScore){
	console.log("Only because Luck was injured that one game. Patriots suck!");
}else{
	console.log("Patriots SUCK!!!");
}



