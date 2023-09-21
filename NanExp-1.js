let value = "124abc";
let conValue = Number(value);
console.log(typeof value);
console.log(value);

console.log(typeof conValue);
console.log(conValue);

/* In the above example, When we try to convert not a number value to Number
   we get it's type is number but when try to print it showing NaN.
*/
console.log("-----------------------------------------------------------------");

let data = undefined;
let conData = Number(data);
console.log(typeof data);
console.log(data);
console.log(typeof conData);
console.log(conData);


console.log("-----------------------------------------------------------------");


console.log(isNaN(true));//false - Because it can convert to 1;
console.log(isNaN(8235));//false - Because it is itself a number;
console.log(isNaN("Hello"));//true - Because we can't convert a String(alphabate) to number;
console.log(isNaN(undefined));//true - Because we are unable to convert it to number;
console.log(isNaN('342'));//false - Because in JS we can convert it to a number;

println("Hello Hii Namaskar")