
console.log(addNumberOne(5));// We can execute before declaration. This is also called hoisting

function addNumberOne(num) {
    return num + 1;
}
console.log(addNumberOne(5));


//We can declare a function like this; but some time it's called "Expression".

// console.log(addNumberTwo(8)); //If we declare function in Expression then we can't excute before declare function

const addNumberTwo = function (num) {
    return num + 2;
}
console.log(addNumberTwo(8));