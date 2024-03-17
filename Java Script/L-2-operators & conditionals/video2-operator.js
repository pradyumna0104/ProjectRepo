console.log("Hello World!");


// //arithematic opeartor
// let a = 4;
// let b = 3;
// console.log("a = ", a ,"& b = ", b );
// console.log("a + b = ",a + b);//7
// console.log("b - a = ",b - a);//-1
// console.log("a * b = ",a * b);//12
// console.log("a / b = ",a / b);//1.333333333
// console.log("a % b = ",a % b);//1
// console.log("a ** b = ",a ** b);  //a^b or a to the power b
// console.log("a << b = ",a << b);//32
// console.log("a >> b = ",a >> b);//0
// console.log("a = ", a ,"& b = ", b );//a =  4 & b =  3
// a++;
// console.log("after unary increment of a.");
// console.log("a = ", a ,"& b = ", b );//a =  5 & b =  3
// b--;
// console.log("after unary dcecrement of b.");
// console.log("a = ", a ,"& b = ", b );//a =  5 & b =  2


// //unary operator
// let c = 6;
// let d = 7;
// console.log("c = ", c ,"& d = ", d );//c =  6 & d =  7
// console.log("c++ = ", c++ ,"& ++d = ", ++d );//c++ =  6 & ++d =  8
// console.log("c = ", c ,"& d = ", d );//c =  7 & d =  8
// console.log("c-- = ", c++ ,"& --d = ", --d );//c-- =  7 & --d =  7
// console.log("c = ", c ,"& d = ", d );//c =  8 & d =  7


// //Assignment operator
// let a = 5;
// console.log("a = ",a);//a = 5
// console.log("(a/=4) = ",a/=4);//(a/=4) =  1.25
// console.log("a = ",a);// a = 1.25
// console.log("(a*=8) = ",a*=8);//(a*=8) =  10
// console.log("a = ",a);//a = 10
// console.log("(a%=4) = ",a%=8);//(a%=8) =  2
// console.log("a = ",a);//a = 2
// console.log("(a**=4) = ",a**=4);//(a**=4) =  16


// //comparison operator
// let a = 5,b = 2;
// console.log("a = ",a,"& b = ", b);
// console.log("(a==b) = ",a==b); //false
// console.log("(a!=b) = ",a!=b); //true

// let c = 5;//intger
// let d = "5";//string 
// console.log("c = ",c ,"& d = ", d);
// //"==" operator used to check equal to
// console.log("(c==d) = ",c==d); //true
// //"===" operator used to check equal to and type
// console.log("(c===d) = ",c===d); //false
// console.log("(c!=d) = ",c!=d); //false
// console.log("(c!==d) = ",c!==d); //true


//logical operator
let a = 5;
let b = 6;
let cond1 = a < b;//true
let cond2 = a===5;//true
console.log("cond1 && cond2 = ", cond1 && cond2);//true
let cond3 = a===6;//false
console.log("cond1 && cond3 = ", cond1 && cond3);//false
console.log("cond1 || cond3 = ", cond1 || cond3);//true
console.log("cond1 != cond3 = ", cond1 != cond3);//true