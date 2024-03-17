let age = 25;
console.log(typeof age);//number

let price  = -130.56;
console.log(typeof price);//number

let fullname = "pradyumna sahu";
console.log(typeof fullname);//string

let isfollow = true;
console.log(typeof isfollow);//boolean

let large = BigInt("123");
console.log(typeof large);//BigInt

let sys = Symbol("hello!");
console.log(typeof sys);

const student = {
    fullname: "pradyumna",
    rollno:104,
    ispass:true,
    age:20,
};
console.log(student);//{fullname: 'pradyumna', rollno: 104, ispass: true, age: 20}
console.log(typeof student);//object
console.log(student["age"]);//20
console.log(student.age);//20
console.log(student.fullname);//pradyumna
student.age = student.age + 1;//21
student["age"] = student["age"] + 1;//22
console.log(student.age);//22
student.name = "Aditi Sharma.";
console.log(student.name);//Aditi Sharma