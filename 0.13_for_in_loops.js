var footballteam = "Packers";
//for (i = 0; i< footballteam.length; i++)
for (var letter in footballteam) {
	console.log(footballteam[letter]);
}
//create a for in loop that prints each letter of your fav show
var favshow = "Shameless";
for (var letter in favshow){
	console.log(favshow[letter]);
}


//create a for in loop of your favorite food
//then count each vowel that occurs in that food


var favFood = "Sushi";

for (var letter in favFood){
	if (favFood == "a" || "e" || "i" || "o" || "u"){
		console.log(favFood[letter]);
	}
}////This didn't work

