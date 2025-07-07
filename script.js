// conditional variable
let hasMemberShip = false;
let hasLoggedIn = true;
if(hasMemberShip === true){
console.log("show him the video");
}
else if(hasLoggedIn === true){
    console.log("Kindly upgrade")
}
else{
    console.log("Kindly login");
}

//example 2 of if statement
let age = 18;
if(age > 18){
    console.log(`Yep, you are ${age} years old, you can vote.`);
}
else if(age === 18){
    console.log(`Oh you just turned ${age} you are welcome.`);
}
else{
    console.log(`You are ${age} years old, too young to vote.`);
}

//Logical Operator 1. ADD Opertor
let userAge = 20;
let userId = true;

if(userAge >= 18 && userId === true){
    console.log(`yep, you are ${userAge} yes old and have an ID, you can enter.`);
}

//Logical Operator 2. OR Operator
let myAge = 16;
let myId = true;
if(myAge >= 18 || myId === true){
    console.log("You are qualified to enter.");
}

//ternary operator
let isRaining = true;
isRaining ? console.log("stay in door") :  console.log("you can come out");

let varNumber = 16;
varNumber >= 18 ? console.log("you are qualify to vote") : console.log("you are not qualify to vote");

let varAge = 20;
let varId = true;

varAge >= 18 && varId === true ? console.log("You are truely Qualify  to vote") : console.log("one of your details is not correct, you are not qualify to vote");
let str=varAge >= 18 || varId === true ? "you Might be qualify" : "you are completely disqualify";
console.log(str);

// assignment on ternary operator
let loggedIn = true;
let hasMembership = false;

let myStr= loggedIn && hasMembership ? "show Video" : "Dont show video";
console.log(myStr);
