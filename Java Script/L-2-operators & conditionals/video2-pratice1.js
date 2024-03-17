// //alert  to pop up any message in website
// alert("Hello Dost!");
// //prompt used for taking input from the user
// let name1 = prompt("enter your name!");
// console.log("your name is ",name1);


// //pratice question 1
// let num = prompt("enter a number");
// if(num% 5===0){
//     console.log("number is multiple of 5.");
// }else{
//     console.log("number is not multiple of 5.");
// }


// //pratice question 2
// let score = prompt("enter your score ");
// if(score>=80 && score<=100){
//     console.log(score,"is A score");
// }else if(score>=70 && score<=79){
//     console.log(score,"is B score");
// }else if(score>=60 && score<=69){
//     console.log(score,"is C score");
// }else if(score>=50 && score<=59){
//     console.log(score,"is D score");
// }else{
//     console.log(score,"is F score");
// }

//         or 

//pratice question 2
let score = prompt("enter your score(0-100)");
let grade;
if(score>=80 && score<=100){
    grade = "A";
}else if(score>=70 && score<=79){
    grade = "B";
}else if(score>=60 && score<=69){
    grade = "C";
}else if(score>=50 && score<=59){
    grade = "D";
}else{
    grade = "F";
}
console.log("According to your score ,your garde is",grade);