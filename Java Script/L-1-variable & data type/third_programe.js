let name1 = "pradyumna";
name1 = "chinu"; 
console.log(name1);
let price = 130.50;
console.log(price);
let key;
console.log(key);//undefined

//var is used before 2015 ,after that var is  not used 
//var name2 = "golu";
//var name2 = "chotu";

const age = 20;
//age = 30 //is not possible;  
console.log(age);
//const a;
//console.log(a);//it is not possible in const

//global declaration
d = 25;
{
    //inside a block declaration
    c = 5;
    console.log(c); 
    console.log(d); 
}
{
    c = 10;
    console.log(c); 
    console.log(d); 
}