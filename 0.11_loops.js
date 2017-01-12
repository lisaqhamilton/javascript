//indexing=0123456789 first letter spot is 0
var name = "lisa hamilton";
// console.log(name.length);
// console.log(name[0].toLowerCase() + name[1] +name [2] + name[3].toUpperCase() + name [4])
// console.log(name[0]);
// console.log(name[1]);
// console.log(name[2]);
// console.log(name[3]);
// console.log(name[4]);
// console.log(name[5]);
// console.log(name[6]);
// console.log(name[7]);
// console.log(name[8]);
// console.log(name[9]);
// console.log(name[10]);
// console.log(name[11]);
// console.log(name[12]);
// console.log(name[13]);

// var lcv = 0; //this is a loop control variable
// while(lcv < 5) {
// 	console.log(name.toUpperCase());
// 	lcv += 1; ////This is CRITICAL!!! No var leads to infinity
// }


///Create a while loop that starts at 0 and ends at 10. The while loop should print
//each number of the lcv. make your lcv var count =0

var decrease = 10;
while(decrease > 0){
	console.log(decrease);
	decrease -- ///equal to plus 1--(no spaces between var and ++)
}
var increase = 0;
while (increase <= 10){
	console.log(increase);
	increase += 2;
}
//All loops must have 3 things:
//
//Prints out count plus the statement "is even"
var evenCount = 1;
while (evenCount < 20){
	if (evenCount % 2 == 0){
		console.log(evenCount + " is even");
	}else{
		console.log(evenCount + " is odd");
}
	evenCount ++;
}

//create a while loop that will count to 50 by 5s
//use the lcv variable of countFive

var countFive = 0;
while (countFive = 50){
	console.log(countFive);
	countFive += 5;
}
//same as
var countFive = 0;
while (countFive <= 50){
	if (countFive %5 == 0){
	console.log(countFive);
	}
	countFive += 5;
}