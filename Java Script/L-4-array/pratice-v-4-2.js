let price =[250,645,300,900,50];
console.log("before change:");
console.log(price);
for(let i = 0;i<price.length;i++){
    //10% off to the every price means 90% of the original price
    price[i] = price[i]*0.90;
}
console.log("after change:");
console.log(price);
