// //strings
// let str = "Pradyumna Sahu";
// console.log("string is :",str);
// console.log("type is :",typeof(str));
// let len = str.length;
// console.log("string length is ",len);
// console.log("access the 8th element ",str[8]);


// //template literals
// let templite = `This is a template literal.`;
// console.log(templite);
// console.log("type of template literals is:",typeof(templite));//string

// let obj1={
//     name : "pen",
//     price: 15, 
// };
// console.log("the price of",obj1.name,"is",obj1.price,"rupees");//o/p:the price of pen is 15 rupees
// //using string interpolation
// let output = `the price of ${obj1.name} is ${obj1.price} rupees`;//o/p:the price of pen is 15 rupees
// console.log(output);


// console.log(`the sum of 1 , 2 & 3 is = ${1+2+3}`);
// console.log(`the multiplication of 1 , 2 , 3 & 4 is = ${1*2*3*4}`);


// //escape character
// let str1 = "Pradyumna\nSahu";
// console.log(str1);
// console.log("length is =",str1.length);
// let str2 = "Pradyumna\tSahu";
// console.log(str2);
// console.log("length is =",str2.length);


// //string method
// let str = "Pradyumna Sahu";
// console.log("actual string =",str);
// let upperstr = str.toUpperCase();
// console.log("UpperCase string =",upperstr);
// let lowerstr = str.toLowerCase();
// console.log("LowerCase string =",lowerstr);
// //console.log("LowerCase string =",str.toLowerCase());//this is also possible


// //trim opeartion
// let str3 = "     Pradyumna  Sahu.    ";
// console.log("actual string =",str3);
// console.log("after removing white space =",str3.trim());//remove only start and end white spaces

// //slice operation
// let str4 = "Umbrella";
// console.log(str4.slice(2,7));//o/p:brell
// //str.slice(start.index,end.index);
// console.log(str4.slice(2));//o/p:brella

// //concatenation operation
// let str1 = "Apna";
// let str2 = "College";
// let result = str1+str2;
// //let result = str1.concat(str2);
// let result2 ="I am Learning From "+str1+str2;
// console.log(result2);//o/p:I am Learning From ApnaCollege
// console.log(result);//o/p:ApnaCollege

//replace opeartion
let str1 = "ApnaCollege";
console.log(str1);
// let result = str1.replace("l","m");//chage only first occurence
let result = str1.replace("College","School");
console.log(result);
