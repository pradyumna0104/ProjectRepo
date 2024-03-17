// let marks =[34,39,27,36,30,27];
// console.log(marks);
// console.log(marks.length);
// console.log(marks[4]);//30
// console.log(marks[6]);//undefined
// marks[3] = 38;
// console.log(marks[3]);//38
// console.log("type of array =",typeof(marks));


// let heros = ["Spiderman","Hulk","Thor","Antman","Batman","Ironman"];
// console.log(heros);
// console.log("type of array =",typeof(heros));


let heros = ["Spiderman","Hulk","Thor","Antman","Batman","Ironman"];
//for loop 
for(let i = 0;i<heros.length;i++){
    console.log("heros[",i,"] = ",heros[i]);
}
/*
heros[ 0 ] =  Spiderman
heros[ 1 ] =  Hulk
heros[ 2 ] =  Thor
heros[ 3 ] =  Antman
heros[ 4 ] =  Batman
heros[ 5 ] =  Ironman
*/
//for of loop
for (let each of heros){
    console.log(each);
}
/*
o/p:
Spiderman
Hulk
Thor
Antman
Batman
Ironman
*/
for (let each of heros){
    console.log(each.toUpperCase());
}
/*
o/p:
SPIDERMAN
HULK
THOR
ANTMAN
BATMAN
IRONMAN
*/
