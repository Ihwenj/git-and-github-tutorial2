console.log("advance javascript");

//while loop
let counter = 1;
while (counter <= 20){
    console.log(counter);
    counter = counter + 1;
    
}

//for loop
for (i=1; i<=20; i+=4){
    console.log(`${i} counting using for loop`);
}

//excercise1 combining if statement with for loop
for(i=1; i<=15; i++){
    if (i%5 ===0){
        console.log(`${i} - ASAPfrontend`)
    }
    else if (i%2 ===0){
        console.log(`${i} - Frontend`)
    }
    else {
        console.log(`${i} - ASAP`);
    }

}

//excercise2 using for loop to print even numbers
let str="ASAP Frontend";
for (i=0; i<str.length; i++){
    console.log(str[i]);

}

//function
