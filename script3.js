//function
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
  return AUD = USD * 1.5;
}

console.log(convertUsdToAud(1000));
console.log(convertUsdToAud(500));
console.log(convertUsdToAud(300));