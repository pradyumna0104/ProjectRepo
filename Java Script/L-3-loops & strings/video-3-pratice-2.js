/*
create a game where you start with any random game number. ask the user to keep guessing your game 
number until the user guess the correct value 
 */
let ournum = 28;
let usernum = prompt("enter a number(0-100) to check your luck.");
//prompt always return a string

while(ournum != usernum){
    usernum = prompt("your number is wrong,please try again.");
}

console.log("congraluations you guess the final answer.");