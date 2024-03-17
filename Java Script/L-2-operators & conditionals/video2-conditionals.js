console.log("Hello World!");


//condditional statement
let age =23;
if(age >= 18){
    console.log("youy can vote.");
}else{
    console.log("you cann't vote.");
}


let mode = "black";
let color;
if(mode === "black"){
    color = "black";
}else{
    color = "light";
}
console.log("color = ",color);


//taking from user
//number = prompt("enter a number");
let number = 13;
if(number % 2 === 0){
    console.log(number," is even");
}else{
    console.log(number," is odd");
}


let grade  = 90;
if(grade >= 90){
    console.log("A++ grade.");
}else if(grade < 90 && grade >= 80){
    console.log("A grade.");
}else{
    console.log("kyanu padha ta he bhai tu.");
}


//ternary operator
let num = 9;
let anstype1 = num>18 ? "adult":"not adult";
console.log(anstype1);
num>18 ? console.log("adult"):console.log("not adult");