// console.log("welcome to array methods");
// let fooditems =["tomato","patato","chips","drinks","biscuits","kurkure"];
// console.log(fooditems);

// fooditems.push("lichi","watermelon");
// console.log("after pushing 3 items");
// console.log(fooditems);
// console.log('after performing pop operation');

// //pop operation return the deleted value
// let deletevalue = fooditems.pop();
// console.log(fooditems);
// console.log(`delete items = ${deletevalue}`);

// console.log(fooditems.toString());


// let marvelheros = ["spiderman","thor","ironman"];
// console.log(`marval heros = ${marvelheros}`);
// let dcheros = ["superman","batman"];
// console.log(`dc heros = ${dcheros}`);
// let indianheros = ["shaktiman","krish"]
// console.log(`indian heros = ${indianheros}`);
// let allheros = marvelheros.concat(dcheros,indianheros);
// console.log(allheros);
// //add item to the first
// marvelheros.unshift("antman");
// console.log(`marval heros = ${marvelheros}`);
// //delete first item
// let deleted = marvelheros.shift();
// console.log("deleted =",deleted);
// console.log(`marval heros = ${marvelheros}`);



//slice array operation
// let marvelheros = ["spiderman","thor","ironman","antman","Dr.strange"];
// console.log(marvelheros);
// //o/p:(5) ['spiderman', 'thor', 'ironman', 'antman', 'Dr.strange']
// console.log(marvelheros.slice(1,3));//it does not change trhe original array
// //o/p:(2) ['thor', 'ironman']
// console.log(marvelheros);
// //o/p:(5) ['spiderman', 'thor', 'ironman', 'antman', 'Dr.strange']


//splice operation// splice(starting position ,, how many place ,, what change)
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arr);
//o/p:(9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
arr.splice(2,3,101,205,203);//change element/elements using splice
console.log(arr);
//o/p:(9) [1, 2, 101, 205, 203, 6, 7, 8, 9]
arr.splice(2,0,786);//add elemnet/elements using splice
console.log(arr);
//o/p:(10) [1, 2, 786, 101, 205, 203, 6, 7, 8, 9]
arr.splice(2,3);//delete element/elements using splice
console.log(arr);
//o/p:(7) [1, 2, 203, 6, 7, 8, 9]