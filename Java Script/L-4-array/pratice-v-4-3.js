let companies  = ["Bloomberg","MIcrosoft","uber","Google","IBM","Netflix"];
console.log(companies);
//o/p:(6) ['Bloomberg', 'MIcrosoft', 'uber', 'Google', 'IBM', 'Netflix']

//remove 1st compant from the array
companies.splice(0,1);
console.log(companies);
//o/p:(5) ['MIcrosoft', 'uber', 'Google', 'IBM', 'Netflix']

//remove uber and ola in its place
companies.splice(1,1,"Ola");
console.log(companies);
//o/p:(5) ['MIcrosoft', 'Ola', 'Google', 'IBM', 'Netflix']

//add amazon at the end
companies.splice(5,0,"Amazon");
console.log(companies);
//o/p:(6) ['MIcrosoft', 'Ola', 'Google', 'IBM', 'Netflix', 'Amazon']