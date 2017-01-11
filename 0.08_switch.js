//Use a switch case statement when numerous else if statements 
//Use when more than 2 else if statements would be necessary

var marginOfColtSuperBowlWins = 17;
var result;

switch (marginOfColtSuperBowlWins){
	case 3:
		result = "Cool, that will be a good game"
		break;						//required to stop the 
	case 7:
		result = "Awesome"
		break;
	case 10:
		result = "Sweet"
		break;
	case 17:
		result = "Sure win"
		break;
	default:
		result = "getting there"
}
console.log("Switch Result: "+ result);