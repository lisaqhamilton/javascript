//this is how to create a JS array

var names = ["paul", "gavin", "verne", "lisa", "kenn"];
console.log(names[3]);

var nums = [1,2,2,24,5,6];
console.log(nums [0]);

var mixed = ["dog", false, 6, "squirrel", 2];
console.log(mixed[3]);

//can we use a for in loop to iterate and console log each name in names

for (name in names){
	console.log(names[name]);
}

console.log(names);

//create an array of your favorite candy bars

var favCandy = ["butterfinger", "twizzler", "sprees", "skittles"];
console.log(favCandy);
console.log(favCandy[0]);

//////////////////////to add to an array//////
favCandy.push("sweettarts");
console.log(favCandy);

///to remove an item from an array////////
favCandy.pop();
console.log(favCandy);
favCandy.pop();
console.log(favCandy);

//.index will return the index of where a value is located in the array
console.log(favCandy.indexOf("butterfinger"));

//.spicke will allow us to remove the item from the array permanently
favCandy.splice([3]);
console.log(favCandy)


\


