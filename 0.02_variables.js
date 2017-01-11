/*
//Variables are storage containers. It's important
//what they are named is comparable to thier contents.

var firstName = "Lisa";
var lastName = "Hamilton"

//concatentation (used to combine strings)
//Be sure to add quotation marks and space
console.log(firstName+ " "+lastName);


var fullName = firstName +" " +lastName;
console.log(fullName)

console.log(firstName +(1));

//empty variables give undefined results
var num;
console.log(num);

//variables are read as their written. Therefore
//a variable can not be called prior to being declared.
//This will bring an undefined result
var num;
console.log(num);
num = 2;

//empty string
var petsName = "";
petsName = "Sam";
console.log(petsName);

//conventional variable namings
//camel case

//snake case_when_each_word_is_connected_with_an_

//another way of naming a variable "let"
//let are more secure variables


//short hand operators
// *=, /=, +=, all bring back result which reassigns
//variable
var age = 55;
//console.log(1 += 1);//1 = 1+1
//console.log(age += 1); //age=age +1
//console.log(age *= 2);
//console.log(age /= 2);//age = age/2
//console.log(age/2)

*/
//challenge
var carMake = "Chrysler";
var carModel = "Suburban";
var monthOfBirth = "July";
var schoolName = "EFA";
var town = "Cloverdale";

var myNumber = 0;
console.log(myNumber += 10);
console.log(myNumber -= 1);
console.log(myNumber *=9);
console.log(myNumber /= 7);

var age = 37;
var maxAge = 99;
var dailyWaterIntake = 8;
var lifeexp = maxAge - age;
var lifeWater = dailyWaterIntake * lifeexp;

console.log("You will need" + " " +lifeWater + " "+ "glasses
 to last you unitl the ripe old age of" + " " +maxAge);




