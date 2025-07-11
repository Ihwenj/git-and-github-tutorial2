//regular function
function greetUser(name, time){
    console.log(`Good ${time} ${name}`);
}
greetUser("Joshua", "Morning");
greetUser("apostle", "Evening");

//function with return value
function main(nn){
   
   let greetings = `Hello ${nn}, welcome to JS crash course`;
     return greetings;
}

console.log(main());

//example of function with default parameter
function sum(num1, num2){
    return num1 / num2;
}

console.log(sum(8));

//assignment using function
function convertUsdToAud(USD){
  return USD * 1.5;
}

console.log(convertUsdToAud(1000));
console.log(convertUsdToAud(500));
console.log(convertUsdToAud(200));
console.log(convertUsdToAud(100));

//arrow function
const convertCurrency = () =>{
  console.log("This is an arrow function");
}
convertCurrency();

//array
let items = ["apple", "banana", "orange", "fruit"];
console.log(items[items.length-1]);

items.push("Mango");
console.log(items[items.length-1]);
//array filter
let filterArray = items.filter((ford) => {
  console.log(ford);
  return true
})

console.log(filterArray);
//example2 of array filter
let valueArray = [10, 29, 50,60,80,90,100,120,150,200];

console.log(valueArray);

let filteredValueArray = valueArray.filter(myValue => myValue > 50 && myValue <= 160
);

console.log(filteredValueArray);

//exercise
let clubAge1 = [18,20,16,15,21];
let clubAge2 = [16, 17,14,15,19];
let clubAge3 = [20, 22, 26, 16, 20];
let filteredClubAge1 = clubAge1.filter((clubAge1Value) => {
  if (clubAge1Value >= 18){
    return true
  }
});

console.log(filteredClubAge1);

let filteredClubAge2 = clubAge2.filter((clubAge1Value2) => {
  if (clubAge1Value2 >= 18){
    return true
  }
});

console.log(filteredClubAge2);

let filteredClubAge3 = clubAge3.filter(clubAge1Value3 => clubAge1Value3 >= 18);
console.log(filteredClubAge3);

//example 2
let classResults = [100, 30, 40, 70, 80, 50, 100, 10, 90,20];

let filteredClassResults = classResults.filter(classResultValue => {
  if (classResultValue >= 50){
    return true;
  }});
console.log(classResults);
console.log(filteredClassResults);

// for loop in an array
let people = [10, 20, 80,50,60,30,40];
for (i = 0; i< people.length; i++){
  console.log ("town " + (i) + " has " + people[i] + " People");
};

// Assignment using for loop
let attendance = [18,20,16,15,21];
let attendance2 = [16, 17,14,15,19];
let attendance3 = [20, 22, 26, 16, 20];

console.log("attendance result");
for (i=0; i<attendance.length; i++){
  if(attendance [i]>= 18){
 console.log(attendance[i]);
  }
};

console.log("attendance2 result");
for (i=0; i<attendance2.length; i++){
  if(attendance2 [i]>= 18){
 console.log(attendance2[i]);
  }
};

console.log("attendance3 result");
for (i=0; i<attendance3.length; i++){
  if(attendance3 [i]>= 18){
 console.log(attendance3[i]);
  }
};

console.log("end of Assignment");

//another method
console.log("another Method of combining if, for and array function Push");
let adults = [];
for (i=0; i<attendance.length; i++){
  if(attendance [i] >= 18){
    adults.push(attendance [i])
  }
}

console.log(adults);
console.log(attendance);

//array map method
let MapArray = [2,5,4,3,7,9];

let newMapArray = MapArray.map(mapArrayValue => null);

console.log(newMapArray);

//Assignment on map array
let usDollars = [10, 20, 30, 40];

let usDollarsToAud = usDollars.map(usDollarsToAudValue => usDollarsToAudValue * 1.5);

console.log(usDollarsToAud);

//assignment 2
console.log("assignment 2 on dollar to AUD map")
let usDollars2 = [100, 150, 35];

let usDollarsToAud2 = usDollars2.map(usDollarsToAudValue2 => usDollarsToAudValue2 * 1.5);

console.log(usDollarsToAud2);

//using for, if and array for usd AUd convertion

console.log("using for, if and array for usd AUd convertion");

let newUsdToAudConvert = [];
for(i=0; i<usDollars.length; i++){
  newUsdToAudConvert.push(usDollars[i] * 1.5);
}

console.log(newUsdToAudConvert);