console.log("JS Object tutorial");
let user = {
  name: "Joshua Ihwen",
  email: "ihwenj@gmail.com",
  password: "Josh@1994",
  discord: "exampledisco",
  subscription: "VIP+",
  userCompleted: [1, 2, 3],
};
console.log(user.name[0]);
console.log(user.email);
console.log(user.userCompleted);

//array of objects
let userArray = [
  {
    name: "Joshua Ihwen",
    email: "ihwenj@gmail.com",
    password: "Josh@1994",
    discord: "exampledisco",
    subscription: "VIP+",
    userCompleted: [1, 2, 3],
  },
  {
    name: "Joseph John",
    email: "ihwenjoseph@gmail.com",
    password: "Josh@1984",
    discord: "newdisco",
    subscription: "VIP",
    userCompleted: [1, 2, 3, 4],
  },
];

console.log(userArray[0].userCompleted.map((element) => element + 3));

//assignment
let myUserArray = [];

function signUp(user) {
        myUserArray.push(user);
    }

signUp(
  {
  email: "ihwenj@gmil.com", 
  password: "Josh@1994", 
  name: "Joshua", 
  discord: "samplediscord", 
  subscription: "VIP+", 
  lessonCompleted: [1,2,3,5]
  }
);


console.log(myUserArray);


//assignment (student scors)
let students = [];
 function addStudent (
  name,
  email,
  mathScore,
  englishScore,
  scienceScore,
 )
 {
  let totalScore = mathScore + englishScore + scienceScore;
  let averageScore = totalScore/3;

  let grade = " ";
  if (averageScore >= 70){
    grade = "A"
  }
  else if (averageScore >= 50){
    grade = "Average";
  }
  else{
    grade ="Fail";
  }
  let studentDetails = {
    name: name,
    email: email,
    mathScore: mathScore,
    englishScore: englishScore,
    scienceScore: scienceScore,
    totalScore: totalScore,
    averageScore: averageScore,
    grade: grade
  }

  students.push(studentDetails);
 }

 addStudent (
  "Joshua Ihwen",
  "ihwenj@1995",
  80,
  70,
  65,
 )

  addStudent (
  "Joseph Wilberforce",
  "Joseph.j@1995",
  90,
  40,
  45,
 )

 addStudent (
  "Jonothan Wilberforce",
  "Jonothan.j@1995",
  70,
  50,
  45,
 )
  addStudent (
  "John Wilberforce",
  "John.j@1995",
  88,
  20,
  15,
 )

 for (i=0; i<students.length; i++){
  console.log(`Name: ${students[i].name}`);
  console.log(`Email: ${students[i].email}`);
  console.log(`Math: ${students[i].mathScore}, English: ${students[i].englishScore}, ScienceScore: ${students[i].scienceScore}`);
  console.log(`TotalScore: ${students[i].totalScore}`);
  console.log(`AverageScore: ${students[i].averageScore}`);
  console.log(`grade: ${students[i].grade}`);

 }