//Nulish Coalescing Operator (??) => prefer to use for null undefined

let val1;
let val2;
let val3;
let val4;
let val5;

val1 = 10 ?? 20;// In this case first value will be print 
val2 = null ?? 30;// In this case second value will be print because first is null
val3 = undefined ?? 40;// In this case second value will be print because first is undefined
val4 = 10 ?? "Hello Val4";// In this case first value will be print 
val5 = null ?? "Hello Val5";// In this case second value will be print because first is null
val6 = undefined ?? "Hello Val6";// In this case second value will be print because first is undefined

console.log(val1);
console.log(val2);
console.log(val3);
console.log(val4);
console.log(val5);
console.log(val6);
